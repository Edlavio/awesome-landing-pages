export const navVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      type: "spring",
      duration: 0.3,
      x: { duration: 0.5 },
    },
  },
  closed: { opacity: 0, x: "50%" },
};

export const navItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { y: { duration: 0.5 }, delay: 0.3 },
  },
  closed: { opacity: 0, y: "20%" },
};

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const slideIn = (direction, type, duration, delay) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type, duration, delay, ease: "easeInOut" },
  },
});

export const fadeIn = (direction, type, duration, delay) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? 100 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type, duration, delay, ease: "easeInOut" },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
