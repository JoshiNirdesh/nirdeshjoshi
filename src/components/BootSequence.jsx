import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LOGS = [
  "INITIALIZING SYSTEM BOOT...",
  "LOADING KERNEL MODULES...",
  "MOUNTING DATA LAKES [SUCCESS]",
  "ESTABLISHING SPARK SESSION...",
  "CONNECTING TO KAFKA CLUSTER [KTM-PROD-01]",
  "VALIDATING MEDALLION ARCHITECTURE...",
  "BRONZE LAYER: ONLINE",
  "SILVER LAYER: ONLINE",
  "GOLD LAYER: ONLINE",
  "DECRYPTING PORTFOLIO DATA...",
  "ACCESS GRANTED: NIRDESH JOSHI",
  "STARTING INTERFACE..."
];

export default function BootSequence({ onComplete }) {
  const [currentLogs, setCurrentLogs] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < BOOT_LOGS.length) {
      const timeout = setTimeout(() => {
        setCurrentLogs((prev) => [...prev, BOOT_LOGS[index]]);
        setIndex((prev) => prev + 1);
      }, Math.random() * 200 + 100);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        onComplete();
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [index, onComplete]);

  return (
    <div className="fixed inset-0 bg-[#020205] z-[100] flex items-center justify-center p-6 font-mono">
      <div className="max-w-2xl w-full">
        <div className="space-y-2">
          <AnimatePresence>
            {currentLogs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-emerald-500 text-sm md:text-base flex gap-4"
              >
                <span className="opacity-30">
                  [{new Date().toLocaleTimeString([], { hour12: false })}]
                </span>
                <span
                  className={
                    i === currentLogs.length - 1
                      ? "border-r-2 border-emerald-500 animate-pulse pr-1"
                      : ""
                  }
                >
                  {log}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {index === BOOT_LOGS.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 h-1 w-full bg-emerald-500/10 rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1 }}
              className="h-full bg-emerald-500 shadow-[0_0_15px_#10b981]"
            />
          </motion.div>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-[101]" />
    </div>
  );
}