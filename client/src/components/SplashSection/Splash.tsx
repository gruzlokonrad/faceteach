import style from './Splash.module.scss';
import Container from '../Container/Container';
import Button from '../Button/Button';

const Splash = () => {
  return (
    <div className={style.splashSection}>
      <Container>
        <div className={style.splashSection__container}>
          <h1>Lorem Ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          <Button>Zaloguj się</Button>
        </div>
      </Container>
    </div>
  )
}

export default Splash