import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram | Paul Serafim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />
    </div>
  )
}

export default Home
