'use client';
import React, { useEffect } from 'react';

const ScrollBySteps = () => {
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault(); // Prevent default scrolling behavior

      const threshold = 5; // Adjust this value to suit your needs
      if (Math.abs(event.deltaY) < threshold) return; // Ignore small scrolls

      const sections = document.querySelectorAll<HTMLElement>('section');
      const scrollPosition = window.scrollY;
      let targetSection: HTMLElement | null = null;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - sectionHeight / 2 &&
          scrollPosition < sectionTop + sectionHeight / 2
        ) {
          if (event.deltaY > 0) {
            // Scrolling down
            targetSection = sections[index + 1] || null;
          } else {
            // Scrolling up
            targetSection = sections[index - 1] || null;
          }
        }
      });

      if (targetSection) {
        window.scrollTo({
          top: (targetSection as HTMLElement).offsetTop,
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return null;
};

export default ScrollBySteps;
