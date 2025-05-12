import Blog from './Layout/Blog';
import Brands from './Layout/Brands';
import Features from './Layout/Features';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Hero from './Layout/Hero';
import Overview from './Layout/Overview';
import Process from './Layout/Process';
import Review from './Layout/Review';
import Tracking from './Layout/Tracking';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Features />
      <Process />
      <Overview />
      <Review />
      <Blog />
      <Tracking />
      <Footer />
    </>
  );
};

export default App;
