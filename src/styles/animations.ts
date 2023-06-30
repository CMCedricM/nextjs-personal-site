import { type Variants } from "framer-motion";

export const variants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5 },
  },
};

export const images: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const menuBar: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    scale: [1, 1.5, 1],
    transition: {
      duration: 0.5,
    },
  },
};
