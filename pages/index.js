import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';
import ProductCard from '../components/ProductCard';
import FallingBows from '../components/FallingBows';
import IntroAnimation from '../components/IntroAnimation';

const products = [
    { id: 2, name: 'Laço Charme de Poá', price: 25.00, imageUrl: '/images/laco_modelo_2.jpeg' },
    { id: 3, name: 'Laço Jardim Lilás', price: 22.00, imageUrl: '/images/laco_modelo_3.jpeg' },
    { id: 4, name: 'Laço Girassol Sorridente', price: 30.00, imageUrl: '/images/laco_modelo_4.jpeg' },
    { id: 5, name: 'Rabicó Laço Ouro e Mel', price: 30.00, imageUrl: '/images/laco_modelo_5.jpeg' },
    { id: 6, name: 'Rabicó Gatinha Manhosa', price: 30.00, imageUrl: '/images/laco_modelo_6.jpeg' },
    { id: 7, name: 'Rabicó Pompom Girassol', price: 30.00, imageUrl: '/images/laco_modelo_7.jpeg' },
    { id: 8, name: 'Rabicó Doce Encontro', price: 30.00, imageUrl: '/images/laco_modelo_8.jpeg' },
];

export default function Home() {
    const whatsappGeralLink = "https://wa.me/5521967280265?text=Olá!%20Gostaria%20de%20fazer%20uma%20encomenda%20de%20laços.";

    return (
        <div>
            <FallingBows />
            <Head>
                <title>Tia B Laços | Artesanais e Feitos com Amor</title>
                <meta name="description" content="Venda de laços artesanais personalizados. Encomende já o seu!" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>

            <main className={styles.main}>
                {/* Header com a Animação */}
                <header className={styles.header}>
                    <IntroAnimation title="Laços da Benisse" subtitle="Feitos à mão com amor e carinho" />
                </header>

                {/* Seção de Produtos */}
                <section className={styles.productsSection}>
                    <h2>Nossos Modelos</h2>
                    <motion.div
                        className={styles.productsGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    >
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </motion.div>
                </section>

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

                {/* Seção Sobre Mim */}
                <motion.section
                    className={styles.aboutSection}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.aboutContent}>
                        <div className={styles.aboutImageContainer}>
                            <Image
                                src="/images/foto_perfil.jpeg"
                                alt="Foto da artesã dos laços"
                                width={150}
                                height={150}
                                className={styles.aboutPhoto}
                            />
                        </div>
                        <div className={styles.aboutText}>
                            <h2>Quem Faz</h2>
                            <p>
                                Olá! Eu sou a Tia B, a artesã apaixonada por trás de cada laço. O que era um hobby se transformou em um sonho realizado.
                            </p>
                            <p>
                                Cada laço é feito à mão com muito carinho, pensando no conforto e na alegria de quem vai usar. Obrigada por apoiar!
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Seção de Contato e Mapa */}
                <motion.section
                    className={styles.contactSection}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>Onde nos Encontrar</h2>
                    <div className={styles.contactContent}>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A8,8,0,0,0,4,10c0,5.25,8,12,8,12s8-6.75,8-12A8,8,0,0,0,12,2Zm0,11.5A3.5,3.5,0,1,1,15.5,10,3.5,3.5,0,0,1,12,13.5Z" /></svg>
                                <p>Condomínio na Rua Goianinha, 230<br />Rio de Janeiro - RJ</p>
                            </div>
                            <div className={styles.contactItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.23,15.26a1,1,0,0,0-1.15-.35l-2.33.8A1,1,0,0,1,14.7,15l-.27-1.35a1,1,0,0,0-.7-1l-3.23-1.22a1,1,0,0,0-1.08.21L7,13.5a1,1,0,0,1-1.33-.27,1,1,0,0,1,0-1.08L14.7,3.1a1,1,0,0,1,1.25-.37l2.33.8a1,1,0,0,1,.7,1.06l.27,1.35a1,1,0,0,0,.7,1l3.23,1.22a1,1,0,0,0,1.08-.21l2.12-1.85a1,1,0,0,1,1.33.27,1,1,0,0,1,0,1.08l-9.05,9.05A1,1,0,0,0,19.23,15.26Z" /></svg>
                                <p><a href={whatsappGeralLink} target="_blank" rel="noopener noreferrer">(21) 96728-0265</a></p>
                            </div>
                            <div className={styles.contactItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2.163c3.204,0,3.584,0.012,4.85,0.07,3.252,0.148,4.771,1.691,4.919,4.919,0.058,1.265,0.07,1.646,0.07,4.85s-0.012,3.584-0.07,4.85c-0.148,3.227-1.669,4.771-4.919,4.919-1.266,0.058-1.646,0.07-4.85,0.07s-3.584-0.012-4.85-0.07c-3.252-0.148-4.771-1.691-4.919-4.919-0.058-1.265-0.07-1.646-0.07-4.85s0.012-3.584,0.07-4.85c0.148-3.227,1.669-4.771,4.919-4.919,1.266-0.058,1.646-0.07,4.85-0.07M12,0C8.74,0,8.333,0.014,7.053,0.072,2.695,0.272,0.273,2.69,0.073,7.052,0.014,8.333,0,8.74,0,12s0.014,3.667,0.072,4.947c0.2,4.358,2.618,6.78,6.98,6.98,1.281,0.058,1.688,0.072,4.947,0.072s3.667-0.014,4.947-0.072c4.354-0.2,6.782-2.618,6.979-6.98,0.058-1.28,0.072-1.688,0.072-4.947s-0.014-3.667-0.072-4.947C21.92,2.69,19.5,0.273,15.053,0.073,13.773,0.014,13.367,0,12,0Z M12,5.838a6.162,6.162,0,1,0,0,12.324,6.162,6.162,0,0,0,0-12.324Z M12,16a4,4,0,1,1,0-8,4,4,0,0,1,0,8Z M17.636,4.835a1.428,1.428,0,1,1,0,2.856,1.428,1.428,0,0,1,0-2.856Z" /></svg>
                                <p><a href="https://www.instagram.com/tiabelacos" target="_blank" rel="noopener noreferrer">@tiabelacos</a></p>
                            </div>
                        </div>
                        <div className={styles.contactMap}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.900999512344!2d-43.32357388503417!3d-22.9168449850062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997d020677843f%3A0x6a24227494a8566b!2sR.%20Goianinha%2C%20230%20-%20Anil%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022753-290!5e0!3m2!1spt-BR!2sbr!4v1672947134541!5m2!1spt-BR!2sbr"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa para Rua Goianinha, 230, Rio de Janeiro"
                            ></iframe>
                        </div>
                    </div>
                </motion.section>

                {/* Footer */}
                <footer className={styles.footer}>
                    <p>© {new Date().getFullYear()} Laços da Tia B. Todos os direitos reservados.</p>
                </footer>
            </main>
        </div>
    )
}