'use client';
import { MotionButton } from "@/exports/global-methods";
import { JSX } from "react";
import styles from "@/app/done/page.module.css";

export default function Btn(): JSX.Element {
    const sound: HTMLAudioElement = new Audio("/audio/happy_birthday_edit.mp3");
    function playSound(): void {
        sound.play().catch(err => console.error("Audio Error:\n", err));
    }

    return (
        <MotionButton onClick={playSound} className={styles.btn}>دوس هنا</MotionButton>
    )
}