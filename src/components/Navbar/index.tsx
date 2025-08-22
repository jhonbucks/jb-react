import React from 'react';

type NavLink = {
  label: string;
  href: string;
};

export default function Navbar() {
  const links: NavLink[] = [
    { label: 'SOBRE', href: '/sobre' },
    { label: 'Meus Livros', href: '/livros' },
    { label: 'Desenhos', href: '/desenhos' },
    // { label: 'Loja', href: '#' },
  ];

  return (
    <header style={styles.wrap}>
      <nav style={styles.bar}>
        {/* Logo fixa */}
        <a href="/" style={styles.logoBox}>
          <img
            src="/images/logo01.png" // coloque o caminho da sua logo
            alt="Minha Logo"
            style={styles.logo}
          />
        </a>

        {/* Links */}
        <ul style={styles.menu}>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} style={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    width: '100%',

    background: '#ffffffff',
  },
  bar: {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 24px',
    height: 94,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoBox: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
  },
  logo: {
    height: 88,
    width: 'auto',
  },
  menu: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 38,
  },
  link: {
    textDecoration: 'none',
    color: '#2e2e2e',
    textTransform: 'uppercase',
    letterSpacing: '0.35em',
    fontSize: 14,
  },
};
