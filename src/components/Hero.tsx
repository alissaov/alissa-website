import { motion } from "framer-motion";
import { CheckCircle, BarChart3, Clock } from "lucide-react";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-operations.png";

const badges = [
  { icon: CheckCircle, label: "Claridad operativa" },
  { icon: BarChart3, label: "Procesos eficientes" },
  { icon: Clock, label: "Mejores resultados" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src={heroImage}
          alt="Operaciones industriales en acción"
          className="w-full h-full object-cover"
          width={1280}
          height={864}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-transparent" />
      </div>
      <div className="absolute inset-0 md:hidden bg-surface" />

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-24 pb-16 flex flex-col justify-between min-h-screen">
        <div />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Ordena tu{"\n"}operación.
            <br />
            <span className="text-accent">Crece sin caos.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
            Ayudo a pequeñas y medianas empresas a{" "}
            <strong className="text-foreground">estructurar procesos, mejorar su operación</strong>{" "}
            y ejecutar mejor sus proyectos — con{" "}
            <strong className="text-foreground">claridad, control y sin burocracia innecesaria.</strong>
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://calendly.com/alissaov/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-medium px-7 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              Agendar llamada
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center border border-border bg-surface/80 text-primary font-medium px-7 py-3.5 rounded-lg hover:bg-secondary transition-colors text-sm"
            >
              Ver servicios
            </a>
          </div>
        </motion.div>

        {/* Bottom badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-8 pt-8 border-t border-border/50 mt-12"
        >
          {badges.map((badge) => (
            <div key={badge.label} className="flex flex-col items-center gap-2">
              <badge.icon className="w-6 h-6 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
