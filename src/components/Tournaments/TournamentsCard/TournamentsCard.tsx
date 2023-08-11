import React from 'react';
import {motion} from "framer-motion";
import css from "../../../pages/TournamentsPage/turnaments.module.scss";
import border from "../../../assets/images/border.png";
import { ITournament } from "../../../shared/types";

interface ITournamentCard {
    it: ITournament
    cardVariants: any
}

const TournamentsCard = ({it, cardVariants}:ITournamentCard) => {
    return (
        <motion.div variants={cardVariants} className={css.card}>
            <img src={border} alt="border" className={css.border}/>
            <img
                src={it.image_url}
                alt="cow" className={css.logo}/>
            <div className={css.card__text}>
                <p>{it.title} </p>
                <p>{it.location}</p>
                <p>{it.date}</p>
                <p>{it.tile}</p>
            </div>
        </motion.div>
    );
};

export default TournamentsCard;