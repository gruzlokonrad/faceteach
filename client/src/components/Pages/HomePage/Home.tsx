import Splash from '../../SplashSection/Splash';
import About from '../../AboutSection/About';
import CurrentlyOnline from '../../CurrentlyOnlineSection/CurrentlyOnline';
import SubjectSection from '../../SubjectSection/SubjectSection';
import './Home.scss';
// import Footer from '../../Footer/Footer';

const Home = () => {
  return (
    <div className="homeSection">
      <Splash />
      <About />
      <CurrentlyOnline />
      <SubjectSection />
      {/* <Footer /> */}
    </div>
  )
}

export default Home