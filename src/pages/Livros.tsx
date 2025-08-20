import React, { useEffect, useMemo, useState } from "react";
import "./Index.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FancyButton from "../components/FancyButton";

type Heading = { id: string; text: string };

export default function Index() {
  const [query, setQuery] = useState("");
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("#insp-block h2")
    );
    const toSlug = (s: string) =>
      s
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");

    const list: Heading[] = nodes.map((n) => {
      if (!n.id || n.id.trim() === "") n.id = toSlug(n.textContent || "secao");
      return { id: n.id, text: n.textContent || n.id };
    });
    setHeadings(list);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return headings.filter((h) => h.text.toLowerCase().includes(q));
  }, [query, headings]);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.add("flash-highlight");
    setTimeout(() => el.classList.remove("flash-highlight"), 1200);
  };

  const submit = () => {
    if (results.length > 0) goTo(results[0].id);
  };

  return (
    <>
      <Navbar />

      <section id="search-block" style={{ padding: "24px 24px 0" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 12,
          }}
        >
          <div style={{ position: "relative" }}>
            <input
              id="search-h2"
              type="text"
              placeholder="Qual livro você procura?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") submit();
              }}
              style={{
                width: "100%",
                height: 44,
                padding: "0 44px 0 14px",
                border: "1px solid #d0d0d0",
                borderRadius: 10,
                outline: "none",
                fontSize: 16,
              }}
            />
            <button
              aria-label="Buscar"
              onClick={submit}
              style={{
                position: "absolute",
                right: 8,
                top: 8,
                width: 28,
                height: 28,
                border: "none",
                background: "transparent",
                cursor: "pointer",
                display: "grid",
                placeItems: "center",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          {query.trim().length > 0 && (
            <div
              style={{
                border: "1px solid #e9e9e9",
                borderRadius: 12,
                overflow: "hidden",
                background: "#fff",
                maxHeight: 280,
                overflowY: "auto",
              }}
            >
              {results.length === 0 ? (
                <div style={{ padding: 14, fontSize: 14, color: "#777" }}>
                  Nenhum resultado.
                </div>
              ) : (
                results.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => goTo(h.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "12px 14px",
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      fontSize: 16,
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f7f7f7")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    {h.text}
                  </button>
                ))
              )}
            </div>
          )}
        </div>

        <style>{`
          .flash-highlight { animation: flashBG 1.2s ease; }
          @keyframes flashBG {
            0% { background-color: rgba(255, 235, 59, 0.6); }
            100% { background-color: transparent; }
          }
        `}</style>
      </section>

      <section id="insp-block" style={{ marginTop: 24, marginBottom: 40 }}>
        <div className="insp-grid">
          <div className="insp-imageBox">
            <img
              src="/images/livro00.png"
              alt="2012–2019"
              className="insp-image"
            />
          </div>
          <div className="insp-text">
            <h2>
              Noah e o <span className="highlight">Senhor das Almas</span>{" "}
              <span
                style={{ fontSize: "clamp(12px,2.5vw,30px)", fontWeight: 400 }}
              >
                – Edição Especial
              </span>
            </h2>

            <p>
              Nesta aventura repleta de coragem, magia e sacrifício, Noah terá
              que confrontar não apenas forças malignas, mas também os segredos
              de sua própria linhagem...
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <FancyButton href="#">Comprar</FancyButton>
              <FancyButton href="/noah" variant="secondary">
                Saiba mais
              </FancyButton>
            </div>
          </div>
          <div className="insp-imageBox">
            <img
              src="/images/livro1.png"
              alt="2012–2019"
              className="insp-image"
            />
          </div>

          <div className="insp-text">
            <h2>
              Noah e o <span className="highlight">Senhor das Almas</span>{" "}
            </h2>
            <p>
              Em um mundo onde a escuridão não é apenas uma sombra, mas um
              inimigo voraz, Noah Stolk, um jovem de 14 anos, vê sua vida
              tranquila no povoado de Nortreus....
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <FancyButton href="#">Comprar</FancyButton>
              <FancyButton href="/noah" variant="secondary">
                Saiba mais
              </FancyButton>
            </div>
          </div>

          <div className="insp-imageBox">
            <img
              src="/images/livro2.png"
              alt="2012–2019"
              className="insp-image"
            />
          </div>

          <div className="insp-text">
            <h2>
              The <span className="highlight">art BOOK</span>
            </h2>
            <p>
              Coletânea visual que explora a criatividade do artista por meio de
              ilustrações únicas, fanarts marcantes e criações autorais
              inspiradas por temas diversos....
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <FancyButton href="#">Comprar</FancyButton>
              <FancyButton href="/art" variant="secondary">
                Saiba mais
              </FancyButton>
            </div>
          </div>
        </div>

        <style>{`
  #insp-block .insp-grid {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 48px;
    align-items: center;
  }
  #insp-block .insp-imageBox {
    background: #fff;
    border-radius: 24px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #insp-block .insp-image {
    width: 80%;
    max-width: 400px;
    height: auto;
  }
  #insp-block .insp-text {
    max-width: 640px;
    margin: 0 auto 0 0;
    text-align: left;
  }
  @media (max-width: 1024px) {
    #insp-block .insp-grid {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    #insp-block .insp-image {
      width: 100%;
      max-width: 300px;
    }
  }
`}</style>
      </section>

      <Footer />
    </>
  );
}
