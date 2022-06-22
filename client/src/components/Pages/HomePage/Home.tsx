import Splash from 'components/SplashSection/Splash';
import About from 'components/AboutSection/About';
import CurrentlyOnline from 'components/CurrentlyOnlineSection/CurrentlyOnline';
import SubjectSection from 'components/SubjectSection/SubjectSection';
import style from './Home.module.scss';
import Footer from 'components/Footer/Footer';
import Copyright from 'components/CopyrightSection/Copyright';

const Home = () => {
  return (
    <div className={style.homeSection}>
      <Splash />
      <About />
      <CurrentlyOnline />
      <SubjectSection />
      <Footer />
      <Copyright />
    </div>
  )
}

export default Home