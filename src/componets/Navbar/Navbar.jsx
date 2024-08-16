import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={
                        menuOpen 
                            ? getImageUrl("nav/closeIcon.png")
                            : getImageUrl("nav/menuIcon.png")
                            } 
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="https://docs.google.com/document/d/1F-vcfHeDqVuQlSDKeNpNCurZHeI5bgQKY8p4Qsolw2E/edit" target="_blank">Resume</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/busolaelumeze" target="_blank">Linkedin</a>
                    </li>
                    <li>
                        <a href="https://github.com/busolae" target="_blank">Github</a>
                    </li>
                    <li>
                        <a href="https://embracingmee.blogspot.com/" target="_blank">Blog</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};