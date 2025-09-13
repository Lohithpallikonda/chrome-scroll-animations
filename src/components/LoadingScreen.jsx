import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function LoadingScreen({ onComplete }) {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([logoRef.current, textRef.current], { autoAlpha: 0, scale: 0.8 });

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(loaderRef.current, {
            autoAlpha: 0,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete
          });
        }
      });

      tl.to([logoRef.current, textRef.current], {
        autoAlpha: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1
      })
      .to({}, { duration: 0.8 }) // pause
      .to([logoRef.current, textRef.current], {
        autoAlpha: 0,
        scale: 0.9,
        duration: 0.4,
        ease: "power2.in"
      });
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="loading-screen">
      <div className="loading-screen__content">
        <div ref={logoRef} className="loading-screen__logo">
          <div className="chrome-logo">
            <div className="chrome-logo__center"></div>
            <div className="chrome-logo__ring chrome-logo__ring--red"></div>
            <div className="chrome-logo__ring chrome-logo__ring--yellow"></div>
            <div className="chrome-logo__ring chrome-logo__ring--green"></div>
          </div>
        </div>
        <p ref={textRef} className="loading-screen__text">Huemn Interactive</p>
      </div>
    </div>
  );
}