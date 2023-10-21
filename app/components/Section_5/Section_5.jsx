'use client'
import { useEffect, useRef, useState } from 'react';
import styles from './Section_5.module.css';
import { BsFillCaretLeftFill, BsFillCaretRightFill, BsBoxArrowUpRight } from 'react-icons/bs';
import Img from '../../assets/img2.jpg'
import Image from 'next/image';
import { motion } from 'framer-motion';


const variants = {
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeOut',
            duration: 0.3,
        },
    },
    hide: {
        y: -20,
        opacity: 0,
    },
};

const Section_5 = () => {
    const [current, setCurrent] = useState(() => { });
    const [index, setIndex] = useState(() => 0);
    const data = [{ img: Img, heading: 'Image Recognition and Computer Vision' },
    { img: Img, heading: 'Natural Language Processing' },
    { img: Img, heading: 'Recommendation System' },
    { img: Img, heading: 'Operation Research' },
    { img: Img, heading: 'Personalized Marketing' },
    { img: Img, heading: 'Web Development' }];

    useEffect(() => {
        setCurrent(data[index])
    }, [index]);

    const SaasContainerRef = useRef();

    function moveToLeft() {
        if (!index) return;
        setIndex(prev => prev - 1)
    }
    function moveRight() {
        if (index === data.length - 1) return;
        setIndex(prev => prev + 1);
    }

    return (
        <section style={{ flexDirection: 'column', rowGap: 25 }}>
            <div id={styles.div}>
                <span id={styles.span}>Our SaaS Products</span>
                <button id={styles.btn}>Know More &gt;&gt;</button>
            </div>
            <div id={styles.div2}>
                <BsFillCaretLeftFill size={50} color={'rgb(5,0,55)'} cursor={'pointer'}
                    onClick={moveToLeft} />
                <div id={styles.cardContainer} ref={SaasContainerRef}>
                    <motion.article
                        animate={{ scale: current ? 1 : 0.8 }}
                        className={styles.cards}>{current?.heading}</motion.article>
                </div>
                <BsFillCaretRightFill size={50} color={'rgb(0,0,55)'} cursor={'pointer'}
                    onClick={moveRight} />
            </div>
        </section>
    )
}

export default Section_5