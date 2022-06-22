import Button from '../Button/Button';
import Container from '../Container/Container';
import Item from './Item';
import style from './SubjectSection.module.scss';

const SubjectSection = () => {
  return (
    <section className={style.subjectSection}>
      <header className={style.subjectSection__header}>
        <h2>Wybierz przedmiot</h2>
      </header>
      <Container>
        <div className={style.wrapper}>
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </Container>
        <Button>Zaloguj się</Button>
    </section>
  )
}

export default SubjectSection