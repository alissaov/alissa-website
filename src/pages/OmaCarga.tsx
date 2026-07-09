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
          <h1>Acceso privado</h1>
          <p>Ingresa la clave de 4 dígitos para ver este case study.</p>

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
          De un rediseño web a una plataforma operativa para consulta,
          cotización y gestión interna.
        </p>

        <div className="oma-tags">
          <span>Product Owner</span>
          <span>Logística aeroportuaria</span>
          <span>Website + Cotizador + Admin</span>
          <span>UX + Automatización + Escalabilidad</span>
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
            <p>Producto</p>
            <h3>Website + Cotizador en línea + Panel administrativo</h3>
          </article>

          <article className="oma-card">
            <p>Participación</p>
            <h3>Definición funcional, priorización, flujos y gestión de alcance</h3>
          </article>

          <article className="oma-card">
            <p>Timeline impact</p>
            <h3>Estimado: 5 meses → Avance: ~2.5 meses</h3>
          </article>
        </div>
      </section>

      <section className="oma-section oma-white">
        <h2>Client Context</h2>
        <p>
          OMA Carga necesitaba modernizar su presencia digital y mejorar la
          forma en que sus usuarios consultaban servicios y generaban
          cotizaciones.
        </p>
        <p>
          La necesidad inicial era rediseñar el website, pero el proyecto
          evolucionó hacia una solución más completa: una plataforma modular con
          sitio corporativo, cotizador en línea, gestión de contenidos y panel
          administrativo.
        </p>

        <div className="oma-callout">
          El objetivo no era solo mejorar la apariencia del sitio, sino
          convertirlo en una herramienta operativa y comercial.
        </div>
      </section>

      <section className="oma-section oma-highlight">
        <div className="oma-section-header">
          <p className="oma-eyebrow">Project Challenge</p>
          <h2>Challenge & Complexity</h2>
          <p>
            El reto principal fue transformar reglas operativas complejas de
            carga aeroportuaria en una experiencia digital clara, guiada y
            confiable.
          </p>
        </div>

        <div className="oma-complexity-grid">
          <article className="oma-complexity-card">
            <div className="oma-card-icon">⚙️</div>
            <h3>Reglas variables</h3>
            <p>
              El cotizador debía considerar recinto, tipo de movimiento,
              fechas, peso, valor comercial y tipo de cambio.
            </p>
          </article>

          <article className="oma-complexity-card">
            <div className="oma-card-icon">📍</div>
            <h3>Servicios aplicables</h3>
            <p>
              Servicios obligatorios y adicionales según ciudad, recinto o
              escenario operativo.
            </p>
          </article>

          <article className="oma-complexity-card">
            <div className="oma-card-icon">🧮</div>
            <h3>Riesgo de errores</h3>
            <p>
              Cálculos sensibles a tipo de cambio, cantidades y datos
              operativos.
            </p>
          </article>

          <article className="oma-complexity-card">
            <div className="oma-card-icon">👥</div>
            <h3>Múltiples usuarios</h3>
            <p>
              Experiencia pensada para importadores, exportadores y aerolíneas.
            </p>
          </article>

          <article className="oma-complexity-card oma-complexity-card-wide">
            <div className="oma-card-icon">📈</div>
            <h3>Escalabilidad</h3>
            <p>
              Base preparada para integraciones, marketplace, chatbot o nuevos
              módulos.
            </p>
          </article>
        </div>
      </section>

      <section className="oma-section">
        <div className="oma-section-header">
          <p className="oma-eyebrow">Product Strategy</p>
          <h2>Product Solution</h2>
          <p>
            Se propuso una plataforma modular, responsive y administrable,
            diseñada para funcionar como canal comercial, herramienta de
            consulta y base para futuras capacidades digitales.
          </p>
        </div>

        <div className="oma-solution-list">
          <article className="oma-solution-item">
            <span>01</span>
            <div>
              <h3>Website corporativo</h3>
              <p>
                Presentación institucional, servicios, noticias, clientes, bolsa
                de trabajo y contacto.
              </p>
            </div>
          </article>

          <article className="oma-solution-item">
            <span>02</span>
            <div>
              <h3>Cotizador en línea</h3>
              <p>
                Flujo guiado con campos claros, validaciones, reglas de cálculo,
                servicios adicionales y resumen.
              </p>
            </div>
          </article>

          <article className="oma-solution-item">
            <span>03</span>
            <div>
              <h3>Panel administrativo</h3>
              <p>
                Gestión interna de contenidos, clientes, noticias,
                postulaciones, cotizaciones y configuraciones clave.
              </p>
            </div>
          </article>

          <article className="oma-solution-item">
            <span>04</span>
            <div>
              <h3>Arquitectura modular</h3>
              <p>Base preparada para crecer sin rehacer toda la plataforma.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="oma-section oma-white">
        <h2>My Role & Product Decisions</h2>
        <p>
          Mi rol como Product Owner fue ordenar la complejidad, traducir
          necesidades operativas en decisiones de producto y alinear al cliente
          con diseño, desarrollo y project management.
        </p>

        <div className="oma-impact-grid">
          <article>
            <span>01</span>
            <h3>Ordené el alcance funcional</h3>
            <p>
              Estructuré el proyecto en módulos claros para facilitar
              seguimiento, priorización y coordinación.
            </p>
            <strong>Scope management · Functional discovery · Modular thinking</strong>
          </article>

          <article>
            <span>02</span>
            <h3>Traducí operación en UX</h3>
            <p>
              Convertí reglas del cotizador en campos requeridos, validaciones,
              filtros, reglas de cálculo y lógica para servicios adicionales.
            </p>
            <strong>Product thinking · UX strategy · Operations to technology</strong>
          </article>

          <article>
            <span>03</span>
            <h3>Impulsé un cotizador más confiable</h3>
            <p>
              Propuse un flujo más guiado para reducir errores al capturar
              variables como recinto, fechas, peso, valor comercial y previos.
            </p>
            <strong>Functional analysis · Process improvement · Risk detection</strong>
          </article>

          <article>
            <span>04</span>
            <h3>Detecté fricciones de experiencia</h3>
            <p>
              Identifiqué riesgos como exceso de servicios visibles, falta de
              idiomas requeridos y servicios no aplicables por ciudad o recinto.
            </p>
            <strong>UX review · User-centered thinking · Prioritization</strong>
          </article>

          <article>
            <span>05</span>
            <h3>Diseñé para distintos perfiles</h3>
            <p>
              Organicé la experiencia considerando importadores, exportadores y
              aerolíneas.
            </p>
            <strong>User segmentation · Product structure · Information architecture</strong>
          </article>

          <article>
            <span>06</span>
            <h3>Alineé negocio, diseño y desarrollo</h3>
            <p>
              Convertí feedback y dudas funcionales en próximos pasos claros
              para el equipo.
            </p>
            <strong>Stakeholder management · Technical coordination · Communication</strong>
          </article>

          <article>
            <span>07</span>
            <h3>Cuidé la escalabilidad</h3>
            <p>
              Priorizamos arquitectura modular y panel administrativo para
              soportar futuras funcionalidades.
            </p>
            <strong>Product vision · Scalable design · Admin panels</strong>
          </article>
        </div>
      </section>

      <section className="oma-outcome">
        <h2>Outcome</h2>
        <p>
          El proyecto fue estimado inicialmente en aproximadamente{" "}
          <strong>5 meses de desarrollo</strong>. Con una gestión activa del
          alcance, seguimiento constante y coordinación cercana entre cliente,
          diseño, desarrollo y project management, logramos avanzar la
          implementación en aproximadamente <strong>2.5 meses</strong>.
        </p>
        <p>
          Más que un rediseño web, la solución evolucionó hacia una plataforma
          digital escalable, administrable y orientada a mejorar la experiencia
          de consulta y cotización.
        </p>

        <div className="oma-metric">
          <div>
            <span>5 meses</span>
            <p>Estimación inicial</p>
          </div>
          <div>
            <span>2.5 meses</span>
            <p>Avance logrado</p>
          </div>
        </div>

        <ul className="oma-outcome-list">
          <li>Reducción significativa del tiempo frente a la estimación inicial.</li>
          <li>Cotizador más claro, guiado y menos propenso a errores.</li>
          <li>Reglas operativas traducidas en lógica funcional.</li>
          <li>Servicios organizados por contexto y perfil de usuario.</li>
          <li>Mayor autonomía para el equipo interno mediante panel administrativo.</li>
          <li>Plataforma preparada para crecimiento futuro.</li>
        </ul>

        <div className="oma-skills">
          <span>Product Ownership</span>
          <span>Functional Discovery</span>
          <span>Requirement Gathering</span>
          <span>Stakeholder Management</span>
          <span>UX Strategy</span>
          <span>Scope Management</span>
          <span>Product Thinking</span>
          <span>Technical Coordination</span>
          <span>Admin Panels</span>
          <span>Quoting Flows</span>
          <span>Modular Product Design</span>
          <span>Operations to Technology Translation</span>
        </div>
      </section>
    </main>
  );
}
