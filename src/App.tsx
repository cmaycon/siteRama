import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Purpose from './components/Purpose'
import Schedule from './components/Schedule'
import Location from './components/Location'
import Offers from './components/Offers'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Purpose />
        <Schedule />
        <Location />
        <Offers />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
