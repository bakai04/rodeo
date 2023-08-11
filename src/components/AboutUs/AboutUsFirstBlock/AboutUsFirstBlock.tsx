import React from 'react';
import { IAboutUs } from "../../../shared/types";
import style from "./AboutUsFirstBlock.module.scss"

export interface IFounderData {
  data: IAboutUs | null
}

const AboutUsFirstBlock = ({ data }: IFounderData) => {
  return (
    <div className={style.about__us__first__block__flex__box}>
      <div className={style.about__us__first__block__text__box}>
        {/* <h3 className={style.about__us__first__block__title}>
          {
            data?.title
          }
        </h3> */}
        <p className={style.about__us__first__block__subtitle}>
          {data?.founder_info}
        </p>
      </div>
      <div className={style.about__us__first__block__img__box}>
        <img className={style.about__us__first__block__img}
          src={data?.founder_image_url} alt="" />
      </div>
    </div>
  );
};

export default AboutUsFirstBlock;