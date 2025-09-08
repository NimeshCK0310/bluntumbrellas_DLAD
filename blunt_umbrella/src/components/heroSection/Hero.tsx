"use client";
import { animated, useTrail, SpringValue } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css"; 

function HeroImage() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
   
    setPlay(true);
  }, []);

  const text = "Woodland  Camo".split(""); 
  const trail = useTrail(text.length, {
    from: { opacity: 0, y: 50 },
    to: { opacity: play ? 1 : 0, y: play ? 0 : 50 },
    config: { tension: 200, friction: 18 },
    reverse: false,
  });

  return (
    <div className={styles.heroContainer}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>
          {trail.map(
            (
              style: { opacity: SpringValue<number>; y: SpringValue<number> },
              index: number
            ) => (
              <animated.span
                key={index}
                style={{
                  opacity: style.opacity,
                  transform: style.y.to((y: number) => `translateY(${y}px)`),
                  display: "inline-block",
                }}
              >
                {text[index] === " " ? "\u00A0" : text[index]}
              </animated.span>
            )
          )}
        </h1>
        <div className={styles.leftContent}>
          <p className={styles.description}>
            A universal print, camouflage has transcended its stealth roots to
            become a classic emblem of style. The iconic blend of greens and
            blacks seamlessly integrates into everyday fashion.
          </p>
          <a href="/products/woodland-camo-classic" className={styles.cta}>
            $114.00
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;