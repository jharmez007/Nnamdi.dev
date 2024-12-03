import React from 'react';
import PreLoader from './components/Preloader/PreLoader';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';


const App = () => {
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
