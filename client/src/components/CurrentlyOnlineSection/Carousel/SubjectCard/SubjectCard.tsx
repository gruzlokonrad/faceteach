// import Image from '../../../../images/4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import style from './SubjectCard.module.scss';

interface ISubjectCard {
  name: string,
  subject: string,
  education: string | number,
  imgId: number
}

const SubjectCard = ({ name, subject, education, imgId }: ISubjectCard) => {
  let imgUrl = require(`images/${imgId}.jpg`)

  return (
    <div className={style.subjectCard}>
      <div className={style.subjectCard__picture}>
        <img src={imgUrl} alt={name} />
        <FontAwesomeIcon icon={faCircleCheck} />
      </div>
      <div className={style.subjectCard__description}>
        <h3>{subject}</h3>
        <p>{name}</p>
        {education && <p>Klasa: {education}</p>}
      </div>
      <div className={style.subjectCard__button}>
        <button>
          Umów Lekcję
        </button>
      </div>
    </div>
  )
}

export default SubjectCard