// HERO IMPORTS START
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// HERO JSX START
export default function HeroSection() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, subtitleRef.current], { autoAlpha: 0, y: 30 });

      gsap.timeline()
        .to(titleRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        })
        .to(subtitleRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <h2 ref={titleRef} id="hero-title" className="hero__title">
          The browser built to be yours
        </h2>
        <p ref={subtitleRef} className="hero__subtitle">
          Scroll to explore features — smooth, sticky, and delightful.
        </p>
      </div>
    </section>
  );
}
