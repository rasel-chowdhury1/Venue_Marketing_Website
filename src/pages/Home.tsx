
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ExploreFeatures from "../components/ExploreFeatures";
import Navbar from "../components/Navbar";
import CreatorTools from "../components/CreatorTools";
import FinalCTA from "../components/FinalCTA";
import Testimonials from "../components/Testimonials";


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ExploreFeatures/>
      <CreatorTools/>
      <Testimonials />
      <FinalCTA />
      <Footer/>
    </div>
  )
}

export default Home;
