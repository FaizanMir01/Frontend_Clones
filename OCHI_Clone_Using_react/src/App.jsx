
import LocomotiveScroll from 'locomotive-scroll';
import About from './components/About'
import Cards from './components/Cards'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'

const App = () => {
  

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <Landing />
      <Marquee/>
      <About/>
      <Eyes />
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App