import { motion } from "framer-motion";
import { CheckCircle, ChevronRight } from "lucide-react";

const results = [
  "Claridad operativa",
  "Mejor ejecución",
  "Menos caos",
  "Procesos escalables",
  "Mayor control",
];

const caseStudies = [
  {
    company: "LHH Perú",
    title: "Transformación operativa integral",
    problem: "Operaciones manuales y desordenadas en múltiples herramientas sin integración",
    solution: [
      "Mapeo y rediseño de más de 9 procesos",
      "Definición de estructura centralizada y automatizaciones",
    ],
    result: "Procesos estandarizados, base lista para automatización, mayor control operativo",
  },
  {
    company: "Intrepid",
    title: "Automatización del proceso de facturación",
    problem: "+500 facturas semanales procesadas manualmente por el equipo de finanzas (15 personas)",
    solution: [
      "Implementación de flujos automatizados con Power Automate",
      "Eliminación del ingreso manual de datos",
    ],
    result: "Reducción del 80% en tiempo de procesamiento y eliminación de errores manuales",
  },
];

const Results = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Resultados</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Lo que cambia cuando tu operación funciona
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto mb-20">
          {results.map((result, i) => (
            <motion.div
              key={result}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3"
            >
              <CheckCircle className="w-5 h-5 text-accent" />
              <span className="text-lg font-medium">{result}</span>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="flex items-stretch gap-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 flex-1">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card text-card-foreground rounded-2xl p-8 flex flex-col"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                  {cs.company}
                </p>
                <h3 className="text-xl font-bold text-primary mb-6">{cs.title}</h3>

                <div className="space-y-5 flex-1">
                  <div>
                    <p className="text-sm font-semibold text-accent mb-1">Problema</p>
                    <p className="text-sm text-muted-foreground">{cs.problem}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">Solución</p>
                    <ul className="space-y-1">
                      {cs.solution.map((s) => (
                        <li key={s} className="text-sm text-muted-foreground">• {s}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-green-600 mb-1">Resultado</p>
                    <p className="text-sm text-muted-foreground">{cs.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Subtle arrow hint */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex items-center"
          >
            <ChevronRight className="w-6 h-6 text-primary-foreground/25" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Results;
