// AF IMPORTS START
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// AF ANIMATIONS SETUP START
const useScenesTimeline = ({
  rootRef,
  stageRef,
  s1TitleRef,
  s1BrowserRef,
  s1PickerRef,
  s2TitleRef,
  s2LogosRefs,
  s3TitleRef,
  s3TabsRefs,
  s4TitleRef,
  s4CardsRefs,
}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Normalize wheel/touch scrolling for smoother scrubbing across devices
    if (typeof ScrollTrigger.normalizeScroll === 'function') {
      ScrollTrigger.normalizeScroll(true);
    }

    const ctx = gsap.context(() => {
      // Initial states
      gsap.set([s1TitleRef.current, s1PickerRef.current], { autoAlpha: 0, y: 40 });
      gsap.set(s1BrowserRef.current, { autoAlpha: 0, y: 40, scale: 0.92 });
      gsap.set(s2TitleRef.current, { autoAlpha: 0, y: 40 });
      gsap.set(s2LogosRefs.map((r) => r.current), { autoAlpha: 0, y: 30, scale: 0.95 });
      gsap.set(s3TitleRef.current, { autoAlpha: 0, y: 40 });
      gsap.set(s3TabsRefs.map((r) => r.current), { autoAlpha: 0, y: 30, scale: 0.98 });
      gsap.set(s4TitleRef.current, { autoAlpha: 0, y: 40 });
      gsap.set(s4CardsRefs.map((r) => r.current), { autoAlpha: 0, y: 30, scale: 0.98 });

      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8, // slightly higher scrub for smoother feel
          invalidateOnRefresh: true,
        },
      });

      // Scene 1 — enter
      tl.add('scene1In')
        .to(s1TitleRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, 'scene1In')
        .to(
          s1BrowserRef.current,
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.9 },
          'scene1In+=0.1'
        )
        .to(s1PickerRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 'scene1In+=0.2');

      // Scene 1 — slight drift for life
      tl.to(s1BrowserRef.current, { y: -30, duration: 0.8, ease: 'none' });

      // Transition to Scene 2
      tl.add('scene1Out')
        .to([s1TitleRef.current, s1PickerRef.current], { autoAlpha: 0, y: -30, duration: 0.5 }, 'scene1Out')
        .to(s1BrowserRef.current, { autoAlpha: 0, scale: 0.96, duration: 0.6 }, 'scene1Out+=0.1');

      // Scene 2 — enter
      tl.add('scene2In')
        .to(s2TitleRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, 'scene2In')
        .to(
          s2LogosRefs.map((r) => r.current),
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08 },
          'scene2In+=0.1'
        );

      // Transition to Scene 3
      tl.add('scene2Out')
        .to([s2TitleRef.current, ...s2LogosRefs.map((r) => r.current)], {
          autoAlpha: 0,
          y: -30,
          duration: 0.5,
          stagger: 0.05,
        }, 'scene2Out');

      // Scene 3 — enter
      tl.add('scene3In')
        .to(s3TitleRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, 'scene3In')
        .to(
          s3TabsRefs.map((r) => r.current),
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08 },
          'scene3In+=0.1'
        );

      // Transition to Scene 4
      tl.add('scene3Out')
        .to([s3TitleRef.current, ...s3TabsRefs.map((r) => r.current)], {
          autoAlpha: 0,
          y: -30,
          duration: 0.5,
          stagger: 0.05,
        }, 'scene3Out');

      // Scene 4 — enter
      tl.add('scene4In')
        .to(s4TitleRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, 'scene4In')
        .to(
          s4CardsRefs.map((r) => r.current),
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1 },
          'scene4In+=0.1'
        );
    }, stageRef);

    return () => ctx.revert();
  }, [
    rootRef,
    stageRef,
    s1TitleRef,
    s1BrowserRef,
    s1PickerRef,
    s2TitleRef,
    s2LogosRefs,
    s3TitleRef,
    s3TabsRefs,
    s4TitleRef,
    s4CardsRefs,
  ]);
};

// AF MARKUP START
export default function AnimatedFeatures() {
  const rootRef = useRef(null);
  const stageRef = useRef(null);

  // Scene 1 refs
  const s1TitleRef = useRef(null);
  const s1BrowserRef = useRef(null);
  const s1PickerRef = useRef(null);

  // Scene 2 refs
  const s2TitleRef = useRef(null);
  const s2Logo1 = useRef(null);
  const s2Logo2 = useRef(null);
  const s2Logo3 = useRef(null);
  const s2Logo4 = useRef(null);

  // Scene 3 refs
  const s3TitleRef = useRef(null);
  const s3Tab1 = useRef(null);
  const s3Tab2 = useRef(null);
  const s3Tab3 = useRef(null);

  // Scene 4 refs
  const s4TitleRef = useRef(null);
  const s4Card1 = useRef(null);
  const s4Card2 = useRef(null);

  useScenesTimeline({
    rootRef,
    stageRef,
    s1TitleRef,
    s1BrowserRef,
    s1PickerRef,
    s2TitleRef,
    s2LogosRefs: [s2Logo1, s2Logo2, s2Logo3, s2Logo4],
    s3TitleRef,
    s3TabsRefs: [s3Tab1, s3Tab2, s3Tab3],
    s4TitleRef,
    s4CardsRefs: [s4Card1, s4Card2],
  });

  return (
    <section ref={rootRef} className="af" aria-label="Feature animations">
      <div className="af__pin" role="group" aria-label="Animation stage">
        <div ref={stageRef} className="af__stage">
          {/* Scene 1 */}
          <div className="af__scene af__s1" aria-label="Scene 1: The browser built to be yours">
            <h3 ref={s1TitleRef} className="af__s1-title">The browser built to be yours</h3>

            <div ref={s1BrowserRef} className="af__browser" role="img" aria-label="Browser mockup">
              <div className="af__browser-toolbar">
                <span className="af__btn af__btn--red" aria-hidden="true" />
                <span className="af__btn af__btn--yellow" aria-hidden="true" />
                <span className="af__btn af__btn--green" aria-hidden="true" />
                <div className="af__address" aria-hidden="true" />
              </div>
              <div className="af__browser-content" aria-hidden="true" />
            </div>

            <div ref={s1PickerRef} className="af__picker" aria-label="Color picker">
              <button className="af__swatch" style={{ background: '#1a73e8' }} aria-label="Blue" />
              <button className="af__swatch" style={{ background: '#34a853' }} aria-label="Green" />
              <button className="af__swatch" style={{ background: '#fbbc05' }} aria-label="Yellow" />
              <button className="af__swatch" style={{ background: '#ea4335' }} aria-label="Red" />
            </div>
          </div>

          {/* Scene 2 */}
          <div className="af__scene af__s2" aria-label="Scene 2: Extensions">
            <h3 ref={s2TitleRef} className="af__s2-title">Extensions</h3>
            <div className="af__logo-grid" role="list">
              <div ref={s2Logo1} className="af__logo" role="listitem" aria-label="Translate">
                <span className="af__logo-dot" style={{ background: '#1a73e8' }} />
                <span className="af__logo-text">Translate</span>
              </div>
              <div ref={s2Logo2} className="af__logo" role="listitem" aria-label="Arts & Culture">
                <span className="af__logo-dot" style={{ background: '#34a853' }} />
                <span className="af__logo-text">Arts & Culture</span>
              </div>
              <div ref={s2Logo3} className="af__logo" role="listitem" aria-label="Dark Reader">
                <span className="af__logo-dot" style={{ background: '#fbbc05' }} />
                <span className="af__logo-text">Dark Reader</span>
              </div>
              <div ref={s2Logo4} className="af__logo" role="listitem" aria-label="Grammarly">
                <span className="af__logo-dot" style={{ background: '#ea4335' }} />
                <span className="af__logo-text">Grammarly</span>
              </div>
            </div>
          </div>

          {/* Scene 3 */}
          <div className="af__scene af__s3" aria-label="Scene 3: Take control of your tabs">
            <h3 ref={s3TitleRef} className="af__s3-title">Take control of your tabs</h3>
            <div className="af__tabs" role="list">
              <div ref={s3Tab1} className="af__tab" role="listitem">
                <span className="af__tab-dot" style={{ background: '#1a73e8' }} />
                <span className="af__tab-title">Project Alpha</span>
                <span className="af__tab-count">5</span>
              </div>
              <div ref={s3Tab2} className="af__tab" role="listitem">
                <span className="af__tab-dot" style={{ background: '#34a853' }} />
                <span className="af__tab-title">Portfolio</span>
                <span className="af__tab-count">3</span>
              </div>
              <div ref={s3Tab3} className="af__tab" role="listitem">
                <span className="af__tab-dot" style={{ background: '#fbbc05' }} />
                <span className="af__tab-title">Research</span>
                <span className="af__tab-count">7</span>
              </div>
            </div>
          </div>

          {/* Scene 4 */}
          <div className="af__scene af__s4" aria-label="Scene 4: Helpful features built-in">
            <h3 ref={s4TitleRef} className="af__s4-title">Helpful features built‑in</h3>
            <div className="af__features" role="list">
              <div ref={s4Card1} className="af__feature-card" role="listitem">
                <div className="af__feature-icon" aria-hidden="true">
                  <span className="af__key-head" />
                  <span className="af__key-body" />
                </div>
                <div className="af__feature-content">
                  <div className="af__feature-title">Password Manager</div>
                  <div className="af__feature-desc">Save and autofill passwords securely.</div>
                </div>
              </div>

              <div ref={s4Card2} className="af__feature-card" role="listitem">
                <div className="af__feature-icon" aria-hidden="true">
                  <span className="af__shield" />
                  <span className="af__check" />
                </div>
                <div className="af__feature-content">
                  <div className="af__feature-title">Safety Check</div>
                  <div className="af__feature-desc">Alerts for compromised passwords & harmful extensions.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
