'use client'
import Image from 'next/image';
import styles from './Companies.module.css';
import Bajaj from '../../assets/bajaj.png'
import Marquee from "react-fast-marquee";

const Section_4 = () => {
    return (
        <section style={{ flexDirection: 'column', rowGap: 25, height: 'max-content', margin: '100px 0' }}>
            <span id={styles.heading}>Our Employees Come From Places Like :</span>
            <Marquee
                style={{ height: 'max-content', width: '100%' }}
                play={true}
                speed={250}
                loop={0}
                pauseOnHover={true}
                direction='left'>
                <Image src={Bajaj} alt={'Bajaj'} className={styles.images} />
                <Image src={Bajaj} alt={'Bajaj'} className={styles.images} />
                <Image src={Bajaj} alt={'Bajaj'} className={styles.images} />
                <Image src={Bajaj} alt={'Bajaj'} className={styles.images} />
                <Image src={Bajaj} alt={'Bajaj'} className={styles.images} />
            </Marquee>
        </section>
    )
}

export default Section_4