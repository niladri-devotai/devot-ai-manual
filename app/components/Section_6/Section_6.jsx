import { testimonialQuotation } from '@/app/assets/AI_Section';
import styles from './Section_6.module.css';
import { Profile1 } from '@/app/assets/client_profiles';
import Image from 'next/image';


const Section_6 = () => {
    const data = [{
        img: Profile1, name: 'Name Surname', designation: 'designation', desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea ullam officiis non unde quis, minus nulla asperiores maiores dicta doloremque magnam. Sint repellendus, deserunt facere molestias, aut natus nulla rerum quis ex ducimus maxime soluta porro sunt molestiae obcaecati est quisquam facilis, ab veniam. Dolores, veritatis! Aspernatur, consequatur quos.
    `},
    { img: Profile1, name: 'Name Surname', designation: 'designation', desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea ullam officiis non unde quis, minus nulla asperiores maiores dicta doloremque magnam. Sint repellendus, deserunt facere molestias, aut natus nulla rerum quis ex ducimus maxime soluta porro sunt molestiae obcaecati est quisquam facilis, ab veniam. Dolores, veritatis! Aspernatur, consequatur quos.` },
    ];

    return (
        <section style={{ flexDirection: 'column', rowGap: 50, height: 'max-content' }}>
            <span id={styles.span}>See What Our Happy Client Say</span>
            <div id={styles.div2}>
                {data?.map((item, i) => (
                    <figure
                        key={i} className={styles.cards}>
                        <div id={styles.div}>
                            <Image src={item?.img}
                                width={80}
                                height={80}
                                style={{ borderRadius: '50%', border: '2px solid yellow' }}
                                alt={''} />
                            <div>
                                <span>{item?.name}</span>
                                <p>{item?.designation}</p>
                            </div>
                        </div>
                        <figcaption style={{ marginTop: 35 }}>{item?.desc.length > 150 ? item?.desc.slice(0, 150) + '...' : item?.desc}</figcaption>
                        <Image src={testimonialQuotation} alt='' width={90}
                            style={{ position: 'absolute', bottom: 30, right: 30, zIndex: -1 }} />
                    </figure>
                ))}
            </div>
        </section>
    )
}

export default Section_6