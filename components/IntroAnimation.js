import React from 'react';
import { motion } from 'framer-motion';
import styles from './IntroAnimation.module.css';

// Componente com animações sofisticadas e efeitos visuais modernos
export default function IntroAnimation({ title, subtitle }) {
  // Variantes para o container principal com efeito de entrada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  // Variantes para as partículas flutuantes
  const particleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1.2, 1],
      opacity: [0, 0.8, 0.6],
      transition: {
        duration: 2,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1
      }
    }
  };

  // Variantes para o laço com animação mais sofisticada
  const bowVariants = {
    hidden: { 
      scale: 0.3, 
      opacity: 0, 
      rotate: -180,
      filter: "blur(10px)"
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 1.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Variantes para o texto com efeito de digitação
  const textVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.8,
      filter: "blur(5px)"
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        delay: 1.2, 
        duration: 1, 
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    }
  };

  // Variantes para o subtítulo com delay
  const subtitleVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        delay: 1.8, 
        duration: 0.8, 
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Partículas flutuantes decorativas */}
      <motion.div className={styles.particlesContainer}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`${styles.particle} ${styles[`particle${i + 1}`]}`}
            variants={particleVariants}
            style={{
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </motion.div>

      {/* Container do laço com animação sofisticada */}
      <motion.div 
        className={styles.svgContainer}
        variants={bowVariants}
      >
        {/* SVG do laço modernizado */}
        <svg className={styles.svg} viewBox="0 0 200 120">
          {/* Gradiente para o laço */}
          <defs>
            <linearGradient id="bowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF7F7F" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#E8B4CB" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D4A5A5" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/> 
              </feMerge>
            </filter>
          </defs>
          
          {/* Metade Esquerda do laço */}
          <motion.path
            d="M100 60 C 60 20, 60 100, 100 60"
            fill="url(#bowGradient)"
            stroke="#FF7F7F"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#glow)"
            variants={{
              hidden: { pathLength: 0, opacity: 0, scale: 0.5 },
              visible: { 
                pathLength: 1, 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 1.5, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                } 
              }
            }}
            initial="hidden"
            animate="visible"
          />
          
          {/* Metade Direita do laço */}
          <motion.path
            d="M100 60 C 140 20, 140 100, 100 60"
            fill="url(#bowGradient)"
            stroke="#FF7F7F"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#glow)"
            variants={{
              hidden: { pathLength: 0, opacity: 0, scale: 0.5 },
              visible: { 
                pathLength: 1, 
                opacity: 1, 
                scale: 1,
                transition: { 
                  delay: 0.3, 
                  duration: 1.5, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                } 
              }
            }}
            initial="hidden"
            animate="visible"
          />
          
          {/* Centro do laço */}
          <motion.circle
            cx="100"
            cy="60"
            r="8"
            fill="#D4AF37"
            filter="url(#glow)"
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: { 
                scale: [0, 1.3, 1], 
                opacity: 1,
                transition: { 
                  delay: 0.8, 
                  duration: 0.8, 
                  ease: "easeOut" 
                } 
              }
            }}
            initial="hidden"
            animate="visible"
          />
        </svg>
      </motion.div>

      {/* Container de texto com animações escalonadas */}
      <motion.div className={styles.textContainer}>
        <motion.h1 
          variants={textVariants}
          className={styles.title}
        >
          {title.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 1.2 + index * 0.05,
                    duration: 0.3
                  }
                }
              }}
              style={{ display: 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p 
          variants={subtitleVariants}
          className={styles.subtitle}
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}