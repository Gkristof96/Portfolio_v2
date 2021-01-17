import './css/style.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className='filler' />
      <About />
      <div className='filler' />
      <Projects />
      <div className='filler' />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
