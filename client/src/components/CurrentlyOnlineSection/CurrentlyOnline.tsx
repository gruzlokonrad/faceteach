import { useState } from 'react';
import Container from '../Container/Container';
import CarouselBox from './Carousel/CarouselBox';
import style from './CurrentlyOnline.module.scss';

const CurrentlyOnline = () => {

  const [activeUsers, setActiveUsers] = useState([
    { id: 1, name: 'Albus Dumbledore', team: 'teacher', subject: 'polski', education: '', imgId: 4},
    { id: 2, name: 'Minerwa McGonagall', team: 'teacher', subject: 'fizyka', education: '', imgId: 5},
    { id: 3, name: 'Rubeus Hagrid', team: 'teacher', subject: 'chemia', education: '', imgId: 6},
    { id: 4, name: 'Remus Lupin', team: 'teacher', subject: 'matematyka', education: '', imgId: 5},
    { id: 5, name: 'Severus Snape', team: 'teacher', subject: 'matematyka', education: '', imgId: 4},
    { id: 6, name: 'Tom Riddle', team: 'pupil', subject: 'przyroda', education: 1, imgId: 7},
    { id: 7, name: 'Harry Potter', team: 'pupil', subject: 'matematyka', education: 2, imgId: 8},
    { id: 8, name: 'Hermiona Granger', team: 'pupil', subject: 'angielski', education: 3, imgId: 9},
    { id: 9, name: 'Ron Weasley', team: 'pupil', subject: 'matematyka', education: 1, imgId: 8},
    { id: 10, name: 'Draco Malfoy', team: 'pupil', subject: 'matematyka', education: 3, imgId: 7}
  ]);

  const activeTeachers = activeUsers.filter(user => user.team === 'teacher');
  const activePupil = activeUsers.filter(user => user.team === 'pupil');
  
  
  return (
    <section className={style.currentlyOnline}>
      <header className={style.currentlyOnline__header}>
        <h2>Obecnie Online</h2>
      </header>
      <div className={style.currentlyOnline__content}>
        <Container>
          <CarouselBox team={activeTeachers} />
          <CarouselBox team={activePupil} />
        </Container>
      </div>
    </section>
  )
}

export default CurrentlyOnline