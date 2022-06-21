import Image from 'images/3.jpg';
import style from './ChooseArticle.module.scss';

const ChooseArticle = () => {
  return (
    <article className={style.chooseArticle}>
      <div className={style.wrapper}>
        <button>
          Dla Ucznia
        </button>
        <button>
          Dla Nauczyciela
        </button>
      </div>
      <div className={style.picture}>
        <img src={Image} alt="" />
      </div>
    </article>
  )
}

export default ChooseArticle