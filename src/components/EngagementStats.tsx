import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Heart, Share2, Coffee, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { trackEvent } from '../utils/analytics';
import { getRemoteCount, incrementRemoteCount } from '../utils/counterApi';

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
}

const DEFAULT_BASE_VIEWS = 3480;
const DEFAULT_BASE_LIKES = 312;
const DEFAULT_BASE_SHARES = 46;

// Micro animated rolling number ticker
const NumberTicker: React.FC<{ value: number }> = ({ value }) => {
  return (
    <motion.span
      key={value}
      initial={{ y: -6, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="inline-block font-mono font-bold"
    >
      {value.toLocaleString()}
    </motion.span>
  );
};

export const EngagementStats: React.FC = () => {
  // Initialize with persisted or default baseline values
  const [views, setViews] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('portfolio_live_views');
      return saved ? parseInt(saved, 10) : DEFAULT_BASE_VIEWS;
    } catch {
      return DEFAULT_BASE_VIEWS;
    }
  });

  const [likes, setLikes] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('portfolio_live_likes');
      return saved ? parseInt(saved, 10) : DEFAULT_BASE_LIKES;
    } catch {
      return DEFAULT_BASE_LIKES;
    }
  });

  const [shares, setShares] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('portfolio_live_shares');
      return saved ? parseInt(saved, 10) : DEFAULT_BASE_SHARES;
    } catch {
      return DEFAULT_BASE_SHARES;
    }
  });

  const [hasLiked, setHasLiked] = useState<boolean>(() => {
    try {
      return localStorage.getItem('portfolio_user_has_liked') === 'true';
    } catch {
      return false;
    }
  });

  const [copied, setCopied] = useState<boolean>(false);
  const [floatingHearts, setFloatingHearts] = useState<FloatingHeart[]>([]);

  // Synchronize on mount
  useEffect(() => {
    let isMounted = true;

    const initStats = async () => {
      try {
        const sessionCounted = sessionStorage.getItem('portfolio_session_counted') === 'true';

        // 1. Increment unique session view
        if (!sessionCounted) {
          sessionStorage.setItem('portfolio_session_counted', 'true');
          setViews((prev) => {
            const next = prev + 1;
            try {
              localStorage.setItem('portfolio_live_views', next.toString());
            } catch {}
            return next;
          });
          // Background CounterAPI increment
          const remote = await incrementRemoteCount('views');
          if (isMounted && remote !== null) {
            setViews(DEFAULT_BASE_VIEWS + remote);
            try {
              localStorage.setItem('portfolio_live_views', (DEFAULT_BASE_VIEWS + remote).toString());
            } catch {}
          }
        } else {
          const remote = await getRemoteCount('views');
          if (isMounted && remote !== null) {
            setViews(DEFAULT_BASE_VIEWS + remote);
          }
        }

        // 2. Fetch remote likes
        const remoteLikes = await getRemoteCount('likes');
        if (isMounted && remoteLikes !== null) {
          setLikes(DEFAULT_BASE_LIKES + remoteLikes);
        }

        // 3. Fetch remote shares
        const remoteShares = await getRemoteCount('shares');
        if (isMounted && remoteShares !== null) {
          setShares(DEFAULT_BASE_SHARES + remoteShares);
        }
      } catch {
        // Safe offline fallback
      }
    };

    initStats();

    return () => {
      isMounted = false;
    };
  }, []);

  // Handle Instant Like Interaction
  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 1. INSTANT UI State & LocalStorage Update (<1ms)
    setLikes((prev) => {
      const next = prev + 1;
      try {
        localStorage.setItem('portfolio_live_likes', next.toString());
        localStorage.setItem('portfolio_user_has_liked', 'true');
      } catch {}
      return next;
    });
    setHasLiked(true);

    trackEvent('engagement_like', 'Engagement', 'Liked Portfolio');

    // 2. Spawn Floating Mini Heart
    const rect = e.currentTarget.getBoundingClientRect();
    const newHeart: FloatingHeart = {
      id: Date.now() + Math.random(),
      x: rect.left + rect.width / 2 + (Math.random() * 30 - 15),
      y: rect.top - 10,
    };
    setFloatingHearts((prev) => [...prev.slice(-8), newHeart]);

    // 3. Confetti Burst
    try {
      confetti({
        particleCount: 24,
        spread: 55,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
        colors: ['#ec4899', '#f43f5e', '#fb7185', '#fda4af'],
        ticks: 100,
        gravity: 1.2,
        scalar: 0.8,
      });
    } catch {}

    // 4. Background Sync to Cloud CounterAPI
    incrementRemoteCount('likes').then((remote) => {
      if (remote !== null) {
        setLikes(DEFAULT_BASE_LIKES + remote);
        try {
          localStorage.setItem('portfolio_live_likes', (DEFAULT_BASE_LIKES + remote).toString());
        } catch {}
      }
    });
  };

  // Handle Instant Share Interaction
  const handleShare = async () => {
    const shareData = {
      title: 'Alif Sakib — Frontend Developer Portfolio',
      text: 'Check out Md. Sakib Hossain Alif’s Frontend Developer Portfolio & Interactive Web Apps!',
      url: window.location.origin || 'https://alifsakib.me',
    };

    trackEvent('engagement_share', 'Engagement', 'Shared Portfolio');

    // 1. INSTANT UI State Update
    setShares((prev) => {
      const next = prev + 1;
      try {
        localStorage.setItem('portfolio_live_shares', next.toString());
      } catch {}
      return next;
    });

    // 2. Background CounterAPI sync
    incrementRemoteCount('shares');

    // 3. Web Share API or Clipboard Copy
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {}
    }
  };

  // Handle SupportKori Widget Trigger
  const handleOpenSupport = () => {
    trackEvent('engagement_support_coffee', 'Engagement', 'Clicked Support Coffee');
    const skBtn = document.querySelector('.sk-widget-btn') as HTMLElement | null;
    if (skBtn) {
      skBtn.click();
    } else {
      window.open('https://supportkori.com/alifsakib', '_blank');
    }
  };

  return (
    <section className="py-12 bg-slate-100/60 dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative rounded-3xl p-6 sm:p-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 shadow-xl overflow-hidden text-center"
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Section Subheading */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700/70 border border-slate-200 dark:border-slate-600 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Community &amp; Engagement</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
            Enjoyed Exploring the Portfolio?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6">
            Leave some love, share with fellow engineers, or support my work with a coffee! ☕
          </p>

          {/* Framer Motion Inspired Engagement Pill Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-700/80 shadow-inner">
            {/* 1. Live Visits / Views Counter */}
            <div
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-bold shadow-xs select-none"
              title="Total real-time visitor views"
            >
              <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <NumberTicker value={views} />
              <span className="text-[10px] font-semibold uppercase text-slate-500 dark:text-slate-400">Views</span>
            </div>

            {/* 2. Interactive Love / Like Button with Spring Physics */}
            <motion.button
              onClick={handleLike}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all shadow-xs cursor-pointer select-none ${
                hasLiked
                  ? 'bg-rose-500 text-white shadow-rose-500/25 border border-rose-600'
                  : 'bg-white dark:bg-slate-800 text-rose-600 dark:text-rose-400 border border-rose-200/80 dark:border-rose-900/60 hover:bg-rose-50 dark:hover:bg-rose-950/40'
              }`}
              title="Click to love this portfolio!"
            >
              <motion.div
                animate={hasLiked ? { scale: [1, 1.45, 1] } : {}}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Heart className={`w-4 h-4 ${hasLiked ? 'fill-white' : 'fill-rose-500/20'}`} />
              </motion.div>
              <NumberTicker value={likes} />
              <span className="text-[10px] font-semibold uppercase opacity-90">Loves</span>
            </motion.button>

            {/* 3. Share Portfolio Button with Animated Copy Toast */}
            <motion.button
              onClick={handleShare}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer select-none"
              title="Share portfolio or copy link"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
              ) : (
                <Share2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              )}
              <NumberTicker value={shares} />
              <span className="text-[10px] font-semibold uppercase text-slate-500 dark:text-slate-400">
                {copied ? 'Copied!' : 'Shares'}
              </span>
            </motion.button>

            {/* 4. Support / Coffee Button */}
            <motion.button
              onClick={handleOpenSupport}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-black shadow-xs transition-all cursor-pointer select-none"
              title="Buy Alif a coffee on SupportKori"
            >
              <Coffee className="w-4 h-4 text-slate-950 fill-amber-950/20 shrink-0" />
              <span>Coffee</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Animated Hearts */}
      <AnimatePresence>
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, y: heart.y, x: heart.x, scale: 0.6 }}
            animate={{
              opacity: 0,
              y: heart.y - 80 - Math.random() * 40,
              x: heart.x + (Math.random() * 50 - 25),
              scale: 1.4,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="fixed pointer-events-none z-50 text-rose-500"
            onAnimationComplete={() => {
              setFloatingHearts((prev) => prev.filter((h) => h.id !== heart.id));
            }}
          >
            <Heart className="w-5 h-5 fill-rose-500 drop-shadow-md" />
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
};
