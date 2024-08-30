import About from "./components/About"
import Blogs from "./components/Blogs"
import Experience from "./components/Experience";
import Projects from "./components/Projects"
import { BrowserRouter } from 'react-router-dom';
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { ToastContainer } from "react-toastify"
import Common from "./components/Common"

function App() {
  return (
    <BrowserRouter>
    <div className=''>
      <Common/>
      <About/>
      <Projects/>
      <Experience/>
      <Blogs/>
      <Skills/>
      <Contact/>
      <Footer/>
      <ToastContainer position="bottom-center" bodyClassName="text-center font-bold text-blue-900"/>
    </div>
    </BrowserRouter>
  )
}

export default App
