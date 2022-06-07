import './Splash.scss';
import Container from '../Container/Container';
import Button from '../Button/Button';

const Splash = () => {
  return (
    <div className="splashSection">
      <Container>
        <div className="content">
          <h1>Lorem Ipsum</h1>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          <Button>Zaloguj się</Button>
        </div>
      </Container>
    </div>
  )
}

export default Splash