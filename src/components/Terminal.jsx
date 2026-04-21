import React, { useState, useRef, useEffect } from 'react';

const INITIAL_HISTORY = ['System access granted.', 'Welcome, guest. Type "help" to start.'];

const COMMANDS = {
  help: 'Available: <span class="text-emerald-400 font-bold">about</span>, <span class="text-emerald-400 font-bold">skills</span>, <span class="text-emerald-400 font-bold">projects</span>, <span class="text-emerald-400 font-bold">contact</span>, <span class="text-emerald-400 font-bold">run pipeline</span>, <span class="text-emerald-400 font-bold">ls</span>, <span class="text-emerald-400 font-bold">stack</span>, <span class="text-emerald-400 font-bold">clear</span>',
  about: '<b>Nirdesh Joshi</b>: Aspiring Data Engineer based in Nepal. Expert in building data foundations and scaling distributed pipelines.',
  skills: '<b>Languages:</b> Python, SQL<br/><b>Engines:</b> Apache Spark, Pandas<br/><b>Storage:</b> Delta Lake, PostgreSQL, Parquet<br/><b>Infra:</b> Airflow, Docker, Git',
  projects: '<b>1. Retail Lakehouse:</b> PySpark + Delta Lake<br/><b>2. Batch ETL Engine:</b> Python + SQL<br/><b>3. Streaming Ingestor:</b> Spark Streaming + Kafka',
  contact: '<b>Email:</b> nirdesh@example.com<br/><b>LinkedIn:</b> linkedin.com/in/nirdeshjoshi<br/><b>GitHub:</b> github.com/nirdeshjoshi',
  whoami: 'user@ktm-prod:~$ Nirdesh Joshi - Architect of Data foundations.',
  ls: '<div class="grid grid-cols-2 gap-2 text-emerald-400/80"><span>etl_pipeline.py</span><span>spark_config.yaml</span><span>medallion_schema.sql</span><span>requirements.txt</span><span>docker-compose.yml</span></div>',
  stack: '<div class="flex flex-wrap gap-2 mt-2"><span class="bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">PYTHON</span><span class="bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/30">SPARK</span><span class="bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-500/30">DELTA_LAKE</span><span class="bg-yellow-500/20 px-2 py-0.5 rounded border border-yellow-500/30">AIRFLOW</span></div>',
  'run pipeline': '<div class="space-y-1"><span class="text-yellow-500">[INFO]</span> Starting Spark Session...<br/><span class="text-yellow-400">[INFO]</span> Initializing Delta Lake...<br/><span class="text-yellow-400">[INFO]</span> Running transformations (Medallion)...<br/><span class="text-emerald-500">[SUCCESS]</span> Pipeline completed in 2.4s. 1.2M rows processed.</div>',
};

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState(INITIAL_HISTORY);
  const termBoxRef = useRef(null);
  const inputRef = useRef(null);

  const processCommand = (e) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
    } else {
      const result = COMMANDS[cmd] || `Command not found: ${cmd}`;
      setHistory(prev => [...prev, input, result]);
    }
    
    setInput('');
  };

  useEffect(() => {
    if (termBoxRef.current) {
      termBoxRef.current.scrollTop = termBoxRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on mount and whenever the terminal is clicked
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div 
      className="terminal-glass rounded-3xl overflow-hidden flex flex-col h-[400px] cursor-text"
      onClick={handleTerminalClick}
    >
      <div className="bg-white/5 px-6 py-3 border-b border-emerald-500/10 flex justify-between items-center">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20"></div>
        </div>
        <span className="text-[9px] mono text-emerald-500/60 uppercase font-bold tracking-[0.3em]">KTM_PROD_REPL</span>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div 
          ref={termBoxRef}
          className="flex-1 p-8 overflow-y-auto mono text-sm flex flex-col gap-2 scroll-smooth"
        >
          {history.map((line, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-emerald-500 opacity-50 font-bold">»</span>
              <div 
                className="flex-1 text-emerald-50" 
                dangerouslySetInnerHTML={{ __html: line }}
              />
            </div>
          ))}
          <form onSubmit={processCommand} className="flex items-center gap-3 mt-2">
            <span className="text-emerald-500 font-bold">»</span>
            <input 
              ref={inputRef}
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none outline-none text-white flex-1" 
              placeholder="run help"
            />
            <span className="cursor"></span>
          </form>
        </div>
        <div className="side-stats w-32 hidden md:flex flex-col p-6 justify-between text-center">
          <div className="space-y-8">
            <div>
              <p className="text-[7px] text-slate-500 uppercase font-bold mb-2 tracking-widest">Nodes</p>
              <p className="text-xs mono text-emerald-400 font-bold">08 Active</p>
            </div>
            <div>
              <p className="text-[7px] text-slate-500 uppercase font-bold mb-2 tracking-widest">Latency</p>
              <p className="text-xs mono text-blue-400 font-bold">24ms</p>
            </div>
          </div>
          <div className="text-[8px] mono text-emerald-500/40 animate-pulse font-black">● STREAMING</div>
        </div>
      </div>
    </div>
  );
}