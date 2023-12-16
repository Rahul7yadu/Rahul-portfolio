import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'
import First from '../components/first'
import Second from '../components/second'
import Third from '../components/third'
// import Fourth from '../components/fourth'

export default function Home() {

  return (
    <>
      <div className='container'>
        <Head>
          <title>Rahul Yadu | Web Developer</title>
          <link rel='icon' href='/logo.png' />
        </Head>
      </div>
      <div className='font-mono bg-gradient-to-tl from-canvas1-light via-canvas1-medium to-canvas1-dark'>
        <Header />
        <First />
        <Second />
        <Third />
        {/* <Fourth /> disabling the experience page*/}
        <Footer />
      </div>
    </>
  )
}
