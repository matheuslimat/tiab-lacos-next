import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './FallingBows.module.css';

// Função para gerar um número aleatório em um intervalo
const random = (min, max) => Math.random() * (max - min) + min;

const Bow = ({ initialX, duration, delay }) => (
  <motion.div
    className={styles.bow}
    style={{
      left: `${initialX}%`, // Posição horizontal inicial
    }}
    initial={{ y: '-10vh' }} // Começa um pouco acima da tela
    animate={{ y: '110vh' }} // Termina um pouco abaixo da tela
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  >
    🎀
  </motion.div>
);

export default function FallingBows() {
  const [bows, setBows] = useState([]);

  // useEffect para garantir que a geração aleatória aconteça apenas no cliente
  useEffect(() => {
    const numberOfBows = 20; // Quantidade de laços na tela
    const generatedBows = Array.from({ length: numberOfBows }).map((_, i) => ({
      id: i,
      initialX: random(0, 100),       // Posição horizontal aleatória
      duration: random(8, 16),        // Duração da queda aleatória
      delay: random(0, 10),           // Atraso inicial aleatório
    }));
    setBows(generatedBows);
  }, []);

  return (
    <div className={styles.backgroundContainer} aria-hidden="true">
      {bows.map(bow => (
        <Bow key={bow.id} {...bow} />
      ))}
    </div>
  );
}