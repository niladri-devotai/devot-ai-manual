'use client'
import Link from 'next/link';
import styles from './Navigation.module.css';
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi'
import { useEffect, useState } from 'react';

const NavListItems = ['Services', 'Products', 'Case Studies', 'About us'];
const Navigation = () => {
    const [toggleMenu, setToggleMenu] = useState(() => false);
    const [width, setWidth] = useState(() => false);

    useEffect(() => {
        setWidth(window.innerWidth > 1200 ? true : false)
    })

    return (

        <motion.header
            initial={{ y: -55 }}
            animate={{ y: 0 }}
            className={styles.header}>
            <nav className={styles.nav}>
                <span>Devot AI</span>
                <GiHamburgerMenu
                    onClick={() => setToggleMenu(prev => !prev)}
                    id={styles.hamburgerMenu}
                />
                {(width || toggleMenu) && <div
                    id={styles.section}>
                    <ul id={styles.ul}>
                        {NavListItems?.map((item, i) => <Link onClick={() => setToggleMenu(prev => !prev)}
                            className={styles.li} key={i} href={`/${item}`}>{item}</Link>)}
                    </ul>
                    <button id={styles.btn}>
                        <a href={'tel:8884031017'}>
                            Book a Call&nbsp;&gt;&gt;
                        </a>
                    </button>
                </div>}
            </nav>
        </motion.header>

    )
}

export default Navigation