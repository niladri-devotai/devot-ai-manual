import Image from 'next/image';
import styles from './Section_7.module.css';
import { EndSolutions, experiencedDevelopers, increasedRoi, modernSolutions, Support, plugAutomation } from '@/app/assets/AI_Section';

const Section_7 = () => {
    const data = [{ img: EndSolutions, heading: 'End to End AI Solution', desc: 'Artificial Intelligence (AI) has emerged as a game-changing technology with a potential to revolutionize industries across the board.' },
    { img: plugAutomation, heading: 'Plug and Play Automation', desc: 'Artificial Intelligence (AI) has emerged as a game-changing technology with a potential to revolutionize industries across the board.' },
    { img: experiencedDevelopers, heading: 'Experienced Developers', desc: 'Artificial Intelligence (AI) has emerged as a game-changing technology with a potential to revolutionize industries across the board.' },
    { img: increasedRoi, heading: 'Increased Startup ROI', desc: 'Artificial Intelligence (AI) has emerged as a game-changing technology with a potential to revolutionize industries across the board.' },
    { img: modernSolutions, heading: 'End to End AI Solution', desc: 'Artificial Intelligence (AI) has emerged as a game-changing technology with a potential to revolutionize industries across the board.' },
    { img: Support, heading: 'End to End AI Solution', desc: 'Artificial Intelligence (AI) has emerged as a game-changing technology with a potential to revolutionize industries across the board.' },
    ]
    return (
        <section style={{ flexDirection: 'column', rowGap: 50, height: 'max-content' }}>
            <span style={{ fontSize: '40px', fontWeight: 600, color: '#334C65' }}>Why Choose Us?</span>
            <div id={styles.container}>
                {data?.map((item, i) => (
                    <article key={i} className={styles.article}>
                        <Image src={item?.img} alt={item?.heading} width={80} />
                        <h2>{item?.heading}</h2>
                        <p style={{ color: 'grey', fontWeight: 400 }}>{item?.desc}</p>
                    </article>
                ))}

            </div>
        </section>
    )
}

export default Section_7