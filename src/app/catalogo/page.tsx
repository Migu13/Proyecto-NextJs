import Image from "next/image";
import styles from "./catalogo.module.css";

const productos = [
  {
    id: 1,
    name: "TechNova Pro Alpha",
    description: "Laptop ultradelgado para creadores con pantalla OLED 4K y rendimiento sin límites.",
    price: "1.499 €",
    image: "/images/laptop.png"
  },
  {
    id: 2,
    name: "Titanium Desk RTX",
    description: "Sobremesa gaming extremo con refrigeración líquida y la última tecnología.",
    price: "2.899 €",
    image: "/images/desktop.png"
  },
  {
    id: 3,
    name: "Zenith Ultrabook",
    description: "Elegancia y portabilidad definitiva. Autonomía de 24 horas y peso pluma.",
    price: "1.299 €",
    image: "/images/ultrabook.png"
  }
];

export default function Catalogo() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Nuestro <span className="gradient-text">Catálogo</span>
        </h1>
        <p className={styles.subtitle}>Encuentra la máquina perfecta para ti y potencia tu futuro.</p>
      </header>

      <div className={styles.grid}>
        {productos.map((product) => (
          <article key={product.id} className={`${styles.card} glass`}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className={styles.productImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.productName}>{product.name}</h2>
              <p className={styles.productDesc}>{product.description}</p>
              <div className={styles.cardFooter}>
                <span className={styles.price}>{product.price}</span>
                <button className={styles.buyBtn}>Comprar</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
