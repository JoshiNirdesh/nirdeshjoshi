import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { motion } from "framer-motion";
const data = [
  { name: "00:00", throughput: 400, latency: 24 },
  { name: "04:00", throughput: 300, latency: 28 },
  { name: "08:00", throughput: 900, latency: 45 },
  { name: "12:00", throughput: 1200, latency: 32 },
  { name: "16:00", throughput: 1100, latency: 35 },
  { name: "20:00", throughput: 800, latency: 25 },
  { name: "23:59", throughput: 500, latency: 22 },
];

export default function DataInsights() {
  return (
    <section id="insights" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.h2
        className="text-5xl md:text-6xl font-black italic mb-16 uppercase tracking-tighter text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Pipeline_Metrics
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Throughput Chart */}
        <motion.div
          className="bento-card p-8 rounded-3xl h-[400px] flex flex-col"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-bold">Data Throughput</h3>
              <p className="text-xs mono text-slate-500 uppercase tracking-widest">
                Events per second (24h)
              </p>
            </div>
            <div className="text-emerald-500 mono text-xs font-bold animate-pulse">
              LIVE
            </div>
          </div>

          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient
                    id="colorThroughput"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#1e293b"
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  stroke="#475569"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#475569"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #10b981",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontFamily: "JetBrains Mono",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="throughput"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#colorThroughput)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Latency Chart */}
        <motion.div
          className="bento-card p-8 rounded-3xl h-[400px] flex flex-col"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-bold">Processing Latency</h3>
              <p className="text-xs mono text-slate-500 uppercase tracking-widest">
                Milliseconds / Batch
              </p>
            </div>
            <div className="text-blue-500 mono text-xs font-bold">STABLE</div>
          </div>

          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#1e293b"
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  stroke="#475569"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#475569"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #3b82f6",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontFamily: "JetBrains Mono",
                  }}
                />
                <Line
                  type="stepAfter"
                  dataKey="latency"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
