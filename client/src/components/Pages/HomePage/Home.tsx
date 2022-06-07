import Splash from '../../SplashSection/Splash';
import About from '../../AboutSection/About';
import CurrentlyOnline from '../../CurrentlyOnlineSection/CurrentlyOnline';
import './Home.scss';

const Home = () => {
  return (
    <div className="homeSection">
      <Splash />
      <About />
      <CurrentlyOnline />
    </div>
  )
}

export default Home