import Footer from "../components/Footer"

function About() {
  return <h2 className='content'>About</h2>
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