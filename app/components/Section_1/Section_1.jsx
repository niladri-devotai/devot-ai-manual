import styles from './Section_1.module.css';

const Section_1 = ({ preHeading, mainHeading, spanPurple, postHeading, noBtn }) => {
    return (
        <section id={styles.section}>
            <code id={styles.code}>
                <h2 style={{ fontFamily: 'Saira', fontWeight: 400, color: '#9FAAB5' }}>{preHeading}</h2>
                <h1 id={styles.h1}> {mainHeading} <em id={styles.em}>{spanPurple}</em></h1>
                <p id={styles.p}> {postHeading}</p>
                {noBtn && <div id={styles.div}>
                    <button id={styles.btn1} className={styles.btn}>Schedule a Call With Us &gt;&gt;</button>
                    <button id={styles.btn2} className={styles.btn}>Get a Free Quota</button>
                </div>}
            </code>
        </section>
    )
}

export default Section_1