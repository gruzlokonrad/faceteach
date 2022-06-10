// import Image from '../../../../images/4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './SubjectCard.scss';

interface ISubjectCard {
  name: string,
  subject: string,
  education: string | number,
  imgId: number
}

const SubjectCard = ({ name, subject, education, imgId }: ISubjectCard) => {
  let imgUrl = require(`../../../../images/${imgId}.jpg`)

  return (
    <div className="subjectCard">
      <div className="subjectCard__picture">
        <img src={imgUrl} alt={name} />
        <FontAwesomeIcon className="circle-check" icon={faCircleCheck} />
      </div>
      <div className="subjectCard__description">
        <h3>{subject}</h3>
        <p>{name}</p>
        {education && <p>Klasa: {education}</p>}
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