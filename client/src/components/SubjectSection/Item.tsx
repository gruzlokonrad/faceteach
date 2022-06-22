import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import style from './SubjectSection.module.scss';

const Item = () => {
  return (
    <div className={style.subjectSection__subjectItem}>
      <FontAwesomeIcon icon={faHeadphones} />
      <p>Lorem Ipsum</p>
    </div>
  )
}

export default Item