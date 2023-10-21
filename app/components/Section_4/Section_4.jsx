'use client'
import Image from 'next/image';
import styles from './Section_4.module.css';
import Bajaj from '../../assets/bajaj.png'
import Marquee from "react-fast-marquee";

const Section_4 = () => {
    return (
        <section style={{ flexDirection: 'column', rowGap: 25, height: 'max-content', margin: '50px 0' }}>
            <span id={styles.heading}>They Trusted Us - We Deliver</span>
            <Marquee
                style={{ height: 'max-content', width: '100%' }}
                play={true}
                speed={250}
                loop={0}
                gradient={true}
                gradientColor={'white'}
                gradientWidth={200}
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