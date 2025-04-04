import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      }, { threshold: 0.1 });

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }
  }, []);

  return (
    <div ref={sectionRef} className={clsx(styles.features, { [styles.visible]: isVisible })}>
      <div className={styles.containerDescription}>
        <div className={styles.Edicolab}>
          <h2 className={styles.descriptionTitle}>What's Edicolab?</h2>
          <h4 className={styles.description}>
          Edicolab is a platform for collaborative editing and annotating historical documents, designed for researchers and historians. It enables transcription, tagging, and analysis of texts using custom TEI-based tags, enhancing document accessibility and improving tag validation for greater accuracy.          </h4>
        </div>
        <img className={styles.image} src='https://deti-iforal.ua.pt/_app/immutable/assets/auth-image-2-5cc28bdf.png' alt='Edicolab'></img>
      </div>
    </div>
  );
}
