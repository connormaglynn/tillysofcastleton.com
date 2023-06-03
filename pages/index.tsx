import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Bakery</title>
          <meta name="description" content="The Bakery Shop" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <div className={styles.landing}>
          <div className="flex h-full justify-center items-center">
            <p className="font-brand text-7xl text-white">Your Local Bakery</p>
          </div>
        </div>

        <div className={styles.container}>
          <main className={styles.main}>
            <section id="portfolio" className={styles.section}>
              <h1 className={styles.title}>Portfolio</h1>
              <div className={styles.grid}>
                <a href="#" className={styles.card}>
                  <h2>🍰 Cakes</h2>
                  <p>We bake the best cakes!</p>
                </a>

                <a href="#" className={styles.card}>
                  <h2>🎂 Birthdays</h2>
                  <p>The most amazing birthday cakes!</p>
                </a>
              </div>
            </section>

            <section id="about" className={styles.section}>
              <h1 className={styles.title}>About</h1>
            </section>

            <section id="contact" className={styles.section}>
              <h1 className={styles.title}>Contact</h1>
            </section>
          </main>
        </div>
      </Layout>
    </>
  )
}

export default Home
