import Container from '../Container/Container';
import Carousel from './Carousel/Carousel';
import './CurrentlyOnline.scss';

const CurrentlyOnline = () => {

  return (
    <section className="currentlyOnline">
      <header className="currentlyOnline__header">
        <h2>Obecnie Online</h2>
      </header>
      <div className="currentlyOnline__content">
        <Container>
          <Carousel team="teacher" name="Jan Kowalski" subject="matematyka" />
        </Container>
      </div>
    </section>
  )
}

export default CurrentlyOnline