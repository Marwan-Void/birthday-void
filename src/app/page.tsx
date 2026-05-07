import { JSX } from "react";
import styles from  "./page.module.css";
import { itemVariants, MotionDiv, MotionH1, MotionMain, parentVariants } from "../exports/global-methods";
import SendBtn from "@/components/SendBtn";

export default function Home(): JSX.Element {
  return (
    <MotionDiv className={styles.page}>
      <MotionMain
        className={styles.main}
        variants={parentVariants}  
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <MotionDiv className={styles.box} variants={itemVariants}>
          <MotionH1 className={styles.heading}>ادخل اسمك</MotionH1>
          <SendBtn dest="done"/>
        </MotionDiv>
      </MotionMain>
    </MotionDiv>
  );
}
