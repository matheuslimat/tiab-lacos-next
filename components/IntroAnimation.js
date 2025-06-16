import React from 'react';
import { motion } from 'framer-motion';
import styles from './IntroAnimation.module.css';

// Este componente vai conter a animação do laço e o texto
export default function IntroAnimation({ title, subtitle }) {
  // Variantes para controlar a animação das metades do laço
  const bowVariants = {
    hidden: { x: 0, opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] }
    }
  };

  // Variantes para o texto, que aparece após o laço se abrir
  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.8, duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className={styles.container}>
      <motion.div className={styles.svgContainer}>
        {/* NOVO SVG - Laço Detalhado */}
        <svg className={styles.svg} viewBox="0 0 160 100">
            {/* Metade Esquerda */}
            <motion.path
                d="M80 50 C 40 10, 40 90, 80 50"
                fill="none"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: { pathLength: 1, opacity: 0.5, transition: { duration: 1, ease: "easeOut" } }
                }}
                initial="hidden"
                animate="visible"
            />
            {/* Metade Direita */}
            <motion.path
                d="M80 50 C 120 10, 120 90, 80 50"
                fill="none"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: { pathLength: 1, opacity: 0.5, transition: { delay: 0.2, duration: 1, ease: "easeOut" } }
                }}
                initial="hidden"
                animate="visible"
            />
        </svg>
      </motion.div>

      {/* Textos que aparecem por baixo */}
      <motion.div 
        className={styles.textContainer}
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </motion.div>
    </div>
  );
}