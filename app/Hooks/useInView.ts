"use client";
import { useState, useEffect } from "react";

export function useInView(sectionId: string) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [sectionId]);

  return isInView;
}