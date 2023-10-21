'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css'
import LocationPin from '@/app/assets/footer/locationPinFooter.svg'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'
import { useRouter } from 'next/navigation';

const Footer = () => {
    const Router = useRouter();
    return (
        <section id={styles.footer} style={{ flexDirection: 'column', rowGap: 50, }}>
            <article id={styles.firstDiv}>
                <div>
                    <p className={styles.p}>The Only Limit is imagination -</p>
                    <p className={styles.p}>We go beyond that</p>
                </div>
                <button id={styles.btn}>
                    <a href={'tel:8884031017'}>
                        Book a Call &gt;&gt;
                    </a>
                </button>
            </article>
            <article id={styles.secondDiv}>
                <div>
                    <h3>You can find us at</h3>
                    <p>contact@devot.ai</p>
                    <div style={{ display: 'flex', width: '100%', gap: 35 }}>
                        <AiFillLinkedin size={35} onClick={() => Router.push('https://www.linkedin.com/company/devot-ai/')} />
                        <AiFillGithub size={35} />
                        <AiFillTwitterCircle size={35} />
                    </div>
                    <figure>

                    </figure>
                </div>
                <div>
                    <ul className={styles.lists}>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Products</li>
                        <li>Case Studies</li>
                    </ul>
                </div>
                <div>
                    <ul className={styles.lists}>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>
                <div>
                    <ul className={styles.lists}>
                        <li><Image src={LocationPin} />&nbsp;&nbsp;Mumbai</li>
                        <li><Image src={LocationPin} />&nbsp;&nbsp;Kanpur</li>
                        <li><Image src={LocationPin} />&nbsp;&nbsp;Delhi</li>
                    </ul>
                </div>
            </article>
            <article style={{ color: 'white', padding: '80px 0' }}>
                <strong style={{ fontWeight: 900, fontSize: '1.6em', display: 'block' }}>DEVOT AI</strong>
                <span>Copyright &copy; 2023 Devot AI</span>
            </article>
        </section>
    )
}

export default Footer;