import Button from "components/Button/Button";
import Image from 'images/2.jpg';
import style from './FaceteachArticle.module.scss';


const FaceteachArticle = () => {
  return (
    <article className={style.faceteachArticle}>
      <div className={style.picture}>
        <img src={Image} alt="" />
      </div>
      <div className={style.wrapper}>
        <header className={style.wrapper__header}>
          <h2>Czym jest faceteach?</h2>
        </header>
        <div className={style.wrapper__content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <span>
              EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE.
            </span>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
          <p>
            <span>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT.
            </span>
          </p>
        </div>
        <div className={style.wrapper__button}>
          <Button>Zaloguj się</Button>
        </div>
      </div>
    </article>
  )
}

export default FaceteachArticle