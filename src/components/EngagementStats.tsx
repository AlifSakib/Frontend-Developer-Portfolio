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

const BASE_VIEWS = 3480;
const BASE_LIKES = 312;
const BASE_SHARES = 46;

export const EngagementStats: React.FC = () => {
  const [views, setViews] = useState<number>(BASE_VIEWS);
  const [likes, setLikes] = useState<number>(BASE_LIKES);
  const [shares, setShares] = useState<number>(BASE_SHARES);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [floatingHearts, setFloatingHearts] = useState<FloatingHeart[]>([]);

  // Initialize and synchronize with CounterAPI
  useEffect(() => {
    let isMounted = true;

    const initStats = async () => {
      try {
        const userHasLiked = localStorage.getItem('portfolio_user_has_liked') === 'true';
        const sessionCounted = sessionStorage.getItem('portfolio_session_counted') === 'true';

        if (isMounted) {
          setHasLiked(userHasLiked);
        }

        // 1. Fetch & increment views on new unique session
        if (!sessionCounted) {
          sessionStorage.setItem('portfolio_session_counted', 'true');
          const remoteViews = await incrementRemoteCount('views');
          if (isMounted && remoteViews !== null) {
            setViews(BASE_VIEWS + remoteViews);
          }
        } else {
          const remoteViews = await getRemoteCount('views');
          if (isMounted && remoteViews !== null) {
            setViews(BASE_VIEWS + remoteViews);
          }
        }

        // 2. Fetch remote likes
        const remoteLikes = await getRemoteCount('likes');
        if (isMounted && remoteLikes !== null) {
          setLikes(BASE_LIKES + remoteLikes);
        }

        // 3. Fetch remote shares
        const remoteShares = await getRemoteCount('shares');
        if (isMounted && remoteShares !== null) {
          setShares(BASE_SHARES + remoteShares);
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

  // Handle Like Interaction with Remote Sync
  const handleLike = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // Optimistic local state update
    const nextLikes = likes + 1;
    setLikes(nextLikes);
    setHasLiked(true);

    try {
      localStorage.setItem('portfolio_user_has_liked', 'true');
    } catch {
      // ignore
    }

    trackEvent('engagement_like', 'Engagement', 'Liked Portfolio');

    // Spawn floating mini hearts
    const rect = e.currentTarget.getBoundingClientRect();
    const newHeart: FloatingHeart = {
      id: Date.now() + Math.random(),
      x: rect.left + rect.width / 2 + (Math.random() * 30 - 15),
      y: rect.top - 10,
    };
    setFloatingHearts((prev) => [...prev.slice(-6), newHeart]);

    // Micro Confetti Burst on like
    try {
      confetti({
        particleCount: 22,
        spread: 50,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
        colors: ['#ec4899', '#f43f5e', '#fb7185', '#fda4af'],
        ticks: 120,
        gravity: 1.2,
        scalar: 0.75,
      });
    } catch {
      // ignore
    }

    // Synchronize increment to CounterAPI
    const remoteCount = await incrementRemoteCount('likes');
    if (remoteCount !== null) {
      setLikes(BASE_LIKES + remoteCount);
    }
  };

  // Handle Share Interaction with Remote Sync
  const handleShare = async () => {
    const shareData = {
      title: 'Alif Sakib — Frontend Developer Portfolio',
      text: 'Check out Md. Sakib Hossain Alif’s Frontend Developer Portfolio & Interactive Web Apps!',
      url: window.location.origin || 'https://alifsakib.me',
    };

    trackEvent('engagement_share', 'Engagement', 'Shared Portfolio');

    setShares((prev) => prev + 1);
    incrementRemoteCount('shares');

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled share dialog
      }
    } else {
      // Fallback to Clipboard Copy
      try {
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        // ignore
      }
    }
  };

  // Handle SupportKori Widget Trigger
  const handleOpenSupport = () => {
    trackEvent('engagement_support_coffee', 'Engagement', 'Clicked Support Coffee');
    // Trigger SupportKori widget button if present in DOM
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
              <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{views.toLocaleString()}</span>
              <span className="text-[10px] font-semibold uppercase text-slate-500 dark:text-slate-400">Views</span>
            </div>

            {/* 2. Interactive Love / Like Button with Spring Physics */}
            <motion.button
              onClick={handleLike}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-colors shadow-xs cursor-pointer select-none ${
                hasLiked
                  ? 'bg-rose-500 text-white shadow-rose-500/25 border border-rose-600'
                  : 'bg-white dark:bg-slate-800 text-rose-600 dark:text-rose-400 border border-rose-200/80 dark:border-rose-900/60 hover:bg-rose-50 dark:hover:bg-rose-950/40'
              }`}
              title="Click to love this portfolio!"
            >
              <motion.div
                animate={hasLiked ? { scale: [1, 1.4, 1] } : {}}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <Heart className={`w-4 h-4 ${hasLiked ? 'fill-white' : 'fill-rose-500/20'}`} />
              </motion.div>
              <span>{likes.toLocaleString()}</span>
              <span className="text-[10px] font-semibold uppercase opacity-90">Loves</span>
            </motion.button>

            {/* 3. Share Portfolio Button with Animated Copy Toast */}
            <motion.button
              onClick={handleShare}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer select-none"
              title="Share portfolio or copy link"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Share2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              )}
              <span>{shares}</span>
              <span className="text-[10px] font-semibold uppercase text-slate-500 dark:text-slate-400">
                {copied ? 'Copied!' : 'Shares'}
              </span>
            </motion.button>

            {/* 4. Support / Coffee Button */}
            <motion.button
              onClick={handleOpenSupport}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-black shadow-xs transition-colors cursor-pointer select-none"
              title="Buy Alif a coffee on SupportKori"
            >
              <Coffee className="w-4 h-4 text-slate-950 fill-amber-950/20" />
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
              y: heart.y - 70 - Math.random() * 40,
              x: heart.x + (Math.random() * 40 - 20),
              scale: 1.3,
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
