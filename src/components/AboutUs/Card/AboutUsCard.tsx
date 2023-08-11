import React from 'react';
import style from "../../../pages/AboutUsPage/AboutUs.module.scss";
const AboutUsCard = ({data}:any) => {
  return (
    <div className={style.about__us__card}>
      <img className={style.about__us__card__img} src={data.img} alt=""/>
     <div className={style.about__us__card__text__box}>
       <h3 className={style.about__us__card__title}>{data.name}</h3>
       <p className={style.about__us__card__description}>
           {data.description}
       </p>
     </div>
    </div>
  );
};

export default AboutUsCard;