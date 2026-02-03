import './App.css'
import { Navbar } from './components/navbar';
import AboutOurStuff from './components/AboutOurStuff';
import HorizontalImageSlider from './components/HorizontalImageSlider';
import Team from './Pages/Team';
import Footer from './components/shadcn-studio/blocks/footer-component-01/footer-component-01';
import EventSchedule from './components/EventSchedule';
import AboutUs from './components/AboutUs';
import Sponsors from './components/Sponsors';
import { Analytics } from "@vercel/analytics/next"

function App() {

  return (
    <div className='flex flex-col'>
      <Navbar />
      <HorizontalImageSlider />
      <AboutOurStuff />
      <Sponsors />
      <Team />
      <EventSchedule />
      <AboutUs />
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
