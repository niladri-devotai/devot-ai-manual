'use client'
import { useRef } from 'react';
import Image from 'next/image';
import styles from './Section_3.module.css'
import { Case_Study_1, Case_Study_2, Case_Study_3 } from '@/app/assets/case_study'
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'
import { useRouter } from 'next/navigation';


const Section_3 = () => {
    const router = useRouter();
    const data = [{ img: Case_Study_1, desc: 'lorem ipsum', link: 'Read More' },
    { img: Case_Study_2, desc: 'lorem ipsum', link: 'Read More' },
    { img: Case_Study_3, desc: 'lorem ipsum', link: 'Read More' }];
    const horizontalRef = useRef();

    function moveToLeft() {
        horizontalRef.current.scrollLeft -= (horizontalRef.current.scrollWidth / data.length)
    }
    function moveRight() {
        horizontalRef.current.scrollLeft += horizontalRef.current.scrollWidth / data.length
    }

    return (
        <section style={{ flexDirection: 'column', height: 'max-content' }}>
            <div id={styles.div}>
                <span id={styles.span}>Our Success Stories</span>
                <button id={styles.btn}>See All Case Studies &gt;&gt;</button>
            </div>
            <div id={styles.div2}>
                <BsFillCaretLeftFill size={50} color={'rgb(0,0,55)'} cursor={'pointer'}
                    onClick={moveToLeft} />
                <div id={styles.cardContainer} ref={horizontalRef}>
                    {data?.map((item, i) => (
                        <article key={i} id={styles.cards} onClick={() => router.push(`/components/CaseStudiesDetailPage/${item?.link}`)}>
                            <Image src={item?.img} alt={"case studies material"} className={styles.images} />
                            <p className={styles.p}>{item.desc.length > 50 ? item.desc.slice(0, 120) + '...' : item.desc}</p>
                            <span className={styles.readMore}>{item.link}<em className={styles.em}>&nbsp;&gt;&gt;</em></span>
                        </article>
                    ))}
                </div>
                <BsFillCaretRightFill size={50} color={'rgb(0,0,55)'} cursor={'pointer'}
                    onClick={moveRight} />
            </div>
            <div id={styles.div2}>
                { }
            </div>
        </section>
    )
}

export default Section_3