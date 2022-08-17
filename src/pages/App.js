// import './App.css';
import Navbar from './navbar/Navbar.js'
import Home from './home/Home.js'
import Events from './events/Events.js'
import About from './about/About.js'
import Footer from './footer/Footer.js'
import EventModal from './modal/event/Event.js'
// import { Button, Modal } from '@mantine/core';
import { useState } from 'react';
import SmoothScroll from 'smooth-scroll';

const smoothScroll = new SmoothScroll()

window.smoothScroll = smoothScroll

const scrollTo = (val) => {
    smoothScroll.animateScroll(val)
}

window._scrollTo = (val) => {
    smoothScroll.animateScroll(val)
}

window._scrollToElement = (el) => {
    scrollTo(document.getElementById(el).getBoundingClientRect().top - window.innerHeight / 8 + window.scrollY)
}


function App() {
    // const [opened, setOpened] = useState(false);


    return (
        <div className="App">

            <Navbar></Navbar>
            <div className='body-wrapper'>
                <Home></Home>
                <div style={{ maxWidth: '100%', padding: '0 8vw' }}>
                    <About></About>
                    <Events></Events>
                </div>
            </div>


            <Footer></Footer>
        </div>
    );
}

export default App;
