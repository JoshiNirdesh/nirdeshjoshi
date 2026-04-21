import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Data Engineer",
    company: "TechNexus Solutions",
    period: "2023 - Present",
    location: "Kathmandu, Nepal",
    description:
      "Leading the transition to a Medallion architecture on AWS. Optimized Spark jobs reducing cloud costs by 40%.",
    tags: ["AWS", "Spark", "Airflow"],
  },
  {
    title: "Data Engineer",
    company: "DataFlow Systems",
    period: "2021 - 2023",
    location: "Remote",
    description:
      "Built real-time ETL pipelines for e-commerce analytics. Managed 50+ Airflow DAGs and PostgreSQL clusters.",
    tags: ["Python", "PostgreSQL", "Kafka"],
  },
  {
    title: "Junior Data Analyst",
    company: "Insight Analytics",
    period: "2020 - 2021",
    location: "Kathmandu, Nepal",
    description:
      "Automated reporting workflows using Python and SQL. Improved data accuracy by 25% through rigorous validation.",
    tags: ["SQL", "Pandas", "Tableau"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-24">
        <motion.h2
          className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-none text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Deployment_History
        </motion.h2>
        <div className="flex-1 h-px bg-emerald-500/20"></div>
        <div className="mono text-[10px] text-emerald-500/60 uppercase tracking-[0.4em]">
          Lifecycle_Log
        </div>
      </div>

      <div className="space-y-24">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Timeline Center Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent md:-ml-px"></div>

            <div
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Content Card */}
              <div className="w-full md:w-1/2 md:px-8 lg:px-16">
                <div className="bento-card p-6 md:p-10 rounded-[48px] relative group border-emerald-500/5 hover:border-emerald-500/20">
                  <div className="absolute -left-10 md:left-auto md:right-auto top-1/2 -translate-y-1/2 w-8 h-px bg-emerald-500/30 hidden md:block"></div>

                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <div className="text-[10px] mono text-emerald-500 font-bold mb-2 tracking-widest">
                        [ {exp.period} ]
                      </div>
                      <h3 className="text-3xl font-black group-hover:text-emerald-400 transition-colors uppercase tracking-tight">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <Briefcase className="w-3 h-3 text-slate-500" />
                        <span className="text-slate-400 mono text-xs font-bold">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg mb-10 leading-relaxed italic font-light border-l border-emerald-500/10 pl-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] mono font-bold uppercase tracking-widest text-slate-500 bg-white/5 px-4 py-2 rounded-xl group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute top-4 right-8 opacity-10 font-black italic text-4xl mono tracking-tighter text-slate-700 select-none">
                    0{experiences.length - index}
                  </div>
                </div>
              </div>

              {/* Spacer for desktop */}
              <div className="hidden md:block md:w-1/2 text-right px-16 group">
                <div className="mono text-[100px] font-black text-white/[0.02] leading-none select-none group-hover:text-emerald-500/[0.05] transition-colors duration-1000">
                  {exp.period.split(" - ")[0]}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
