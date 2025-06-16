import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './ProductCard.module.css'; // Criaremos este arquivo

export default function ProductCard({ product }) {
  // Configurações da animação
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const formatPrice = (price) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  const whatsappLink = `https://wa.me/5521967280265?text=Olá!%20Gostaria%20de%20encomendar%20o%20${encodeURIComponent(product.name)}.`;


  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={300}
        height={300}
        className={styles.image}
      />
      <div className={styles.info}>
        <h3>{product.name}</h3>
        <p className={styles.price}>{formatPrice(product.price)}</p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.button}>
          Encomendar
        </a>
      </div>
    </motion.div>
  );
}