import React from 'react';
import style from "../../../pages/ChempionsPage/ChampionsPage.module.scss";
import { IChampionPlace } from "../../../shared/types";

interface IChampionCard {
    currentTournament?: IChampionPlace
}

const ChampionSubCard = ({ currentTournament }: IChampionCard) => {
    return (
        <div className={style.champion__subcard}>
            <img className={style.champion__subcard__img}
                src={currentTournament?.image_url}
                alt="champion photo" />
            <p className={style.champion__subcard__name}>{currentTournament?.name}</p>
            <p className={style.champion__subcard__description}>{currentTournament?.description}</p>
        </div>
    );
};

export default ChampionSubCard;