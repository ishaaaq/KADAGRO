import './App.css';
import NavBar from './NavBar';
import GetStarted from './GetStarted';
import  giwa from './images/Rectangle 10.png';
import OurServices from './OurServices';
import FeaturedProducts from './FeaturedProducts';
import GreenerFuture from './GreenerFuture';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
import OurBlog from "./OurBlog";
import Footer from './Footer';

function App() {

  const clickHandler = () => {
    alert('Page is yet to be linked')
  }
  return (
    <>
      
      <NavBar clickHandler={clickHandler}/>
      <GetStarted clickHandler={clickHandler}/>

      <div className='supportingFarmers'>
      
        <h1 className='header'>Supporting Farmers through Enhancing Their skills</h1>
        
        <div className='slider'>
          <img src={giwa} alt={'giwa'}></img>
          <button>GIWA</button>
        </div>
         <div className='dash'></div>
      </div>
      <OurServices/>
      <FeaturedProducts/>
      <GreenerFuture clickHandler={clickHandler}/>
      <AboutUs/>
      <Testimonials/>
      <OurBlog/>
      <Footer/>
    </>
    
  )
}

export default App;
