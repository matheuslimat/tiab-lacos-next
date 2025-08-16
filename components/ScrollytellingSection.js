import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import styles from './ScrollytellingSection.module.css';

const ScrollytellingSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  
  const { scrollYProgress, scrollY } = useScroll();
  
  // Enhanced parallax transforms with multiple layers
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const bowsY = useTransform(scrollYProgress, [0, 1], ['0%', '120%']);
  const progressOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  
  // Scroll detection for active section
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolling(true);
    
    // Calculate which section is currently in view
    const windowHeight = window.innerHeight;
    const scrollPosition = latest;
    const sectionHeight = windowHeight;
    const currentSection = Math.floor(scrollPosition / sectionHeight);
    
    if (currentSection >= 0 && currentSection < storySteps.length) {
      setActiveSection(currentSection);
    }
    
    // Reset scrolling state after a delay
    const timeout = setTimeout(() => setIsScrolling(false), 150);
    return () => clearTimeout(timeout);
  });
  
  // Navigation function for progress dots
  const navigateToSection = (sectionIndex) => {
    const targetY = sectionIndex * window.innerHeight;
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  };

  const storySteps = [
    {
      emoji: '🎀',
      title: 'A Arte dos Laços',
      text: 'Cada laço é uma pequena obra de arte, criada com amor e dedicação. Nossa jornada começou com a paixão por transformar simples fitas em acessórios únicos.',
      color: '#E8B4CB'
    },
    {
      emoji: '✨',
      title: 'Materiais Especiais',
      text: 'Selecionamos cuidadosamente cada material - desde sedas delicadas até organzas brilhantes. Cada textura conta uma história diferente.',
      color: '#DDA0DD'
    },
    {
      emoji: '👶',
      title: 'Para Pequenas Princesas',
      text: 'Nossos laços são pensados especialmente para as pequenas. Conforto, segurança e beleza se unem em cada criação.',
      color: '#FFB6C1'
    },
    {
      emoji: '💝',
      title: 'Momentos Especiais',
      text: 'Cada laço marca um momento único - o primeiro sorriso, os primeiros passos, as primeiras fotos. Fazemos parte dessas memórias preciosas.',
      color: '#FF7F7F'
    },
    {
      emoji: '🌟',
      title: 'Sua História',
      text: 'E agora, queremos fazer parte da sua história. Escolha o laço perfeito e crie momentos inesquecíveis com sua pequena princesa.',
      color: '#FFD700'
    }
  ];

  return (
    <div className={styles.scrollyContainer}>
      {/* Enhanced Background Layer with Multiple Parallax Effects */}
      <motion.div 
        className={styles.backgroundLayer}
        style={{ y: backgroundY }}
      >
        <motion.div 
          className={styles.floatingBows}
          style={{ y: bowsY }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.floatingBow}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{ 
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.3, 1],
                rotate: [0, 15, -15, 0],
                x: [0, 20, -20, 0]
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
              style={{
                filter: `hue-rotate(${i * 30}deg)`,
              }}
            >
              🎀
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Progress Indicator with Navigation */}
      <motion.div 
        className={styles.progressContainer}
        style={{ opacity: progressOpacity }}
      >
        <motion.div 
          className={styles.progressBar}
          style={{ 
            scaleY: scrollYProgress,
            background: `linear-gradient(180deg, ${storySteps[activeSection]?.color || '#E8B4CB'} 0%, #FFD700 100%)`
          }}
        />
        <div className={styles.progressDots}>
          {storySteps.map((step, index) => (
            <motion.div
              key={index}
              className={`${styles.progressDot} ${index === activeSection ? styles.active : ''}`}
              onClick={() => navigateToSection(index)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              animate={{
                backgroundColor: index === activeSection ? step.color : 'rgba(255, 255, 255, 0.3)',
                scale: index === activeSection ? 1.2 : 1
              }}
              transition={{ duration: 0.3 }}
              style={{
                boxShadow: index === activeSection ? `0 0 20px ${step.color}` : 'none'
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Enhanced Story Content with Advanced Animations */}
      <div className={styles.storyContainer}>
        {storySteps.map((step, index) => {
          const sectionProgress = useTransform(
            scrollYProgress,
            [index / storySteps.length, (index + 1) / storySteps.length],
            [0, 1]
          );
          
          return (
            <motion.div
              key={index}
              className={styles.storySection}
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { 
                  duration: 1,
                  delay: 0.2
                }
              }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <motion.div 
                className={styles.storyContent}
                style={{ 
                  y: textY,
                  borderColor: step.color
                }}
                initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1, 
                  rotateY: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.3,
                    type: "spring",
                    stiffness: 100
                  }
                }}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 2,
                  boxShadow: `0 30px 100px rgba(0, 0, 0, 0.2), 0 0 0 2px ${step.color}`,
                  transition: { type: 'spring', stiffness: 300 }
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div
                  className={styles.storyEmoji}
                  animate={{
                    rotate: index === activeSection ? [0, 15, -15, 0] : 0,
                    scale: index === activeSection ? [1, 1.2, 1] : 1
                  }}
                  transition={{
                    duration: 3,
                    repeat: index === activeSection ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                >
                  {step.emoji}
                </motion.div>
                
                <motion.h2 
                  className={styles.storyTitle}
                  initial={{ opacity: 0, y: 30, rotateX: -20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0,
                    transition: { delay: 0.4, duration: 0.8 }
                  }}
                  style={{ color: step.color }}
                >
                  {step.title}
                </motion.h2>
                
                <motion.p 
                  className={styles.storyText}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.6, duration: 0.8 }
                  }}
                >
                  {step.text}
                </motion.p>
              </motion.div>

              {/* Enhanced Interactive Bow Element */}
              <motion.div
                className={styles.interactiveBow}
                initial={{ x: 150, opacity: 0, rotate: -45 }}
                whileInView={{ 
                  x: 0, 
                  opacity: 1,
                  rotate: 0,
                  transition: { 
                    delay: 1, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 80
                  }
                }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                animate={{
                  y: index === activeSection ? [0, -10, 0] : 0
                }}
                transition={{
                  duration: 2,
                  repeat: index === activeSection ? Infinity : 0,
                  ease: "easeInOut"
                }}
              >
                <div className={styles.bowShape}>
                  <motion.div 
                    className={styles.bowLeft}
                    style={{ background: `linear-gradient(135deg, ${step.color}, #FFD700)` }}
                    animate={{
                      scale: index === activeSection ? [1, 1.1, 1] : 1
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.div 
                    className={styles.bowRight}
                    style={{ background: `linear-gradient(135deg, ${step.color}, #FFD700)` }}
                    animate={{
                      scale: index === activeSection ? [1, 1.1, 1] : 1
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div 
                    className={styles.bowCenter}
                    style={{ background: `linear-gradient(180deg, #FFD700, ${step.color})` }}
                    animate={{
                      scaleY: index === activeSection ? [1, 1.2, 1] : 1
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>


    </div>
  );
};

export default ScrollytellingSection;