import React from 'react';
import { motion } from 'framer-motion';

const glowDots = [
  { className: 'top-[12%] left-[8%] h-48 w-48 bg-sky-400/20 dark:bg-sky-400/18', duration: 12 },
  { className: 'top-[18%] right-[12%] h-64 w-64 bg-teal-400/18 dark:bg-teal-400/16', duration: 16 },
  { className: 'bottom-[14%] left-[18%] h-56 w-56 bg-amber-400/16 dark:bg-amber-300/12', duration: 18 },
  { className: 'bottom-[8%] right-[16%] h-44 w-44 bg-cyan-400/18 dark:bg-cyan-400/14', duration: 14 },
];

const SceneBackground: React.FC = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_55%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_55%)]" />

      {glowDots.map((glow) => (
        <motion.div
          key={glow.className}
          animate={{
            x: [0, 18, -12, 0],
            y: [0, -24, 12, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: glow.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`absolute rounded-full blur-3xl ${glow.className}`}
        />
      ))}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="spotlight-ring left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
        className="spotlight-ring left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 border-teal-400/15"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="spotlight-ring left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 border-amber-400/15"
      />

      <div className="absolute bottom-[-16rem] left-1/2 h-[30rem] w-[85rem] -translate-x-1/2 rounded-full border border-slate-300/20 bg-white/5 blur-3xl dark:border-slate-600/15 dark:bg-sky-300/5" />
    </div>
  );
};

export default SceneBackground;
