'use client';
import { itemVariants, MotionDiv, MotionInput, MotionLink } from "@/exports/global-methods";
import { JSX, useRef, useState } from "react";
import styles from "@/app/page.module.css";

export default function SendBtn({dest}: {dest: string}): JSX.Element {
    const [txt, setTxt] = useState<string>();
    const inp = useRef<HTMLInputElement>(null);

    return (
        <MotionDiv className={styles.inp_box} variants={itemVariants}>
            <MotionInput className={styles.inp} ref={inp} onInput={() => {setTxt(inp.current?.value)}} variants={itemVariants}/>
            <MotionLink href={`${dest}?name=${txt}`} className={styles.submit} variants={itemVariants}>
                تسجيل
            </MotionLink>
        </MotionDiv>
    );
}