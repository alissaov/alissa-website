import { motion } from "framer-motion";
import { Search, GitBranch, Settings, Rocket, Lightbulb } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico y entendimiento",
    description: "Entiendo tu negocio, analizo tu operación y detecto oportunidades de mejora.",
    items: [
      "Análisis de procesos actuales",
      "Identificación de cuellos de botella",
      "Evaluación de tiempos operativos",
      "Entendimiento real de cómo trabaja tu equipo",
    ],
    useChecks: true,
  },
  {
    number: "02",
    icon: GitBranch,
    title: "Diseño y mejora de procesos",
    description: "Diseño flujos claros, elimino ineficiencias y estandarizo para que tu operación sea más ágil.",
    items: [
      "Definición de flujos claros",
      "Estandarización de procesos",
      "Eliminación de ineficiencias",
      "Preparación para escalar",
    ],
    useChecks: false,
  },
  {
    number: "03",
    icon: Settings,
    title: "Traspaso de operación a tecnología",
    description: "Conecto tu operación con la tecnología adecuada para que trabajes de forma más eficiente y con mayor control.",
    items: [
      "Selección de herramientas adecuadas",
      "Uso de herramientas existentes",
      "Sistemas de seguimiento y control",
      "Automatización de procesos",
    ],
    useChecks: true,
    badge: "MI ESPECIALIDAD",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Implementación y optimización",
    description: "Pongo en marcha las soluciones junto a tu equipo, mido resultados y realizo ajustes para lograr mejora continua.",
    items: [
      "Implementación con el equipo",
      "Organización de proyectos",
      "Seguimiento y control",
      "Mejora continua",
    ],
    useChecks: false,
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">
            Operaciones + Tecnología
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Cómo transformo tu operación
            <br />
            en sistemas que funcionan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Desde entender tu negocio hasta implementar herramientas, convierto procesos desordenados
            en operaciones claras, medibles y escalables.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 relative"
            >
              {service.badge && (
                <span className="absolute top-6 right-6 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {service.badge}
                </span>
              )}

              <span className="text-lg font-bold text-accent mb-4 block">{service.number}</span>

              <div className="flex items-start gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <service.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>

              <ul className="space-y-2 mt-5 pl-14">
                {service.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2.5">
                    {service.useChecks ? (
                      <span className="text-accent text-xs">✔</span>
                    ) : (
                      <span className="w-3 h-px bg-muted-foreground/40" />
                    )}
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 border border-border rounded-2xl bg-card p-6 flex items-center justify-center gap-4 text-center"
        >
          <Lightbulb className="w-6 h-6 text-accent shrink-0" />
          <p className="text-sm text-muted-foreground">
            Puedes trabajar conmigo en <strong className="text-foreground">todo el proceso</strong> o solo en{" "}
            <strong className="text-foreground">la etapa que necesites.</strong>
            <br />
            Me adapto a tu realidad, tus herramientas y tus objetivos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
