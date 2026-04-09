import { useEffect, useRef, useState } from "react";

const INITIAL_HISTORY = [
  "System access granted.",
  'Welcome, guest. Type "help" to start.',
];

const COMMANDS = {
  help: "Available: about, skills, projects, run pipeline, clear",
  about:
    "Nirdesh Joshi: Aspiring Data Engineer based in Nepal. Focused on PySpark, SQL, Airflow, and building production-style data pipelines.",
  skills:
    "Python, SQL, PySpark, Pandas, Airflow, PostgreSQL, Delta Lake, Docker, Git.",
  projects:
    "Retail Lakehouse, Batch ETL Engine, Streaming Ingestor.",
  "run pipeline":
    "Pipeline executed successfully: Source -> Bronze -> Silver -> Gold.",
};

export default function Terminal() {
  const [history, setHistory] = useState(INITIAL_HISTORY);
  const [input, setInput] = useState("");
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (rawCommand) => {
    const command = rawCommand.trim().toLowerCase();

    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      return;
    }

    const output = COMMANDS[command] || `Command not found: ${command}`;
    setHistory((prev) => [...prev, `> ${rawCommand}`, output]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  return (
    <div className="w-full rounded-3xl border border-emerald-500/20 bg-black/60 backdrop-blur-xl shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-4 text-xs text-slate-400 font-mono">
          terminal@nirdesh:~
        </span>
      </div>

      <div
        ref={terminalBodyRef}
        className="h-[420px] overflow-y-auto p-5 font-mono text-sm text-emerald-400"
      >
        {history.map((line, index) => (
          <div key={index} className="mb-2 whitespace-pre-wrap break-words">
            {line}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
          <span className="text-emerald-500">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500"
            placeholder="Type a command..."
          />
        </form>
      </div>
    </div>
  );
}