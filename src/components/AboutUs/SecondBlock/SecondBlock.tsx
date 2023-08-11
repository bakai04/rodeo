import React from 'react';
import { IAboutUs } from "../../../shared/types";
import style from "./SecondBlock.module.scss";

interface ISecondBlock {
  data: IAboutUs | null
}

const SecondBlock = ({ data }: ISecondBlock) => {
  return (
    <div className={style.about__us__second__block__flex__box}>
      <div className={style.about__us__second__block__img__box}>
        <img className={style.about__us__second__block__img}
          src={"https://cdn.discordapp.com/attachments/978515025473966083/1082264069240795177/1.jpg"} alt="" />
      </div>

      <div className={style.about__us__second__block__text__box}>
        <p className={style.about__us__second__block__subtitle}>
          {
            data?.regulation
          }
        </p>
      </div>

    </div>
  );
};

export default SecondBlock;