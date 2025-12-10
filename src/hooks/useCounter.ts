"use client";

import { useEffect, useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

interface UseCounterOptions {
  duration?: number;
  start?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

/**
 * Hook pour animer un compteur numérique
 * S'anime automatiquement quand l'élément devient visible
 */
export function useCounter(
  targetValue: number,
  options: UseCounterOptions = {}
) {
  const {
    duration = 2000,
    start = 0,
    decimals = 0,
    suffix = "",
    prefix = "",
  } = options;

  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const startValue = start;
    const endValue = targetValue;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (endValue - startValue) * easeOut;

      setCount(Number(currentValue.toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetValue, duration, start, decimals]);

  const formattedValue = `${prefix}${count}${suffix}`;

  return { ref, count, formattedValue, isVisible };
}

