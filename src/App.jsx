import React, { useState } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", title: "Início" },
    { id: "projects", title: "Projetos" },
    { id: "about", title: "Sobre" },
    { id: "contact", title: "Contato" },
  ];

  const projects = [
    {
      title: "Protótipos Educacionais",
      description: "Soluções estratégicas para aprendizado acessível.",
    },
    {
      title: "Visualização de Dados",
      description: "Análise educacional com visualizações impactantes.",
    },
  ];

  const about = {
    name: "Pedro Cardeal",
    role: "Desenvolvimento de Produtos Educacionais | Inovação Estratégica",
    bio: "Profissional atuando na interseção entre educação, inovação e tecnologia. Minha trajetória reúne experiência em ensino, curadoria de conteúdo, design de projetos educacionais e empreendedorismo.",
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", padding: "1rem 2rem", position: "fixed", width: "100%", top: 0, zIndex: 1000 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ color: "#4F46E5", fontSize: "1.25rem", fontWeight: "bold" }}>p-droo</h1>
          <nav style={{ display: "flex", gap: "1.5rem" }}>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                style={{
                  fontWeight: activeSection === section.id ? "bold" : "normal",
                  color: activeSection === section.id ? "#4F46E5" : "#1F2937",
                  textDecoration: "none",
                }}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" style={{ paddingTop: "5rem", minHeight: "100vh", backgroundColor: "#EEF2FF", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1F2937" }}>
            Olá, sou Pedro Cardeal
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#4B5563" }}>
            Desenvolvimento de Produtos Educacionais | Inovação Estratégica
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              onClick={() => setActiveSection("projects")}
              style={{ backgroundColor: "#4F46E5", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.375rem", border: "none", cursor: "pointer" }}
            >
              Ver Projetos
            </button>
            <button
              onClick={() => setActiveSection("contact")}
              style={{ border: "2px solid #4F46E5", color: "#4F46E5", padding: "0.75rem 1.5rem", borderRadius: "0.375rem", backgroundColor: "transparent", cursor: "pointer" }}
            >
              Contate-me
            </button>
          </div>
        </div>
      </section>

      {/* Projects */}
      {activeSection === "projects" && (
        <section id="projects" style={{ padding: "4rem 2rem", backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "2rem" }}>Meus Projetos</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {projects.map((project, i) => (
                <div key={i} style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.1)", padding: "1.5rem", borderRadius: "0.5rem", backgroundColor: "#F9FAFB" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{project.title}</h3>
                  <p style={{ color: "#6B7280" }}>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About */}
      {activeSection === "about" && (
        <section id="about" style={{ padding: "4rem 2rem", backgroundColor: "#F3F4F6" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "2rem" }}>Sobre Mim</h2>
            <div style={{ backgroundColor: "#ffffff", borderRadius: "0.5rem", padding: "2rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>{about.name}</h3>
              <p style={{ color: "#4F46E5", fontWeight: "bold", marginBottom: "1rem" }}>{about.role}</p>
              <p style={{ color: "#4B5563" }}>{about.bio}</p>
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      {activeSection === "contact" && (
        <section id="contact" style={{ padding: "4rem 2rem", backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "2rem" }}>Entre em Contato</h2>
            <div style={{ backgroundColor: "#F9FAFB", borderRadius: "0.5rem", padding: "2rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <p>Email: pedrocardealemail@example.com</p>
              <p>LinkedIn: linkedin.com/in/pedrocardeal</p>
              <p>GitHub: github.com/p-droo</p>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: "#1F2937", color: "white", padding: "2rem", textAlign: "center", marginTop: "4rem" }}>
        <p>© 2025 Pedro Cardeal. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
