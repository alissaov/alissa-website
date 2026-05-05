import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Si tu empresa está creciendo pero tu operación se siente caótica,{" "}
            <span className="text-accent">es momento de ordenarla.</span>
          </h2>
          <a
            href="https://calendly.com/alissaov/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent text-accent-foreground font-medium px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-base"
          >
            Agendar llamada
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
