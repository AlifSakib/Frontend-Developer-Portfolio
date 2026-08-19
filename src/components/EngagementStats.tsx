import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Heart, Share2, Check } from 'lucide-react';
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
      initial={{ y: -5, opacity: 0 }}
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
        particleCount: 22,
        spread: 50,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
        colors: ['#ec4899', '#f43f5e', '#fb7185', '#fda4af'],
        ticks: 90,
        gravity: 1.2,
        scalar: 0.75,
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

  return (
    <>
      {/* Sleek, Compact Framer-Motion Inspired Micro Engagement Pill Bar */}
      <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-xl bg-slate-800/80 border border-slate-700/70 backdrop-blur-md shadow-xs select-none">
        {/* 1. Views Pill */}
        <div
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/60 text-slate-300 text-xs font-medium border border-slate-700/50"
          title="Total real-time visitor views"
        >
          <Eye className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <NumberTicker value={views} />
          <span className="text-[10px] text-slate-400 uppercase hidden sm:inline">Views</span>
        </div>

        {/* 2. Interactive Love Pill */}
        <motion.button
          onClick={handleLike}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            hasLiked
              ? 'bg-rose-500 text-white shadow-rose-500/20'
              : 'bg-slate-900/60 text-rose-400 border border-rose-900/40 hover:bg-rose-950/40'
          }`}
          title="Click to love this portfolio!"
        >
          <motion.div
            animate={hasLiked ? { scale: [1, 1.4, 1] } : {}}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-white' : 'fill-rose-500/20'}`} />
          </motion.div>
          <NumberTicker value={likes} />
          <span className="text-[10px] uppercase opacity-90 hidden sm:inline">Loves</span>
        </motion.button>

        {/* 3. Share Pill */}
        <motion.button
          onClick={handleShare}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/60 text-slate-300 hover:text-emerald-400 border border-slate-700/50 text-xs font-medium transition-all cursor-pointer"
          title="Share portfolio or copy link"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          ) : (
            <Share2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          )}
          <NumberTicker value={shares} />
          <span className="text-[10px] text-slate-400 uppercase hidden sm:inline">
            {copied ? 'Copied!' : 'Shares'}
          </span>
        </motion.button>
      </div>

      {/* Floating Animated Hearts */}
      <AnimatePresence>
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, y: heart.y, x: heart.x, scale: 0.6 }}
            animate={{
              opacity: 0,
              y: heart.y - 70 - Math.random() * 30,
              x: heart.x + (Math.random() * 40 - 20),
              scale: 1.3,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="fixed pointer-events-none z-50 text-rose-500"
            onAnimationComplete={() => {
              setFloatingHearts((prev) => prev.filter((h) => h.id !== heart.id));
            }}
          >
            <Heart className="w-4 h-4 fill-rose-500 drop-shadow-md" />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};
