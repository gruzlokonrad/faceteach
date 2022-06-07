import './About.scss';
import ChooseSection from './ChooseArticle/ChooseArticle';
import FaceteachSection from './FaceteachArticle/FaceteachSection';

const About = () => {
  return (
    <section className="about">
      <FaceteachSection />
      <ChooseSection />
    </section>
  )
}

export default About