import React from 'react';
import style from "../../../pages/ChempionsPage/ChampionsPage.module.scss";
import { IChampion, IChampionPlace } from "../../../shared/types";

interface IChampionCard {
  currentTournament?: IChampionPlace
}

const ChampionCard = ({currentTournament}:IChampionCard) => {
  return (
    <div className={style.champion__card}>

      <div className={style.champion__card__text__box}>
        <h4 className={style.champion__card__text__box__name}>
            {currentTournament?.name}
        </h4>
        <p className={style.champion__card__text__box__description}>
            {currentTournament?.description}
        </p>
      </div>
      <div className={style.champion__card__img__box}>
        <img src={currentTournament?.image_url}
             alt=" photo" className={style.champion__card__img}/>
      </div>
    </div>
  );
};

export default ChampionCard;