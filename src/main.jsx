import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SdgMission from "./components/sdg-mission";
import Process from './components/process.jsx';
import Offers from './components/offers.jsx';
import Partners from './components/partners.jsx';
import BlogPost from './components/blogpost.jsx';
import Team from './components/team.jsx';
import Footer from './components/footer.jsx';
import FAQ from './components/faq.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SdgMission/>
    <Process/>
    <Offers/>
    <Partners/>
    <BlogPost/>
    <Team/>
    <Footer/>
    <FAQ/>
  </StrictMode>
)
