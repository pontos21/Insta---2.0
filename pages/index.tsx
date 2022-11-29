import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram | Paul Serafim</title>
        <link rel="icon" href="https://i.pinimg.com/originals/2c/26/20/2c262006d4020341cf101a9ba9d7b943.jpg" />
      </Head>
      
      <Header />
      <Feed />
      <Modal />
    </div>
  )
}

export default Home
