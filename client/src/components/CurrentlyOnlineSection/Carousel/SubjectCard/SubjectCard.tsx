import Image from '../../../../images/4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './SubjectCard.scss';

const SubjectCard = () => {
  return (
    <div className="subjectCard">
      <div className="subjectCard__picture">
        <img src={Image} alt="" />
        <FontAwesomeIcon className="circle-check" icon={faCircleCheck} />
      </div>
      <div className="subjectCard__description">
        <h3>
          Przedmiot
        </h3>
        <p>
          Imie i nazwisko
        </p>
        <p>
          klasa*
        </p>
      </div>
      <div className="subjectCard__button">
        <button>
          Umów Lekcję
        </button>
      </div>
    </div>
  )
}

export default SubjectCard