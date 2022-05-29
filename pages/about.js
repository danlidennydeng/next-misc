import Head from 'next/head'

import Footer from "../components/Footer"

function About() {
  return (
    <>
    <Head>
      <title>Codevolution</title>
      <meta name='description' content='free tutorial on web development' />
      
    </Head>
    <h2 className='content'>About</h2>
    </>
  )
}

export default About

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}