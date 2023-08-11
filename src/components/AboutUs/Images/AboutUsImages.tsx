import React from 'react';
import style from "./AboutUsImages.module.scss"
const AboutUsImages = ({data}:any) => {

  return (
    <div className={style.about__us__images__box}>
      <img className={style.about__us__images} src={data?.img} alt=""/>
    </div>
  );
};

export default AboutUsImages;