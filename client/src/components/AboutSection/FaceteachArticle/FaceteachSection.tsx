import Button from "../../Button/Button";
import Image from '../../../images/2.jpg';
import './FaceteachArticle.scss';


const FaceteachArticle = () => {
  return (
    <article className="faceteachArticle">
      <div className="picture">
        <img src={Image} alt="" />
      </div>
      <div className="wrapper">
        <header className="wrapper__header">
          <h2>Czym jest faceteach?</h2>
        </header>
        <div className="wrapper__content">
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
        <div className="wrapper__button">
          <Button>Zaloguj się</Button>
        </div>
      </div>
    </article>
  )
}

export default FaceteachArticle