import { motion, useInView, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

export function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 1.5,
  });
  
  const display = useTransform(spring, (current) => {
    // Format number with commas
    return prefix + Math.round(current).toLocaleString() + suffix;
  });

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
