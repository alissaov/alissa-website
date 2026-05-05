import { motion } from "framer-motion";
import alissaPhoto from "@/assets/alissa-photo.png";

const About = () => {
  return (
    <section id="sobre-mi" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-lg">
<img
                src={alissaPhoto}
                alt="Alissa Osores - Consultora en operaciones y mejora de procesos"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Sobre mí</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Alissa Osores</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ayudo a empresas en crecimiento a ordenar su operación y
                convertir sus procesos en sistemas claros, medibles y escalables.
              </p>
              <p>
                Trabajo entendiendo a profundidad cómo funciona tu negocio —
                desde tus procesos hasta los retos reales del equipo — para
                luego estructurarlo y llevarlo a herramientas que{" "}
                <em className="font-semibold text-foreground">realmente se usan</em>.
              </p>
              <p>
                Mi enfoque es práctico: soluciones que se implementan, equipos
                que adoptan y operaciones que funcionan mejor desde el día a día.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/alissamov"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Conéctemos en LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
