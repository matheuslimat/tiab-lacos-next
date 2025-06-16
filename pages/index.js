import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';
import ProductCard from '../components/ProductCard';

// Simulação de dados dos produtos. Você pode buscar isso de um CMS no futuro.
const products = [
  { id: 1, name: 'Laço Clássico Gorgurão', price: 15.00, imageUrl: '/images/laco_modelo_1.png' },
  { id: 2, name: 'Laço Boutique com Pérolas', price: 25.00, imageUrl: '/images/laco_modelo_2.jpeg' },
  { id: 3, name: 'Tiara Confort Laço', price: 22.00, imageUrl: '/images/laco_modelo_3.jpeg' },
  { id: 4, name: 'Kit RN (3 unidades)', price: 30.00, imageUrl: '/images/laco_modelo_4.jpeg' },
];

export default function Home() {

  // Configuração da animação "container" para os cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Atraso entre a animação de cada item filho
      }
    }
  };

  const whatsappGeralLink = "https://wa.me/5521967280265?text=Olá!%20Gostaria%20de%20fazer%20uma%20encomenda%20de%20laços.";

  return (
    <div>
      <Head>
        <title>Tia B Laços | Artesanais e Feitos com Amor</title>
        <meta name="description" content="Venda de laços artesanais personalizados. Encomende já o seu!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Header */}
        <motion.header 
          className={styles.header}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Laços da Benisse</h1>
          <p>Feitos à mão com amor e carinho</p>
        </motion.header>

        {/* Seção de Produtos */}
        <section className={styles.productsSection}>
          <h2>Nossos Modelos</h2>
          <motion.div 
            className={styles.productsGrid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </section>

        {/* Seção de Chamada para Ação */}
        <section className={styles.ctaSection}>
            <h2>Gostou de algum modelo?</h2>
            <p>Entre em contato pelo WhatsApp para personalizar cores, tamanhos e finalizar sua encomenda. Será um prazer criar um laço especial para você!</p>
            <motion.a 
              href={whatsappGeralLink}
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.ctaButton}`} // Usando uma classe CSS genérica de botão
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              // Animação para chamar atenção
              animate={{
                scale: [1, 1.05, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{
                backgroundColor: '#B2DFDB',
                color: '#424242',
                border: 'none',
                borderRadius: '50px',
                padding: '15px 30px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                display: 'inline-block'
              }}
            >
              Chamar no WhatsApp
            </motion.a>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} Laços da Tia B. Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  )
}