import { JSX } from "react";
import { itemVariants, MotionDiv, MotionH1, MotionLink, MotionMain, parentVariants } from "../../exports/global-methods";
import styles from "./page.module.css";

// const song = new Audio("../../../happy_birthday_edit.mp3");
export default async function Done({ searchParams }: {searchParams: Promise<{ [key: string]: string | string[] | undefined }>}): Promise<JSX.Element> {
    const params = await searchParams;
    const getName: (string | undefined) = params.name as (string | undefined);
    // song.play();
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
                <MotionDiv className={styles.info_box} variants={itemVariants}>
                    <MotionH1 className={styles.info} variants={itemVariants}>كل سنة وحضرتك طيب يا {getName}</MotionH1>
                    <MotionH1 className={styles.info} variants={itemVariants}>اتمني لحضرتك يوم سعيد</MotionH1>
                    <MotionH1 className={styles.info} variants={itemVariants}>دي هدية مني لحضرتك</MotionH1>
                    <MotionH1 className={styles.info} variants={itemVariants}>اتمني الهدية تعجب حضرتك</MotionH1>
                    <MotionH1 className={styles.info} variants={itemVariants}>المرسل: مروان</MotionH1>
                </MotionDiv>
                <MotionDiv className={styles.back_btn_div} variants={itemVariants}>
                    <MotionLink href="../" className={styles.back} variants={itemVariants}>العودة</MotionLink>
                </MotionDiv>
            </MotionMain>
        </MotionDiv>
    );
}