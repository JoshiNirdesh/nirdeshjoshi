import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Mail,
  UploadCloud,
  Database,
  RefreshCw,
  BarChart3,
  Cpu,
  Workflow,
  Layers,
  Terminal as TerminalIcon,
  Zap,
} from "lucide-react";
import BackgroundCanvas from "./components/BackgroundCanvas";
import Terminal from "./components/Terminal";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-x-hidden">
      <BackgroundCanvas />

      {/* Navigation */}
      <nav className="fixed w-full z-50 px-6 py-4 glass-nav backdrop-blur-md bg-black/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2" id="/">
            <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]"></div>
            <span className="mono font-bold text-xs uppercase tracking-tighter">
              <a href="/">nirdesh.env</a>
            </span>
          </div>

          <div className="hidden md:flex gap-10 items-center text-[10px] mono font-bold uppercase tracking-widest text-slate-400">
            <a href="#about" className="hover:text-emerald-400 transition">
              About
            </a>
            <a href="#etl" className="hover:text-emerald-400 transition">
              ETL_Flow
            </a>
            <a href="#skills" className="hover:text-emerald-400 transition">
              Stack
            </a>
            <a href="#projects" className="hover:text-emerald-400 transition">
              Projects
            </a>
            <a
              href="https://github.com/JoshiNirdesh"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-emerald-500 transition"
            >
              <FaGithub className="w-5 h-5" />{" "}
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center px-6 pt-20 max-w-7xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-emerald-500 mono text-[11px] font-bold mb-6 tracking-[0.4em] uppercase italic">
              Aspiring Data Engineer
            </p>

            <h1 className="text-6xl md:text-[90px] font-black tracking-tighter mb-8 leading-none">
              <span className="bg-gradient-to-r from-white via-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                Nirdesh
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent">
                Joshi
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-10 max-w-sm leading-relaxed font-light">
              Building the{" "}
              <span className="text-white font-bold italic">
                data foundations
              </span>{" "}
              of Nepal. I specialize in scalable pipelines, analytics workflows,
              and Medallion architecture projects.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-bold transition"
              >
                Access Pipelines
              </a>
              <a
                href="mailto:joshinirdesh10@gmail.com"
                className="px-8 py-3 border border-white/10 hover:bg-white/5 rounded-lg font-bold transition flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Contact
              </a>
            </div>
          </motion.div>

          {/* Terminal */}
          <motion.div
            className="lg:col-span-7 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Terminal />
          </motion.div>
        </div>
      </section>

      {/* ETL FLOW SECTION */}
      <section id="etl" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div className="text-center mb-24" {...fadeIn}>
          <h2 className="text-2xl font-black italic mb-4 uppercase tracking-[0.4em] text-emerald-500">
            Pipeline_Architecture
          </h2>
          <p className="text-slate-500 text-sm">
            How I move data through the Medallion lifecycle.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          <svg
            className="absolute top-1/2 left-0 w-full h-20 hidden md:block pointer-events-none transform -translate-y-1/2"
            viewBox="0 0 1200 200"
          >
            <path
              d="M 250 100 L 1050 100"
              stroke="rgba(16,185,129,0.3)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 8"
            />
          </svg>

          <motion.div
            className="bento-card p-10 rounded-[40px] text-center z-10 bg-white/5 border border-white/10"
            {...fadeIn}
          >
            <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <UploadCloud />
            </div>
            <h4 className="font-bold mb-2">Sources</h4>
            <p className="text-[10px] mono text-slate-500 uppercase font-bold">
              Ingestion
            </p>
          </motion.div>

          <motion.div
            className="bento-card p-10 rounded-[40px] text-center z-10 bg-white/5 border border-white/10"
            {...fadeIn}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="w-12 h-12 bg-orange-500/10 text-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Database />
            </div>
            <h4 className="font-bold mb-2">Bronze</h4>
            <p className="text-[10px] mono text-orange-400 uppercase font-bold">
              Raw Storage
            </p>
          </motion.div>

          <motion.div
            className="bento-card p-10 rounded-[40px] text-center z-10 bg-white/5 border border-emerald-500/30"
            {...fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
              <RefreshCw className="animate-spin" />
            </div>
            <h4 className="font-bold mb-2">Silver</h4>
            <p className="text-[10px] mono text-emerald-400 uppercase font-bold">
              Cleaned / Spark
            </p>
          </motion.div>

          <motion.div
            className="bento-card p-10 rounded-[40px] text-center z-10 bg-white/5 border border-white/10"
            {...fadeIn}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-12 h-12 bg-yellow-500/10 text-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BarChart3 />
            </div>
            <h4 className="font-bold mb-2">Gold</h4>
            <p className="text-[10px] mono text-yellow-500 uppercase font-bold">
              Business Ready
            </p>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="py-24 px-6 max-w-7xl mx-auto relative z-10"
      >
        <motion.h2
          className="text-2xl font-black italic mb-12 uppercase tracking-widest text-emerald-500"
          {...fadeIn}
        >
          Core_Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <motion.div
            className="md:col-span-2 bento-card p-10 rounded-3xl bg-white/5 border border-white/10"
            {...fadeIn}
          >
            <Cpu className="text-emerald-500 mb-6" />
            <p className="text-[10px] mono text-slate-500 mb-4 uppercase font-bold tracking-widest leading-none">
              Programming & Engine
            </p>
            <div className="text-2xl font-extrabold flex flex-wrap gap-x-8 gap-y-2">
              <span>Python</span>
              <span>SQL</span>
              <span>Apache Spark</span>
              <span>Pandas</span>
            </div>
          </motion.div>

          <motion.div
            className="bento-card p-10 rounded-3xl bg-white/5 border border-white/10"
            {...fadeIn}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Database className="text-emerald-500 mb-6" />
            <p className="text-[10px] mono text-slate-500 mb-4 uppercase font-bold tracking-widest">
              Storage
            </p>
            <div className="font-bold space-y-1 text-sm">
              <p>Delta Lake</p>
              <p>PostgreSQL</p>
              <p>Parquet / Avro</p>
            </div>
          </motion.div>

          <motion.div
            className="bento-card p-10 rounded-3xl bg-white/5 border border-white/10"
            {...fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Workflow className="text-emerald-500 mb-6" />
            <p className="text-[10px] mono text-slate-500 mb-4 uppercase font-bold tracking-widest">
              Infrastructure
            </p>
            <div className="font-bold space-y-1 text-sm">
              <p>Airflow</p>
              <p>Docker</p>
              <p>Git / CI-CD</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="py-24 px-6 max-w-7xl mx-auto relative z-10"
      >
        <motion.h2
          className="text-2xl font-black italic mb-16 uppercase tracking-widest text-emerald-500"
          {...fadeIn}
        >
          Selected_Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bento-card p-10 rounded-[40px] flex flex-col group border border-emerald-500/10 hover:border-emerald-500/50 bg-white/5"
            {...fadeIn}
          >
            <div className="flex justify-between mb-12">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
                <Layers />
              </div>
              <a
                href="https://github.com/nirdeshjoshi"
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-white transition"
              >
                <FaGithub className="w-5 h-5" />{" "}
              </a>
            </div>
            <h3 className="text-2xl font-bold mb-4">Retail Lakehouse</h3>
            <p className="text-slate-400 text-sm mb-12 flex-1 font-light leading-relaxed italic">
              End-to-end Medallion architecture using PySpark to transform messy
              raw data into analytics-ready layers.
            </p>
            <div className="mono text-[9px] text-emerald-500 font-black uppercase tracking-widest border-t border-white/5 pt-6">
              Spark // Delta
            </div>
          </motion.div>

          <motion.div
            className="bento-card p-10 rounded-[40px] flex flex-col group border border-blue-500/10 hover:border-blue-500/50 bg-white/5"
            {...fadeIn}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="flex justify-between mb-12">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                <TerminalIcon />
              </div>
              <a
                href="https://github.com/nirdeshjoshi"
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-white transition"
              >
                <FaGithub className="w-5 h-5" />{" "}
              </a>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-50">
              Batch ETL Engine
            </h3>
            <p className="text-slate-400 text-sm mb-12 flex-1 font-light leading-relaxed italic">
              Automated cleaning, validation, and partitioning of batch data
              into optimized storage layers.
            </p>
            <div className="mono text-[9px] text-blue-500 font-black uppercase tracking-widest border-t border-white/5 pt-6">
              Python // SQL
            </div>
          </motion.div>

          <motion.div
            className="bento-card p-10 rounded-[40px] flex flex-col group border border-fuchsia-500/10 hover:border-fuchsia-500/50 bg-white/5"
            {...fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex justify-between mb-12">
              <div className="p-4 bg-fuchsia-500/10 rounded-2xl text-fuchsia-500">
                <Zap />
              </div>
              <a
                href="https://github.com/nirdeshjoshi"
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-white transition"
              >
                <FaGithub className="w-5 h-5" />{" "}
              </a>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-fuchsia-50">
              Streaming Ingestor
            </h3>
            <p className="text-slate-400 text-sm mb-12 flex-1 font-light leading-relaxed italic">
              Proof of concept for streaming ingestion and event aggregation
              with Spark Streaming and Kafka.
            </p>
            <div className="mono text-[9px] text-fuchsia-500 font-black uppercase tracking-widest border-t border-white/5 pt-6">
              Spark_Stream // Kafka
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="py-32 px-6 border-t border-white/5 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-black italic mb-10 uppercase tracking-tighter"
            {...fadeIn}
          >
            Ready_to_scale?
          </motion.h2>

          <motion.div
            className="flex flex-col md:flex-row justify-center gap-12 mb-20 font-bold mono text-sm text-emerald-500"
            {...fadeIn}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <a
              href="mailto:joshinirdesh10@gmail.com"
              className="hover:text-white transition flex items-center gap-2 justify-center border border-emerald-500/30 px-6 py-2 rounded-full"
            >
              <Mail className="w-4 h-4" /> EMAIL
            </a>

            <a
              href="https://www.linkedin.com/in/nirdesh-joshi/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition flex items-center gap-2 justify-center border border-emerald-500/30 px-6 py-2 rounded-full"
            >
              <FaLinkedin className="w-4 h-4" />
              LINKEDIN
            </a>
          </motion.div>

          <p className="mono text-[10px] text-slate-600 uppercase tracking-[1em]">
            Nirdesh Joshi // Kathmandu // 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
