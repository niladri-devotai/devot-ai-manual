import styles from './page.module.css'
import {
  Companies,
  Section_1, Section_2, Section_3, Section_4, Section_5, Section_6
} from './components'

export default function Home() {
  return (
    <main className={styles.main}>
      <Section_1
        preHeading={'Human dreams - AI Empowers'}
        mainHeading={'Revolutionizing Industries with'}
        spanPurple={'AI Solutions'}
        noBtn={true}
        postHeading={`We are a cutting-edge startup specializing in
        Artificial Intelligence, Web Development, and App Development.`} />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <Companies />
    </main>
  )
}