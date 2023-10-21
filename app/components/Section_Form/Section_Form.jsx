import styles from './Section_Form.module.css';
import Map from '@/app/assets/section_2/map_of_india.svg';
import Image from 'next/image';

const Section_Form = () => {
    //list of services of our company
    const services = ['', 1, 2, 3, 4, 5, 6]
    return (
        <section style={{ flexDirection: 'column', rowGap: 50, height: 'max-content' }}>
            <span id={styles.span}>Get AI & tech solution for businesses</span>
            <div id={styles.div2}>
                <article className={styles.form_and_map}>
                    <p>Don&apos;t know what to start with?</p>
                    <span style={{ fontSize: '1.5em', color: '#6200EE', fontWeight: 600 }}>Get a Quota from us - for free!</span>
                    <form id={styles.form}>
                        <label>Your Full Name</label>
                        <input className={styles.inputs} placeholder='Enter Name' />
                        <label>E-mail ID</label>
                        <input className={styles.inputs} placeholder='yourname@example.com' />
                        <label>Contact Number</label>
                        <input className={styles.inputs} placeholder='0123456789' />
                        <label>Service</label>
                        <select id={styles.select} className={styles.inputs}>
                            {services.map((item, i) => <option key={i} value={item}>{item}</option>)}
                        </select>
                        <span style={{
                            fontSize: '0.8em', position: 'relative', transform: 'translateY(-50%)', color: 'grey',
                            fontWeight: 900
                        }}>Select the service you want to avail</span>
                        <label style={{ marginTop: 15 }}>Your Message For Us</label>
                        <textarea id={styles.textarea} className={styles.inputs} />


                        <button id={styles.btn}>Get your Free Quote&nbsp;&gt;&gt;</button>
                    </form>
                </article>
                <article className={styles.form_and_map}>
                    <span>Not a fan of forms? We get it</span>
                    <p id={styles.p}><span style={{ marginRight: 10 }}>You&nbsp;can&nbsp;reach&nbsp;out&nbsp;at&nbsp;<em style={{ color: 'rgb(33,0,55)', fontStyle: 'normal', fontWeight: 900 }}>contact@devot.ai</em></span>
                        <span>Or&nbsp;give&nbsp;us&nbsp;a&nbsp;call&nbsp;at&nbsp;<em style={{ color: 'rgb(33,0,55)', fontStyle: 'normal', fontWeight: 900 }}>+91&nbsp;9876543210</em></span>
                    </p>
                    <div>
                        <p>We will also be happy to meet you at:</p>
                        <Image src={Map} alt={'map'} id={styles.image} />
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Section_Form