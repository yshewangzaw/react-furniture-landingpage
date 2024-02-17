import React from 'react';
import LandingPage from './LandingPage';
import FeaturedProducts from './FeaturedProducts';
import ContactUs from './ContactUs';
import About from './About';
import Testimonials from './Testimonials';
// import Left from './Navbar/Left';
// import Middle from './Navbar/Middle';
// import Right from './Navbar/Right';
// import Wrapper from './Navbar/Wrapper';

const App = () => {
  return (
    <div>
       <LandingPage />
      <FeaturedProducts />
      <Testimonials />
      <About />
      <ContactUs />
      
     
    </div>
  );
};

export default App;