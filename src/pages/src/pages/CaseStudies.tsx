import { useEffect, useState } from "react";
import "./CaseStudies.css";

export default function CaseStudies() {
  const [code, setCode] = useState("");
  const [isAllowed, setIsAllowed] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const hasAccess = sessionStorage.getItem("caseStudiesAccess");

    if (hasAccess === "true") {
      setIsAllowed(true);
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (code === "1756") {
      sessionStorage.setItem("caseStudiesAccess", "true");
      setIsAllowed(true);
      setError("");
      return;
    }

    setError("Clave incorrecta. Inténtalo nuevamente.");
    setCode("");
  };

  if (!isAllowed) {
    return (
      <main className="cases-lock-page">
        <div className="cases-lock-orb cases-lock-orb-one" />
        <div className="cases-lock-orb cases-lock-orb-two" />

        <section className="cases-lock-card">
          <div className="cases-lock-badge">Private Portfolio</div>

          <h1>Case Studies</h1>

          <p>
            Ingresa la clave de 4 dígitos para acceder a los proyectos privados
            del portafolio.
          </p>

          <form onSubmit={handleSubmit} className="cases-lock-form">
            <input
              type="password"
              inputMode="numeric"
              maxLength={4}
              placeholder="••••"
              value={code}
              onChange={(event) => setCode(event.target.value)}
            />

            <button type="submit">Ingresar</button>
          </form>

          {error && <p className="cases-lock-error">{error}</p>}
        </section>
      </main>
    );
  }

  return (
    <main className="cases-page">
      <section className="cases-hero">
        <div className="cases-hero-content">
          <p className="cases-eyebrow">Portfolio</p>

          <h1>Case Studies</h1>

          <p>
            Proyectos donde participé en la definición funcional, estrategia de
            producto, UX, gestión de alcance y coordinación entre negocio,
            diseño y desarrollo.
          </p>
        </div>

        <div className="cases-hero-panel">
          <span>01</span>
          <p>Case study disponible</p>
        </div>
      </section>

      <section className="cases-section">
        <div className="cases-section-header">
          <p className="cases-eyebrow">Selected Work</p>
          <h2>Product & Operations Cases</h2>
        </div>

        <div className="cases-grid">
          <a href="/projects/oma-carga" className="case-card case-card-featured">
            <div className="case-card-glow" />

            <div className="case-card-header">
              <span>Product Owner Case Study</span>
              <strong>01</strong>
            </div>

            <div className="case-card-body">
              <h2>OMA Carga</h2>

              <p>
                De un rediseño web a una plataforma operativa para consulta,
                cotización y gestión interna.
              </p>

              <div className="case-tags">
                <span>Product Owner</span>
                <span>UX Strategy</span>
                <span>Cotizador</span>
                <span>Admin Panel</span>
                <span>Logística aeroportuaria</span>
              </div>
            </div>

            <div className="case-card-footer">
              <span>Ver case study</span>
              <div className="case-arrow">→</div>
            </div>
          </a>

          <article className="case-card case-card-empty">
            <div className="case-card-header">
              <span>Coming Soon</span>
              <strong>02</strong>
            </div>

            <div className="case-card-body">
              <h2>Próximo caso</h2>
              <p>
                Espacio reservado para un nuevo proyecto de producto,
                operaciones o implementación digital.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
