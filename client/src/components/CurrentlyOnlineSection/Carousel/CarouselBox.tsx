// import { useState } from 'react';
import SubjectCard from './SubjectCard/SubjectCard';
import { useMediaQuery } from 'react-responsive';
import { Carousel } from '@trendyol-js/react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import style from './CarouselBox.module.scss';

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
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 985px)' });

  return (
    <>
      <article className={style.carouselBox}>
        <Carousel
          show={isTabletOrMobile ? 1.3 : 3}
          slide={1}
          swiping={true}
          leftArrow={<FontAwesomeIcon className={style.leftArrow} icon={faCircleArrowLeft} />}
          rightArrow={<FontAwesomeIcon className={style.rightArrow} icon={faCircleArrowRight} />}
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
        </Carousel>
      </article>
    </>
  )
}

export default CarouselBox