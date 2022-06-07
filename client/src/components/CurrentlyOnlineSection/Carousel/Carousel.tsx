// import { useState } from 'react';
import './Carousel.scss';
import SubjectCard from './SubjectCard/SubjectCard';

interface ICarousel {
  team: string,
  name: string,
  subject: string
}

const Carousel = ({team, name, subject} : ICarousel) => {
  return (
    <article className="carousel">
      <SubjectCard />
      <SubjectCard />
      <SubjectCard />
    </article>
  )
}

export default Carousel