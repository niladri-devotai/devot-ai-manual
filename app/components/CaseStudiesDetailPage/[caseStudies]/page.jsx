'use client'
import { useParams } from "next/navigation";
import { Image_Recog, NLP } from "@/app/assets/section_2";
import styling from './page.module.css'
import Image from "next/image";

const Page = () => {
    const { caseStudies } = useParams();
    const data = [{
        img: NLP, heading: "Heading 1", desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
        img: NLP, heading: "Heading 1", desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Quos unde labore rem modi ex tenetur nihil, illum facere aliquid obcaecati` },
    {
        img: NLP, heading: "Heading 1", desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Quos unde labore rem modi ex tenetur nihil, illum facere aliquid obcaecati
    iure incidunt deleniero animi` }]

    return (
        <>
            <section id={styling.section}>
                <p>Home &gt; Services &gt; {caseStudies.split('%20').join(' ')}</p>
                <h1 style={{ fontSize: '2.5em', fontWeight: 600, color: '#6200EE' }}>{caseStudies.split('%20').join(' ')}</h1>

                <article className={styling.article}>
                    <Image src={Image_Recog} alt='' className={styling.img} />
                    <p className={styling.p}>
                        <h2>Summary</h2>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Quos unde labore rem modi ex tenetur nihil, illum facere aliquid obcaecati
                        iure incidunt deleniti, id, autem architecto illo impedit ab nostrum vero animi <br /> <br />
                        amet asperiores odit! Iste, optio vero accusamus,
                        veritatis atque aut quibusdam consequuntur ipsum, hic tempora necessitatibus accusantium nostrum.
                    </p>

                </article>
                <article className={styling.article}>
                    <p className={styling.p}>
                        <h2>The Goal</h2>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Quos unde labore rem modi ex tenetur nihil, illum facere aliquid obcaecati
                        iure incidunt deleniti, id, autem architecto illo impedit ab nostrum vero animi <br /> <br />
                        amet asperiores odit! Iste, optio vero accusamus,
                        veritatis atque aut quibusdam consequuntur ipsum, hic tempora necessitatibus accusantium nostrum.
                    </p>
                    <p className={styling.p}>
                        <h2>The Challenge</h2>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Quos unde labore rem modi ex tenetur nihil, illum facere aliquid obcaecati
                        iure incidunt deleniti, id, autem architecto illo impedit ab nostrum vero animi <br /> <br />
                        amet asperiores odit! Iste, optio vero accusamus,
                        veritatis atque aut quibusdam consequuntur ipsum, hic tempora necessitatibus accusantium nostrum.
                    </p>
                </article>
                <article style={{ flexDirection: 'row-reverse' }} className={styling.article}>
                    <Image src={Image_Recog} alt='' className={styling.img} />
                    <p className={styling.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Quos unde labore rem modi ex tenetur nihil, illum facere aliquid obcaecati
                        iure incidunt deleniti, id, autem architecto illo impedit ab nostrum vero animi <br /> <br />
                        amet asperiores odit! Iste, optio vero accusamus,
                        veritatis atque aut quibusdam consequuntur ipsum, hic tempora necessitatibus accusantium nostrum.
                    </p>

                </article>

                <h1>Other Case Studies</h1>
                <article id={styling.apllicationList}>
                    {data?.map((item, i) => (
                        <div key={i} className={styling.cards}>
                            <Image className={styling.imgs} src={item?.img} alt='' />
                            <h1>{item?.heading}</h1>
                            <p>{item?.desc.length > 100 ? item.desc.slice(0, 100) + '...' : item?.desc}</p>
                        </div>
                    ))}
                </article>
            </section>
            <article id={styling.MiniBanner}>
                <p>Wish to Avail Our Services?</p>
                <div><button id={styling.btn1} className={styling.btn}>Schedule a Call &gt;&gt;</button>
                    <button id={styling.btn2} className={styling.btn}>Get a Free Quota &gt;&gt;</button></div>
            </article>

        </>
    )
}

export default Page;