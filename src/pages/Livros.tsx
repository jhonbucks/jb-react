import React, { useEffect, useMemo, useState } from 'react';
import './Index.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import FancyButton from '../components/FancyButton';
import styles from './Livros.module.css';
import HeroBanner from '../components/HeroBanner';

type Heading = { id: string; text: string };

export default function Livros() {
  const [query, setQuery] = useState('');
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLHeadingElement>('#insp-block h2'));
    const toSlug = (s: string) =>
      s
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');

    const list: Heading[] = nodes.map((n) => {
      if (!n.id || n.id.trim() === '') n.id = toSlug(n.textContent || 'secao');
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
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('flash-highlight'); // classe global definida no index.css
    setTimeout(() => el.classList.remove('flash-highlight'), 1200);
  };

  const submit = () => {
    const first = results[0];
    if (first) goTo(first.id);
  };

  return (
    <>
      <Navbar />
      <HeroBanner
        src="/images/dogs.png"
        title="meus livros"
        heightVh={60} // pode trocar para 100 se quiser ocupar a tela inteira
      />{' '}
      <br />
      {/* <section className={styles.searchBlock} style={{ padding: '0 10px' }}>
        <div className={styles.searchGrid}>
          <div className={styles.inputWrap}>
            <input
              id="search-h2"
              type="text"
              placeholder="Qual livro você procura?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') submit();
              }}
              className={styles.input}
            />
            <button aria-label="Buscar" onClick={submit} className={styles.searchBtn}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          {query.trim().length > 0 && (
            <div className={styles.results}>
              {results.length === 0 ? (
                <div className={styles.noResult}>Nenhum resultado.</div>
              ) : (
                results.map((h) => (
                  <button key={h.id} onClick={() => goTo(h.id)} className={styles.resultItem}>
                    {h.text}
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      </section> */}
      {/* Mantemos o id para o querySelector funcionar */}
      <section id="insp-block" className={styles.inspBlock} style={{ padding: '0 24px' }}>
        <div className={styles.inspGrid}>
          <div className={styles.inspImageBox}>
            <img
              src="/images/livro00.png"
              alt="Capa da edição especial de Noah e o Senhor das Almas, fundo escuro"
              className={styles.inspImage}
            />
          </div>
          <div className={styles.inspText}>
            <h2>
              Noah e o <span className="highlight">Senhor das Almas</span>{' '}
              <span style={{ fontSize: 'clamp(12px,2.5vw,30px)', fontWeight: 400 }}>
                – Edição Especial
              </span>
            </h2>

            <p>
              Nesta aventura repleta de coragem, magia e sacrifício, Noah terá que confrontar não
              apenas forças malignas, mas também os segredos de sua própria linhagem...
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <FancyButton href="#">Comprar</FancyButton>
              <FancyButton href="/noah" variant="secondary">
                Saiba mais
              </FancyButton>
            </div>
          </div>

          <div className={styles.inspImageBox}>
            <img
              src="/images/livro1.png"
              alt="Capa do livro Noah e o Senhor das Almas"
              className={styles.inspImage}
            />
          </div>

          <div className={styles.inspText}>
            <h2>
              Noah e o <span className="highlight">Senhor das Almas</span>{' '}
            </h2>
            <p>
              Em um mundo onde a escuridão não é apenas uma sombra, mas um inimigo voraz, Noah
              Stolk, um jovem de 14 anos, vê sua vida tranquila no povoado de Nortreus....
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <FancyButton href="#">Comprar</FancyButton>
              <FancyButton href="/noahalmas" variant="secondary">
                Saiba mais
              </FancyButton>
            </div>
          </div>

          <div className={styles.inspImageBox}>
            <img src="/images/livro2.png" alt="Capa do The art BOOK" className={styles.inspImage} />
          </div>

          <div className={styles.inspText}>
            <h2>
              The <span className="highlight">art BOOK</span>
            </h2>
            <p>
              Coletânea visual que explora a criatividade do artista por meio de ilustrações únicas,
              fanarts marcantes e criações autorais inspiradas por temas diversos....
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <FancyButton href="https://hotmart.com/pt-br/marketplace/produtos/the-art-book/W97175302W">
                Comprar
              </FancyButton>
              <FancyButton href="/art" variant="secondary">
                Saiba mais
              </FancyButton>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
