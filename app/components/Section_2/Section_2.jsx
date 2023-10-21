import styles from './Section_2.module.css';
import { BsFillCaretLeftFill, BsFillCaretRightFill, BsBoxArrowUpRight } from 'react-icons/bs';
import { Image_Recog, NLP, operations_research, personalized_marketing, recommendation_systems, web_development } from '@/app/assets/section_2';
import Image from 'next/image';
import Link from 'next/link';

const Section_2 = () => {
    //data fetching from CMS
    const data = [{ img: Image_Recog, heading: 'Image Recognition and Computer Vision' },
    { img: operations_research, heading: 'Natural Language Processing' },
    { img: NLP, heading: 'Recommendation System' },
    { img: recommendation_systems, heading: 'Operation Research' },
    { img: personalized_marketing, heading: 'Personalized Marketing' },
    { img: web_development, heading: 'Web Development' }];



    return (
        <section style={{ flexDirection: 'column' }}>
            <div id={styles.div}>
                <span id={styles.span}>Services at a Glance</span>
                <button id={styles.btn}>Know More &gt;&gt;</button>
            </div>
            <div id={styles.div2}>
                <BsFillCaretLeftFill size={50} color={'#6200EE'} cursor={'pointer'} />
                <div id={styles.cardContainer}>
                    {data?.map((item, i) => (
                        <Link key={i} id={styles.cards}
                            href={`/components/Service/${item?.heading}`}>
                            <BsBoxArrowUpRight color='white' fontWeight={900}
                                className={styles.cardDetailsIcon}
                                style={{
                                    backgroundColor: 'rgb(0,0,240)',
                                    transition: 'all 250ms',
                                    padding: 10, borderRadius: 5, position: 'absolute',
                                    right: 10, top: 10
                                }}
                                size={35} />
                            <Image src={item.img} alt={item.heading} className={styles.images} />
                            <p className={styles.services}>{item.heading}</p>
                        </Link>
                    ))}
                </div>
                <BsFillCaretRightFill size={50} color={'#6200EE'} cursor={'pointer'} />
            </div>
        </section>
    )
}

export async function getStaticProps() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8];
    return {
        props: {
            data
        },
    }
}

export default Section_2