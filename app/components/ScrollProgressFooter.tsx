'use client';
import React, { useEffect, useState } from 'react';

interface ScrollProgressFooterProps {
  sectionId: string;
  expandedSections: Set<string>;
  setExpandedSections: React.Dispatch<React.SetStateAction<Set<string>>>;
}

const ScrollProgressFooter: React.FC<ScrollProgressFooterProps> = ({ sectionId, expandedSections, setExpandedSections }) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setExpandedSections((prev) => new Set(prev).add(sectionId)); // Mark this section as expanded
          }
        });
      },
      { threshold: 0.1 } // Adjust this value as needed
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [sectionId, setExpandedSections]);

  useEffect(() => {
    if (isVisible) {
      const handleScroll = () => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const scrollPosition = window.scrollY + window.innerHeight;

          if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const scrolled = ((scrollPosition - sectionTop) / sectionHeight) * 100;
            setScrollHeight(scrolled);
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isVisible, sectionId]);

  return (
    <>
    <div className={`w-[1px] bg-gradient-to-b from-[rgba(255,255,255,.5)] to-transparent ${expandedSections.has(sectionId) ? 'expandFooter' : ''}`}>
    </div>
    </>
  );
};

export default ScrollProgressFooter;
