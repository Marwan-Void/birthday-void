'use client';
import { motion } from "framer-motion";
import Link from "next/link";

export const MotionLink = motion(Link);
export const MotionDiv = motion.div;
export const MotionMain = motion.main;
export const MotionH1 = motion.h1;
export const MotionInput = motion.input;

export const parentVariants: {
  hidden: {
    opacity: number,
  },
  visible: {
    opacity: number,
    transition: {
      staggerChildren: number,
    },
  },
} = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};
export const itemVariants: {
  hidden: {
    opacity: number,
    y: number,
  },
  visible: {
    opacity: number,
    y: number,
    transition: {
      duration: number,
    }
  },
} = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};