import Image from '../../../images/3.jpg';
import './ChooseArticle.scss';

const ChooseArticle = () => {
  return (
    <article className="chooseArticle">
      <div className="wrapper">
        <button>
          Dla Ucznia
        </button>
        <button>
          Dla Nauczyciela
        </button>
      </div>
      <div className="picture">
        <img src={Image} alt="" />
      </div>
    </article>
  )
}

export default ChooseArticle