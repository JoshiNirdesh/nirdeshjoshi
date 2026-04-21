import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from 'lucide-react';

const LOG_MESSAGES = [
  "GET /api/v1/metrics 200 OK",
  "Spark Job ID: 8429 completed",
  "Delta Lake: Vacuuming old versions...",
  "Airflow: Task 'transform_silver' success",
  "Kafka: Partition 4 rebalanced",
  "PostgreSQL: VACUUM ANALYZE completed",
  "S3: Uploading batch_20240409.parquet",
  "Memory usage: 74% - Optimal",
  "New node joined cluster: KTM-PROD-09",
  "ETL Pipeline: Bronze to Silver - 100% success"
];

export default function LiveLogFeed() {
const [logs, setLogs] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      const randomLog = LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)];
      setLogs(prev => [randomLog, ...prev.slice(0, 4)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden xl:block w-72">
      <div className="terminal-glass rounded-2xl p-4 overflow-hidden border-emerald-500/10">
        <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
          <Terminal className="w-3 h-3 text-emerald-500" />
          <span className="text-[9px] mono text-emerald-500/60 uppercase font-bold tracking-widest">Live_Logs</span>
        </div>
        <div className="space-y-2 h-32 overflow-hidden">
          <AnimatePresence initial={false}>
            {logs.map((log, i) => (
              <motion.div
                key={log + i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-[10px] mono text-slate-400 truncate"
              >
                <span className="text-emerald-500/40 mr-2">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                {log}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
