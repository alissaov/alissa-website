import { useState } from "react";
import "./OmaCarga.css";

export default function OmaCarga() {
    const [code, setCode] = useState("");
  const [isAllowed, setIsAllowed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (code === "1756") {
      setIsAllowed(true);
      setError("");
      return;
    }

    setError("Clave incorrecta. Inténtalo nuevamente.");
    setCode("");
  };

  if (!isAllowed) {
    return (
      <main className="oma-lock-page">
        <section className="oma-lock-card">
          <p className="oma-eyebrow">Private Case Study</p>
          <h1>OMA Carga</h1>
          <p>
            Este proyecto es parte del portafolio privado. Ingresa la clave de
            4 dígitos para continuar.
          </p>

          <form onSubmit={handleSubmit} className="oma-lock-form">
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

          {error && <p className="oma-lock-error">{error}</p>}
        </section>
      </main>
    );
  }
  return (
    <main className="oma-page">
      <section className="oma-hero">
        <p className="oma-eyebrow">Product Owner Case Study</p>
        <h1>OMA Carga</h1>
        <p className="oma-subtitle">
          Website corporativo, cotizador en línea y panel administrativo para una
          operación logística aeroportuaria.
        </p>

        <div className="oma-tags">
          <span>Product Owner</span>
          <span>Logística aeroportuaria</span>
          <span>Website + Cotizador + Admin</span>
        </div>
      </section>

      <section className="oma-section">
        <h2>Project Snapshot</h2>

        <div className="oma-grid">
          <article className="oma-card">
            <p>Rol</p>
            <h3>Product Owner</h3>
          </article>

          <article className="oma-card">
            <p>Industria</p>
            <h3>Logística aeroportuaria / carga aérea</h3>
          </article>

          <article className="oma-card">
            <p>Producto</p>
            <h3>Website + Cotizador + Panel Administrativo</h3>
          </article>

          <article className="oma-card">
            <p>Foco</p>
            <h3>Modernización digital, automatización y escalabilidad</h3>
          </article>
        </div>
      </section>

      <section className="oma-section oma-white">
        <h2>Client Context</h2>
        <p>
          OMA Carga forma parte del ecosistema de servicios aeroportuarios y
          logísticos asociados a OMA, con una operación orientada a usuarios que
          requieren información, servicios y cotización de procesos relacionados
          con carga, importación, exportación, aerolíneas y servicios
          misceláneos.
        </p>
        <p>
          El proyecto nace como una iniciativa para modernizar su presencia
          digital, mejorar la experiencia de cotización y dejar una estructura
          tecnológica escalable para futuras funcionalidades como marketplace,
          integraciones con sistemas internos y chatbot.
        </p>
      </section>

      <section className="oma-section oma-highlight">
        <h2>The Challenge</h2>
        <p className="oma-big-text">
          El reto no era solo rediseñar una web, sino convertirla en una
          herramienta operativa y comercial.
        </p>

        <ul className="oma-list">
          <li>Cotizador con reglas operativas complejas.</li>
          <li>Tipo de cambio capturado manualmente.</li>
          <li>Servicios misceláneos sin filtrado por ciudad o recinto.</li>
          <li>Campos de cantidad obligatorios poco claros.</li>
          <li>Reglas por tipo de operación: importación y exportación.</li>
          <li>Necesidad de generar cotizaciones más claras y confiables.</li>
        </ul>
      </section>

      <section className="oma-section">
        <h2>Product Solution</h2>
        <p>
          Se propuso una plataforma modular, administrable y responsive,
          diseñada para mejorar la experiencia de usuarios externos y facilitar
          la gestión interna del equipo de OMA Carga.
        </p>

        <div className="oma-modules">
          <div>Home</div>
          <div>Servicios</div>
          <div>Cotizador</div>
          <div>Blog / Noticias</div>
          <div>Bolsa de trabajo</div>
          <div>Panel administrativo</div>
        </div>
      </section>

      <section className="oma-section oma-white">
        <h2>My Role as Product Owner</h2>
        <p>
          Mi rol fue conectar la necesidad operativa del cliente con una solución
          funcional, clara y ejecutable para diseño y desarrollo.
        </p>

        <ul className="oma-list">
          <li>Levantamiento y ordenamiento del alcance funcional.</li>
          <li>Definición de módulos y flujos principales.</li>
          <li>Priorización de funcionalidades críticas.</li>
          <li>Validación de reglas del cotizador.</li>
          <li>Coordinación entre stakeholders, diseño, desarrollo y PM.</li>
          <li>Seguimiento de acuerdos, pendientes y cambios de alcance.</li>
        </ul>
      </section>

      <section className="oma-section">
        <h2>Key Product Decisions</h2>

        <div className="oma-decisions">
          <article>
            <span>01</span>
            <h3>Cotizador como flujo guiado</h3>
            <p>
              Para reducir errores y facilitar el uso por parte de usuarios
              externos.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Automatización del tipo de cambio</h3>
            <p>
              Para evitar inconsistencias cuando el valor comercial se capture
              en dólares.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Filtrado por ciudad o recinto</h3>
            <p>
              Para mostrar únicamente servicios aplicables a la operación
              seleccionada.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Arquitectura modular</h3>
            <p>
              Para permitir crecimiento futuro hacia marketplace, integraciones
              o chatbot.
            </p>
          </article>

          <article>
            <span>05</span>
            <h3>Administración interna</h3>
            <p>
              Para que OMA pueda actualizar contenidos sin depender
              constantemente del equipo técnico.
            </p>
          </article>
        </div>
      </section>

      <section className="oma-outcome">
        <h2>Outcome</h2>
        <p>
          El proyecto quedó definido como una plataforma digital escalable,
          administrable y orientada a mejorar la experiencia de consulta y
          cotización de servicios.
        </p>

        <div className="oma-skills">
          <span>Product Ownership</span>
          <span>Discovery funcional</span>
          <span>Stakeholder Management</span>
          <span>UX Strategy</span>
          <span>Requirement Gathering</span>
          <span>Scope Management</span>
          <span>Product Thinking</span>
          <span>Technical Coordination</span>
        </div>
      </section>
    </main>
  );
}
