import React from 'react';
import style from "../../../pages/AboutUsPage/AboutUs.module.scss";


export interface IAboutUsPreviewProps {
  image: string
  title: string 
}

const AboutUsPreview = ({image, title}:IAboutUsPreviewProps) => {
  return (
    <div className={style.about__us__preview}>
      <img className={style.about__us__preview__img}
           src={image} alt=""/>
      <div className={style.about__us__preview__title}>
          {title}
      </div>
    </div>
  );
};

export default AboutUsPreview;