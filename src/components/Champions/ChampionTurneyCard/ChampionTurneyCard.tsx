import React from 'react';
import style from "../../../pages/ChempionsPage/ChampionsPage.module.scss";
import cup from "../../../assets/images/cup.png"
import { IChampion } from "../../../shared/types";

interface IChampionTyrneyCard {
  idx: number
  it: IChampion
  setCurrenTournament: (val: IChampion | null | ((val: IChampion | null) => IChampion | null)) => void
}

const ChampionTurneyCard = ({ idx, it, setCurrenTournament }: IChampionTyrneyCard) => {
  return (
    <div onClick={() => setCurrenTournament(it)} className={style.tourney__card}>
      <img className={style.tourney__card__img} src={it.image_url} alt="" />
      <p className={style.tourney__card__title}>{it.title}</p>
    </div>
  );
};

export default ChampionTurneyCard;