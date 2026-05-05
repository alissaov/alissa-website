import { motion } from "framer-motion";
import { AlertTriangle, Eye, Clock, Users, TrendingUp } from "lucide-react";

const problems = [
  { icon: AlertTriangle, text: "Todo es urgente" },
  { icon: Eye, text: "Falta de visibilidad" },
  { icon: Clock, text: "Retrasos constantes" },
  { icon: Users, text: "Dependencia de personas clave" },
  { icon: TrendingUp, text: "Dificultad para escalar" },
];

const Problems = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">¿Te suena familiar?</p>
          <h2 className="text-3xl md:text-4xl font-bold">Problemas comunes que resuelvo</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3"
            >
              <problem.icon className="w-4 h-4 text-accent shrink-0" />
              <span className="text-sm font-medium text-primary">{problem.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
