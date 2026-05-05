import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Entender tu operación", description: "Analizo cómo funciona tu empresa hoy, qué funciona y qué no." },
  { number: "02", title: "Estructurar procesos", description: "Diseño flujos claros y prácticos que tu equipo pueda seguir." },
  { number: "03", title: "Implementar herramientas", description: "Configuro las herramientas adecuadas para dar visibilidad y control." },
  { number: "04", title: "Optimizar continuamente", description: "Mido, ajusto y mejoro para que la operación evolucione con tu empresa." },
];

const Process = () => {
  return (
    <section id="proceso" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Proceso</p>
          <h2 className="text-3xl md:text-4xl font-bold">Cómo trabajo</h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <span className="text-5xl font-bold text-accent/20 block mb-4">{step.number}</span>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
