// import { useState } from 'react';
import './CarouselBox.scss';
import SubjectCard from './SubjectCard/SubjectCard';
import { Carousel } from '@trendyol-js/react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

interface ICarouselBox {
  team:
  {
    id: number,
    name: string,
    team: string,
    subject: string,
    education: string | number,
    imgId: number
  }[]
}

const CarouselBox = ({ team }: ICarouselBox) => {
  return (
    <>
      <article className="carouselBox">

        <Carousel
          show={3}
          // show={1.3}
          slide={1}
          swiping={true}
          leftArrow={<FontAwesomeIcon className="leftArrow" icon={faCircleArrowLeft} />}
          rightArrow={<FontAwesomeIcon className="rightArrow" icon={faCircleArrowRight} />}
        >
          {team.map((person, index) => (
            <SubjectCard
              key={index}
              name={person.name}
              subject={person.subject}
              education={person.education}
              imgId={person.imgId}
            />
          ))}

          {/* <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard /> */}
        </Carousel>
      </article>
    </>

  )
}

export default CarouselBox