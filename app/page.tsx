import site from "../content/site.json";
import servicesData from "../content/services.json";
import faqData from "../content/faq.json";
import galleryData from "../content/gallery.json";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontSize: 24,
      margin: "0 0 12px 0",
      color: "var(--lamiss-primary)",
      letterSpacing: -0.2
    }}>{children}</h2>
  );
}

export default function Page() {
  const services = (servicesData as any).services ?? [];
  const faqs = (faqData as any).items ?? [];
  const images: string[] = (galleryData as any).images ?? [];

  return (
    <main>
      {/* Navbar */}
      <header style={{
        position: "sticky",
        top: 0,
        background: "var(--lamiss-surface)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--lamiss-border)",
        zIndex: 10
      }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.jpg"
              alt={(site as any).brand}
              style={{ height: 38, width: "auto", display: "block" }}
            />

            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
              <strong style={{ fontSize: 18, color: "var(--lamiss-text)" }}>{(site as any).brand}</strong>
              <span style={{ fontSize: 13, color: "var(--lamiss-muted)" }}>{(site as any).tagline}</span>
            </div>
          </div>

          <nav style={{ display: "flex", gap: 14, fontSize: 14 }}>
            <a href="#about" style={{ color: "var(--lamiss-text)", textDecoration: "none", opacity: 0.9 }}>About</a>
            <a href="#services" style={{ color: "var(--lamiss-text)", textDecoration: "none", opacity: 0.9 }}>Services</a>
            <a href="#faq" style={{ color: "var(--lamiss-text)", textDecoration: "none", opacity: 0.9 }}>FAQ</a>
            <a href="#gallery" style={{ color: "var(--lamiss-text)", textDecoration: "none", opacity: 0.9 }}>Gallery</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ borderBottom: "1px solid var(--lamiss-border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 18px" }}>
          <p style={{ margin: 0, fontSize: 14, opacity: 0.7 }}>Welcome to</p>
          <h1 style={{ margin: "10px 0 10px 0", fontSize: 44, letterSpacing: -0.5 }}>
            {(site as any).brand}
          </h1>
          <p style={{ margin: "0 0 18px 0", fontSize: 18, opacity: 0.85, maxWidth: 760 }}>
            {(site as any).tagline}
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#services" style={{
              display: "inline-block",
              padding: "10px 14px",
              borderRadius: 999,
              background: "var(--lamiss-primary)",
              border: "1px solid var(--lamiss-primary)",
              textDecoration: "none",
              color: "#fff",
              fontSize: 14
            }}>See services</a>

            <a href="#contact" style={{
              display: "inline-block",
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid var(--lamiss-border)",
              textDecoration: "none",
              color: "var(--lamiss-text)",
              fontSize: 14
            }}>Contact</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "42px 18px" }}>
          <SectionTitle>About</SectionTitle>
          <p style={{ margin: 0, fontSize: 16, opacity: 0.9, maxWidth: 900, lineHeight: 1.6 }}>
            {(site as any).about}
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{
        background: "var(--lamiss-surface)",
        borderTop: "1px solid var(--lamiss-border)",
        borderBottom: "1px solid var(--lamiss-border)"
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "42px 18px" }}>
          <SectionTitle>Services</SectionTitle>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 14,
            marginTop: 14
          }}>
            {services.map((s: any, idx: number) => (
              <div key={idx} style={{
                background: "var(--lamiss-surface-strong)",
                border: "1px solid var(--lamiss-border)",
                borderRadius: 16,
                padding: 16
              }}>
                <strong style={{ display: "block", marginBottom: 6 }}>{s.title}</strong>
                <p style={{ margin: 0, opacity: 0.85, lineHeight: 1.55 }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "42px 18px" }}>
          <SectionTitle>FAQ</SectionTitle>

          <div style={{ display: "grid", gap: 10, marginTop: 14, maxWidth: 900 }}>
            {faqs.map((f: any, idx: number) => (
              <details key={idx} style={{
                border: "1px solid var(--lamiss-border)",
                borderRadius: 14,
                padding: "12px 14px",
                background: "var(--lamiss-surface-strong)"
              }}>
                <summary style={{ cursor: "pointer", fontWeight: 600 }}>
                  {f.question}
                </summary>
                <p style={{ margin: "10px 0 0 0", opacity: 0.85, lineHeight: 1.6 }}>
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" style={{
        background: "var(--lamiss-surface)",
        borderTop: "1px solid var(--lamiss-border)"
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "42px 18px" }}>
          <SectionTitle>Gallery</SectionTitle>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 10,
            marginTop: 14
          }}>
            {images.map((src, idx) => (
              <div key={idx} style={{
                border: "1px solid var(--lamiss-border)",
                borderRadius: 16,
                overflow: "hidden",
                background: "var(--lamiss-surface-strong)"
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`Gallery ${idx+1}`} style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact */}
      <footer id="contact" style={{ borderTop: "1px solid var(--lamiss-border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "30px 18px", display: "grid", gap: 6 }}>
          <strong>{(site as any).brand}</strong>
          <span style={{ opacity: 0.75 }}>{(site as any).tagline}</span>

          <div style={{ height: 8 }} />

          <div style={{ display: "grid", gap: 4, fontSize: 14, opacity: 0.85 }}>
            {(site as any).contact?.phone ? <div>Phone: {(site as any).contact.phone}</div> : null}
            {(site as any).contact?.email ? <div>Email: {(site as any).contact.email}</div> : null}
            {(site as any).contact?.address ? <div>Address: {(site as any).contact.address}</div> : null}
          </div>

          <div style={{ height: 10 }} />
          <span style={{ fontSize: 12, opacity: 0.6 }}>
            © {new Date().getFullYear()} {(site as any).brand}. All rights reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}
