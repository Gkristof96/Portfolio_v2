import './css/style.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { sectionData } from './data/sections'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className='filler' />
      <About data={sectionData[0]}/>
      <div className='filler' />
      <Projects data={sectionData[1]}/>
      <div className='filler' />
      <Skills data={sectionData[2]}/>
      <Contact data={sectionData[3]}/>
      <Footer />
    </>
  );
}

export default App;
