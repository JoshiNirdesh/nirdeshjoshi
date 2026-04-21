import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import {
  // Github,
  Mail,
  // Linkedin,
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
import DataInsights from "./components/DataInsights";
import Experience from "./components/Experience";
import LiveLogFeed from "./components/LiveLogFeed";
import BootSequence from "./components/BootSequence";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <BootSequence onComplete={() => setShowIntro(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="scanline z-50"></div>
            <BackgroundCanvas />

            {/* Navigation */}
            <nav className="fixed w-full z-50 px-6 py-4 glass-nav">
              <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]"></div>
                  <span className="mono font-bold text-xs uppercase tracking-tighter">
                    nirdesh.env
                  </span>
                </div>
                <div className="hidden md:flex gap-10 items-center text-[10px] mono font-bold uppercase tracking-widest text-slate-400">
                  <a
                    href="#about"
                    className="hover:text-emerald-400 transition"
                  >
                    About
                  </a>
                  <a href="#etl" className="hover:text-emerald-400 transition">
                    ETL_Flow
                  </a>
                  <a
                    href="#insights"
                    className="hover:text-emerald-400 transition"
                  >
                    Insights
                  </a>
                  <a
                    href="#skills"
                    className="hover:text-emerald-400 transition"
                  >
                    Stack
                  </a>
                  <a
                    href="#experience"
                    className="hover:text-emerald-400 transition"
                  >
                    History
                  </a>
                  <a
                    href="#projects"
                    className="hover:text-emerald-400 transition"
                  >
                    Projects
                  </a>
                  <a
                    href="https://github.com/JoshiNirdesh"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-emerald-500 transition"
                  >
<FaGithub size={24} />
                  </a>
                </div>
              </div>
            </nav>

            {/* HERO SECTION */}
            <section
              id="about"
              className="min-h-screen flex flex-col justify-center px-6 pt-20 max-w-7xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <motion.div
                  className="lg:col-span-5"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-emerald-500 mono text-[11px] font-bold mb-6 tracking-[0.4em] uppercase italic flex items-center gap-4">
                    <span className="w-8 h-px bg-emerald-500/30"></span>
                    ENGINEER_GRADE_L3
                  </p>
                  <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[120px] font-black tracking-tighter mb-8 leading-[0.85] gradient-text uppercase">
                    Nirdesh
                    <br />
                    Joshi
                  </h1>
                  <p className="text-xl text-slate-400 mb-10 max-w-sm leading-relaxed font-light border-l-2 border-emerald-500/20 pl-6 italic">
                    Nirdesh Joshi. Kathmandu. Specializing in high-velocity{" "}
                    <span className="text-white font-bold">
                      distributed systems
                    </span>{" "}
                    and Medallion architectures.
                  </p>
                  <div className="flex gap-4">
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

                  {/* SYSTEM STATUS TICKER */}
                  <div className="mt-16 border-t border-white/5 pt-8 overflow-hidden">
                    <div className="flex gap-12 animate-marquee whitespace-nowrap">
                      <div className="flex items-center gap-2 text-[10px] mono text-slate-500 uppercase font-bold">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                        Cluster: KTM-PROD-01 (ACTIVE)
                      </div>
                      <div className="flex items-center gap-2 text-[10px] mono text-slate-500 uppercase font-bold">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        Uptime: 1,240h 12m
                      </div>
                      <div className="flex items-center gap-2 text-[10px] mono text-slate-500 uppercase font-bold">
                        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                        Throughput: 1.2M req/s
                      </div>
                      <div className="flex items-center gap-2 text-[10px] mono text-slate-500 uppercase font-bold">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                        Nodes: 08 Online
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* HOLOGRAPHIC TERMINAL */}
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
            <section id="etl" className="py-32 px-6 max-w-7xl mx-auto relative">
              <div className="absolute top-0 right-0 mono text-[8px] text-slate-700 uppercase tracking-[0.8em] vertical-text rotate-180 opacity-50 h-full flex items-center">
                Medallion_Process_v2.4 // 2025 // STATUS_OK
              </div>
              <motion.div className="text-center mb-20" {...fadeIn}>
                <div className="mono text-[10px] text-emerald-500/40 font-bold mb-4 uppercase tracking-[0.5em]">
                  [ SCHEMA_VALIDATION_ACTIVE ]
                </div>
                <h2 className="text-6xl font-black italic mb-4 uppercase tracking-tighter leading-none hover:tracking-normal transition-all duration-700 cursor-default">
                  Pipeline_Flow
                </h2>
                <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
              </motion.div>

              <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Connector SVG */}
                <svg
                  className="absolute top-1/2 left-0 w-full h-20 hidden md:block pointer-events-none transform -translate-y-1/2"
                  viewBox="0 0 1200 200"
                >
                  <path className="flow-path" d="M 250 100 L 1050 100" />
                  <circle r="4" className="data-pulse p-1" />
                  <circle r="4" className="data-pulse p-2" />
                  <circle r="4" className="data-pulse p-3" />
                </svg>

                {/* Stage 1 */}
                <motion.div
                  className="bento-card p-10 rounded-[40px] text-center z-10 group relative overflow-hidden"
                  {...fadeIn}
                >
                  <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <UploadCloud />
                  </div>
                  <h4 className="font-bold mb-2">Sources</h4>
                  <p className="text-[10px] mono text-slate-500 uppercase font-bold">
                    Ingestion
                  </p>
                  <div className="mt-4 text-[9px] mono text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    API / Webhooks / DB CDC
                  </div>
                </motion.div>
                {/* Stage 2 */}
                <motion.div
                  className="bento-card p-10 rounded-[40px] text-center z-10 group relative overflow-hidden"
                  {...fadeIn}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-12 h-12 bg-orange-500/10 text-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Database />
                  </div>
                  <h4 className="font-bold mb-2">Bronze</h4>
                  <p className="text-[10px] mono text-orange-400 uppercase font-bold">
                    Raw Storage
                  </p>
                  <div className="mt-4 text-[9px] mono text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Parquet / Avro / S3
                  </div>
                </motion.div>
                {/* Stage 3 */}
                <motion.div
                  className="bento-card p-10 rounded-[40px] text-center z-10 border-emerald-500/30 group relative overflow-hidden"
                  {...fadeIn}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                    <RefreshCw className="animate-spin-slow" />
                  </div>
                  <h4 className="font-bold mb-2">Silver</h4>
                  <p className="text-[10px] mono text-emerald-400 uppercase font-bold">
                    Cleaned / Spark
                  </p>
                  <div className="mt-4 text-[9px] mono text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Deduplication / Schema Enforcement
                  </div>
                </motion.div>
                {/* Stage 4 */}
                <motion.div
                  className="bento-card p-10 rounded-[40px] text-center z-10 group relative overflow-hidden"
                  {...fadeIn}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-12 h-12 bg-yellow-500/10 text-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <BarChart3 />
                  </div>
                  <h4 className="font-bold mb-2">Gold</h4>
                  <p className="text-[10px] mono text-yellow-500 uppercase font-bold">
                    Business Ready
                  </p>
                  <div className="mt-4 text-[9px] mono text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Aggregations / BI Views
                  </div>
                </motion.div>
              </div>
            </section>

            {/* DATA INSIGHTS SECTION */}
            <DataInsights />

            {/* SKILLS SECTION */}
            <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-end gap-8 mb-20">
                <motion.h2
                  className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none"
                  {...fadeIn}
                >
                  The_Stack
                </motion.h2>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent mb-4"></div>
                <div className="mono text-[10px] text-slate-600 uppercase mb-2">
                  Capabilities_Inventory
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <motion.div
                  className="md:col-span-2 lg:col-span-3 bento-card p-12 rounded-[48px] group"
                  {...fadeIn}
                >
                  <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
                    <Cpu className="w-48 h-48" />
                  </div>
                  <Cpu className="text-emerald-500 mb-10 w-12 h-12" />
                  <p className="text-[12px] mono text-emerald-500/60 mb-8 uppercase font-bold tracking-[0.4em] leading-none">
                    Logic & Execution
                  </p>
                  <div className="text-4xl font-black flex flex-wrap gap-x-12 gap-y-6 text-white/90">
                    <span className="hover:text-emerald-400 transition-all duration-300 cursor-default hover:scale-110">
                      Python
                    </span>
                    <span className="hover:text-emerald-400 transition-all duration-300 cursor-default hover:scale-110">
                      SQL
                    </span>
                    <span className="hover:text-emerald-400 transition-all duration-300 cursor-default hover:scale-110">
                      Spark
                    </span>
                    <span className="hover:text-emerald-400 transition-all duration-300 cursor-default hover:scale-110">
                      Databricks
                    </span>
                    <span className="hover:text-emerald-400 transition-all duration-300 cursor-default hover:scale-110">
                      Pandas
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="lg:col-span-3 bento-card p-12 rounded-[48px] group bg-indigo-500/5"
                  {...fadeIn}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <div className="absolute bottom-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 translate-y-12">
                    <Database className="w-48 h-48" />
                  </div>
                  <Database className="text-indigo-400 mb-10 w-12 h-12" />
                  <p className="text-[12px] mono text-indigo-400/60 mb-8 uppercase font-bold tracking-[0.4em] leading-none">
                    Lakehouse_Storage
                  </p>
                  <div className="grid grid-cols-2 gap-x-12 gap-y-4 font-black text-2xl text-white/80">
                    <div className="flex items-center gap-4">
                      <span className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>{" "}
                      Databricks
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>{" "}
                      Delta Lake
                    </div>
                    <div className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity">
                      PostgreSQL
                    </div>
                    <div className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity">
                      Cloud_Parquet
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="md:col-span-4 lg:col-span-6 bento-card p-12 rounded-[48px] flex flex-col md:flex-row items-center justify-between border-dashed border-emerald-500/20"
                  {...fadeIn}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex items-center gap-12 w-full">
                    <Workflow className="text-emerald-500 w-12 h-12 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-[12px] mono text-emerald-500/60 mb-4 uppercase font-bold tracking-[0.4em]">
                        Infrastructure_Automation
                      </p>
                      <div className="flex flex-wrap gap-12 text-3xl font-black text-white/90">
                        <span className="flex items-center gap-4 hover:italic">
                          Airflow <Workflow className="w-6 h-6 opacity-20" />
                        </span>
                        <span className="flex items-center gap-4 hover:italic">
                          Docker{" "}
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        </span>
                        <span className="flex items-center gap-4 hover:italic">
                          GitOps
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <Experience />

            {/* PROJECTS SECTION */}
            <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
              <div className="flex items-center gap-8 mb-20">
                <div className="w-12 h-px bg-emerald-500/30"></div>
                <motion.h2
                  className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter"
                  {...fadeIn}
                >
                  Selected_Work
                </motion.h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Project 1 */}
                <motion.div
                  className="bento-card p-10 rounded-[40px] flex flex-col group border-emerald-500/0 hover:border-emerald-500/50 relative overflow-hidden"
                  {...fadeIn}
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                    <Layers className="w-24 h-24 rotate-12" />
                  </div>
                  <div className="flex justify-between mb-12">
                    <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500 group-hover:scale-110 transition-transform">
                      <Layers />
                    </div>
                    <a
                      href="https://github.com/JoshiNirdesh"
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-700 hover:text-white transition z-10"
                    >
<FaGithub size={24} />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Retail Lakehouse</h3>
                  <p className="text-slate-400 text-sm mb-12 flex-1 font-light leading-relaxed italic">
                    End-to-end Medallion architecture using PySpark to transform
                    1M+ daily transactions.
                  </p>
                  <div className="flex justify-between items-center border-t border-white/5 pt-6">
                    <div className="mono text-[9px] text-emerald-500 font-black uppercase tracking-widest">
                      Spark // Delta
                    </div>
                    <div className="text-[8px] mono text-slate-600 uppercase font-bold group-hover:text-emerald-400 transition-colors">
                      view_source.sh
                    </div>
                  </div>
                </motion.div>
                {/* Project 2 */}
                <motion.div
                  className="bento-card p-10 rounded-[40px] flex flex-col group border-blue-500/0 hover:border-blue-500/50 relative overflow-hidden"
                  {...fadeIn}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                    <TerminalIcon className="w-24 h-24 -rotate-12" />
                  </div>
                  <div className="flex justify-between mb-12">
                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 group-hover:scale-110 transition-transform">
                      <TerminalIcon />
                    </div>
                    <a
                      href="https://github.com/JoshiNirdesh"
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-700 hover:text-white transition z-10"
                    >
<FaGithub size={24} />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-50">
                    Batch ETL Engine
                  </h3>
                  <p className="text-slate-400 text-sm mb-12 flex-1 font-light leading-relaxed italic">
                    Automated cleaning and partitioning of high-volume logs into
                    optimized storage.
                  </p>
                  <div className="flex justify-between items-center border-t border-white/5 pt-6">
                    <div className="mono text-[9px] text-blue-500 font-black uppercase tracking-widest">
                      Python // SQL
                    </div>
                    <div className="text-[8px] mono text-slate-600 uppercase font-bold group-hover:text-blue-400 transition-colors">
                      inspect_logs.log
                    </div>
                  </div>
                </motion.div>
                {/* Project 3 */}
                <motion.div
                  className="bento-card p-10 rounded-[40px] flex flex-col group border-fuchsia-500/0 hover:border-fuchsia-500/50 relative overflow-hidden"
                  {...fadeIn}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                    <Zap className="w-24 h-24 rotate-45" />
                  </div>
                  <div className="flex justify-between mb-12">
                    <div className="p-4 bg-fuchsia-500/10 rounded-2xl text-fuchsia-500 group-hover:scale-110 transition-transform">
                      <Zap />
                    </div>
                    <a
                      href="https://github.com/JoshiNirdesh"
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-700 hover:text-white transition z-10"
                    >
<FaGithub size={24} />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-50">
                    Streaming Ingestor
                  </h3>
                  <p className="text-slate-400 text-sm mb-12 flex-1 font-light leading-relaxed italic">
                    POC implementing Spark Streaming to handle high-velocity
                    event window aggregations.
                  </p>
                  <div className="flex justify-between items-center border-t border-white/5 pt-6">
                    <div className="mono text-[9px] text-fuchsia-500 font-black uppercase tracking-widest">
                      Spark_Stream // Kafka
                    </div>
                    <div className="text-[8px] mono text-slate-600 uppercase font-bold group-hover:text-fuchsia-400 transition-colors">
                      stream_init.py
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* FOOTER / CONNECT */}
            {/* FOOTER */}
            <footer
              id="contact"
              className="py-40 px-6 border-t border-white/5 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-emerald-500/[0.02] -z-10"></div>
              <div className="max-w-4xl mx-auto text-center relative">
                <div className="mono text-[10px] text-emerald-500/40 mb-8 uppercase tracking-[1em]">
                  EndOf_Line // Connection_Ready
                </div>
                <motion.h2
                  className="text-6xl md:text-8xl lg:text-[160px] font-black italic mb-16 uppercase tracking-tighter leading-none opacity-20 hover:opacity-100 transition-opacity duration-1000 cursor-default"
                  {...fadeIn}
                >
                  Nirdesh Joshi
                </motion.h2>

                <motion.div
                  className="flex flex-col md:flex-row justify-center gap-12 mb-24"
                  {...fadeIn}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <a
                    href="mailto:joshinirdesh10@gmail.com"
                    className="group p-8 bento-card rounded-[32px] flex-1 hover:border-emerald-500/50 transition-all"
                  >
                    <Mail className="w-8 h-8 text-emerald-500 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                    <div className="mono text-[10px] text-emerald-500 mb-2 uppercase tracking-widest font-bold">
                      SMTP_ROOT
                    </div>
                    <div className="text-xl font-bold">joshinirdesh10@gmail.com</div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nirdesh-joshi/"
                    target="_blank"
                    rel="noreferrer"
                    className="group p-8 bento-card rounded-[32px] flex-1 hover:border-blue-500/50 transition-all"
                  >
<FaLinkedin className="w-8 h-8 text-blue-500 mb-4 mx-auto group-hover:scale-110 transition-transform" />                    <div className="mono text-[10px] text-blue-500 mb-2 uppercase tracking-widest font-bold">
                      HANDSHAKE_AUTH
                    </div>
                    <div className="text-xl font-bold text-white/80">
                      LINKEDIN_PROFILE
                    </div>
                  </a>
                </motion.div>

                <div className="flex flex-col items-center gap-8">
                  <div className="w-px h-24 bg-gradient-to-b from-emerald-500/50 to-transparent"></div>
                  <p className="mono text-[10px] text-slate-800 uppercase tracking-[1.5em] font-bold">
                    Nirdesh Joshi // Kathmandu // System Revision 2025.04.21
                  </p>
                </div>
              </div>
            </footer>

            <LiveLogFeed />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
