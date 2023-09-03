import type { NextPage } from 'next'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Hero from '../components/pages/index/hero'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Header />
        <Hero />
      </Layout>
    </>
  )
}

export default Home
