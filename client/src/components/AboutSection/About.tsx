import style from './About.module.scss';
import ChooseSection from './ChooseArticle/ChooseArticle';
import FaceteachSection from './FaceteachArticle/FaceteachSection';

const About = () => {
  return (
    <section className={style.about}>
      <FaceteachSection />
      <ChooseSection />
    </section>
  )
}

export default About