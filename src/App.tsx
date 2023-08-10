import About from "./components/About"
import Blogs from "./components/Blogs"
import Experience from "./components/Experience"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import { BrowserRouter } from 'react-router-dom';
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
    <div className=''>
      <Navbar/>
      <Intro/>
      <About/>
      <Projects/>
      <Experience/>
      <Blogs/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
