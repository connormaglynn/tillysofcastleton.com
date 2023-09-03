import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Hero from '../components/pages/index/hero'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Tilly's of Castleton</title>
          <meta name="description" content="The Bakery Shop" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Hero />
      </Layout>
    </>
  )
}

export default Home
