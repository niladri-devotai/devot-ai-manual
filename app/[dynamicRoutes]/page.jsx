import Image from 'next/image';
import { Section_1 } from '../components';
import styles from './page.module.css';
import { Image_Recog } from '../assets/section_2';
import Link from 'next/link';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
const page = () => {

    const caseStudies = [{
        img: Image_Recog, id: '', desc: `Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. 
    In, sapiente illo delectus culpa autem nesciunt error 
    nostrum amet quidem magnam esse, veniam dolores animi dolorem minus 
    fuga, eius sequi blanditiis?
    `},
    {
        img: Image_Recog, id: '', desc: `Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. 
    In, sapiente illo delectus culpa autem nesciunt error 
    nostrum amet quidem magnam esse, veniam dolores animi dolorem minus 
    fuga, eius sequi blanditiis?
    `},
    {
        img: Image_Recog, id: '', desc: `Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. 
    In, sapiente illo delectus culpa autem nesciunt error 
    nostrum amet quidem magnam esse, veniam dolores animi dolorem minus 
    fuga, eius sequi blanditiis?
    `},
    {
        img: Image_Recog, id: '', desc: `Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. 
    In, sapiente illo delectus culpa autem nesciunt error 
    nostrum amet quidem magnam esse, veniam dolores animi dolorem minus 
    fuga, eius sequi blanditiis?
    `},
    {
        img: Image_Recog, id: '', desc: `Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. 
    In, sapiente illo delectus culpa autem nesciunt error 
    nostrum amet quidem magnam esse, veniam dolores animi dolorem minus 
    fuga, eius sequi blanditiis?
    `},
    {
        img: Image_Recog, id: '', desc: `Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. 
    In, sapiente illo delectus culpa autem nesciunt error 
    nostrum amet quidem magnam esse, veniam dolores animi dolorem minus 
    fuga, eius sequi blanditiis?
    `},
    {
        img: Image_Recog, id: '', desc: `Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. 
    In, sapiente illo delectus culpa autem nesciunt error 
    nostrum amet quidem magnam esse, veniam dolores animi dolorem minus 
    fuga, eius sequi blanditiis?
    `},
    {
        img: Image_Recog, id: '', desc: `Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. 
    In, sapiente illo delectus culpa autem nesciunt error 
    nostrum amet quidem magnam esse, veniam dolores animi dolorem minus 
    fuga, eius sequi blanditiis?
    `},
    {
        img: Image_Recog, id: '', desc: `Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. 
    In, sapiente illo delectus culpa autem nesciunt error 
    nostrum amet quidem magnam esse, veniam dolores animi dolorem minus 
    fuga, eius sequi blanditiis?
    `},
    {
        img: Image_Recog, id: '', desc: `Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. 
    In, sapiente illo delectus culpa autem nesciunt error 
    nostrum amet quidem magnam esse, veniam dolores animi dolorem minus 
    fuga, eius sequi blanditiis?
    `},
    {
        img: Image_Recog, id: '', desc: `Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. 
    In, sapiente illo delectus culpa autem nesciunt error 
    nostrum amet quidem magnam esse, veniam dolores animi dolorem minus 
    fuga, eius sequi blanditiis?
    `}]

    return (
        <>
            <Section_1
                preHeading={''}
                mainHeading={'Our Portfolio of '}
                spanPurple={'Case Studies'}
                postHeading={`Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Perspiciatis 
                velit minus modi doloremque reprehenderit 
                blanditiis, ullam vitae consectetur facere 
                explicabo voluptas architecto soluta hic doloribus`}
                noBtn={false}
            />
            <section id={styles.caseStudyContainer}>
                {caseStudies?.slice(0, 9).map((item, i) => (
                    <Link key={i} className={styles.cards}
                        href={`/components/Service/${item?.heading}`}>
                        <Image src={item?.img} alt={"case studies material"} className={styles.images} />
                        <p className={styles.p}>{item.desc.length > 50 ? item.desc.slice(0, 60) + '...' : item.desc}</p>
                        <span className={styles.readMore}>Read More<em className={styles.em}>&nbsp;&gt;&gt;</em></span>
                    </Link>
                ))}
            </section>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <AiOutlineDoubleLeft />
                {caseStudies?.map((_, i) => <span key={i}>{i},</span>)}
                <AiOutlineDoubleRight />
            </div>
        </>
    )
}

export default page