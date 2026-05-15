import React, { useState } from 'react';

import './Index.css';
import Navbar from '../components/Navbar';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import FancyButton from '../components/FancyButton';

export default function FormArtbookNoah() {
  const [data, setData] = useState({ nome: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const coverImage = '/images/02555.png';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const SHEET_URL = 'https://sheetdb.io/api/v1/m6cjydmnmh3jx';

    try {
      const res = await fetch(SHEET_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [
            {
              nome: data.nome,
              email: data.email,
              data_envio: new Date().toISOString(),
            },
          ],
        }),
      });

      if (!res.ok) {
        throw new Error(`Erro HTTP: ${res.status}`);
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Erro ao enviar formulario:', err);
    }
  };

  return (
    <div>
      {/* <Navbar /> */}

      <section
        id="form"
        style={{
          backgroundImage: "url('/images/fundoform1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: '#000000ff',
          minHeight: '100vh',
          padding: '48px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          className="form-artbook-layout"
          style={{
            width: '100%',
            maxWidth: '980px',
            display: 'grid',
            gridTemplateColumns: 'minmax(240px, 360px) minmax(280px, 1fr)',
            gap: '42px',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src={coverImage}
              alt="Capa do ArtBook Noah e o Senhor das Almas"
              style={{
                width: '100%',
                maxWidth: '660px',
                height: '430px',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>

          <div
            className="form-artbook-card"
            style={{
              background: 'rgba(77, 120, 160, 0.92)',
              borderRadius: '8px',
              padding: '40px 44px',
              textAlign: 'center',
              boxShadow: '0 16px 36px rgba(18, 38, 64, 0.2)',
            }}
          >
            <h2
              style={{
                margin: '0 0 22px',
                fontSize: '2.5rem',
                lineHeight: 1,
                fontWeight: 800,
                color: '#ffffff',
              }}
            >
              Veja uma previa do ArtBook
            </h2>
            <p
              style={{
                color: '#ffffff',
                fontSize: '1.1rem',
              }}
            >
              Previa limitada: Voce recebe o primeiro capitulo do livro "Noah e o Senhor das Almas"
              + ilustracoes exclusivas do ArtBook + Cupom de desconto de 20% no dia do lancamento.
            </p>

            <p
              style={{
                color: '#ffffff',
                fontSize: '0.875rem',
              }}
            >
              *Quantidade de cupons limitadas
            </p>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  maxWidth: '360px',
                  margin: '0 auto',
                }}
              >
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  value={data.nome}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid #638CA6',
                    width: '100%',
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={data.email}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid #638CA6',
                    width: '100%',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: '#A7C3D4',
                    color: '#4A708B',
                    border: '2px solid transparent',
                    borderRadius: '8px',
                    padding: '12px 28px',
                    marginTop: '12px',
                    fontSize: '16px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                  }}
                >
                  Enviar
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <p
                  style={{
                    color: 'green',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginBottom: '20px',
                  }}
                >
                  Liberado com sucesso, aproveite!
                </p>
                <FancyButton href="https://drive.google.com/file/d/1kr-_X2WETjBjiJS-amLBV50juQVXy1cb/view?usp=sharing">
                  Ler agora
                </FancyButton>
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            textAlign: 'center',
            backgroundColor: 'transparent',
            padding: '32px 20px 0',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 20px 0',
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            <li>
              <a
                href="https://www.youtube.com/@jhonbucks"
                aria-label="YouTube"
                style={{ color: '#638CA6', fontSize: '25px' }}
              >
                <YouTubeIcon fontSize="inherit" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/jhonbucksarte"
                aria-label="Facebook"
                style={{ color: '#638CA6', fontSize: '25px' }}
              >
                <FacebookIcon fontSize="inherit" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jhonbucks"
                aria-label="Instagram"
                style={{ color: '#638CA6', fontSize: '25px' }}
              >
                <InstagramIcon fontSize="inherit" />
              </a>
            </li>
          </ul>

          <p
            style={{
              color: '#638CA6',
              fontWeight: 'bold',
              fontSize: '11px',
              marginBottom: 0,
            }}
          >
            © 2026 Jhon Bucks. Todos os direitos reservados. Design by ZiboO Studios
          </p>
        </div>

        <style>{`
          @media (max-width: 780px) {
            #form .form-artbook-layout {
              grid-template-columns: 1fr !important;
              gap: 28px !important;
            }

            #form img {
              max-width: 240px !important;
              height: 330px !important;
            }

            #form .form-artbook-card {
              padding: 30px 22px !important;
              border-width: 8px !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
