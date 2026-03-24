import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} glass`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className="gradient-text">TechNova</span>
          </Link>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.link}>Inicio</Link>
          </li>
          <li>
            <Link href="/catalogo" className={styles.link}>Catálogo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
