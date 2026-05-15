import React from 'react';

type NavLink = { label: string; href: string };

export default function Navbar() {
  const pathname = window.location.pathname;

  const links: NavLink[] = [
    { label: 'SOBRE', href: '/sobre' },
    { label: 'LOJA', href: '/livros' },
    { label: 'Arte', href: '/desenhos' },
  ];

  return (
    <header style={styles.wrap}>
      <nav style={styles.bar}>
        <a href="/" style={styles.logoBox}>
          <img src="/images/logo01.png" alt="Minha Logo" style={styles.logo} />
        </a>

        <ul style={styles.menu}>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label} style={styles.item}>
                <a
                  href={link.href}
                  style={{
                    ...styles.link,
                    borderBottom: isActive ? '2px solid #3b6fa1' : 'none',
                    paddingBottom: isActive ? '4px' : '0',
                    color: isActive ? '#3b6fa1' : '#2e2e2e',
                  }}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: { width: '100%', background: '#fff' },
  bar: {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 clamp(8px, 2vw, 24px)',
    height: 'clamp(54px, 8vw, 94px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'clamp(8px, 2vw, 24px)',
    overflow: 'hidden',
  },
  logoBox: { display: 'flex', alignItems: 'center', flexShrink: 0 },
  logo: { height: 'clamp(36px, 7vw, 84px)', width: 'auto' },
  menu: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(10px, 1.6vw, 32px)',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    justifyContent: 'flex-end',
    flex: '1 1 auto',
    minWidth: 0,
  },
  item: { flexShrink: 1 },
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    color: '#2e2e2e',
    textTransform: 'uppercase',
    letterSpacing: 'clamp(0.06em, 0.35vw, 0.28em)',
    fontSize: 'clamp(10px, 0.95vw, 14px)',
    lineHeight: 1,
    transition: 'color 0.3s ease, border-color 0.3s ease',
  },
};
