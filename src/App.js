import React, { useEffect } from 'react';
import PreLoader from './components/Preloader/PreLoader';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import { wakeServer } from './services/wakeServices';



const App = () => {

  useEffect(() => {
    const wakeUpServer = async () => {
      try {
        const response = await wakeServer({url: 'https://nnamdi-portfolio.netlify.app/'});
        if (response?.status === 200) {
          console.log(response.data);
        } else {
          console.log(response?.message);
        }
      } catch (error) {
        console.error('Error waking up the server:', error);
        console.log("An error occurred. Please try again.");
      }
    };

    wakeUpServer();
  }, []);

  return (
    <div className="app">
      <PreLoader />
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App;
