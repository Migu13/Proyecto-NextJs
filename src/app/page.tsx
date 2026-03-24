import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          El Futuro Es <br />
          <span className="gradient-text">Ahora.</span>
        </h1>
        <p className={styles.subtitle}>
          Descubre nuestra nueva línea de ordenadores de alto rendimiento.
          Diseñados para profesionales, gamers y creadores que no se conforman con menos.
        </p>
        <div className={styles.actions}>
          <Link href="/catalogo" className="btn">
            Ver Catálogo
          </Link>
          <Link href="#" className={`btn ${styles.btnOutline}`}>
            Saber Más
          </Link>
        </div>
      </section>
    </div>
  );
}
