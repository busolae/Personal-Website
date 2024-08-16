import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
         <div className={styles.content}>
            <h1 className={styles.title}>👋Hiya!</h1>
            <p className={styles.description}>I'm Busola, a computer science student at Toronto Metropolitan University. 
                What really gets me excited is the endless possibilities within technology and how it continuously evolves.
                <br/>
                <br/>
                Fun fact: I have a blog where I blend my personal struggles and growth with my passion for technology.
                I'm also excited to expand my blog to include posts on tech trends and programming tips in the future. P.S. if you can't tell
                I love pink :)
            </p>
         </div>
         <img src={getImageUrl("hero/heroImage.png")} alt="Cartoon image representing me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
    </section>
    );
};