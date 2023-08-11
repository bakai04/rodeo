import React from 'react';
import css from "../../../pages/TournamentsPage/turnaments.module.scss";
import { motion } from "framer-motion";

const TournamentsSliderCard = ({ it, transitionImage, initialImageRight, whileInView, imgVariants }: any) => {
    return (

        <div className={css.slide}>
            <div className={css.block__img}>
                <img
                    className={css.slide__img}
                    src={it.image_url}
                    alt="" />
            </div>
            <motion.div
                transition={transitionImage}
                initial={initialImageRight}
                whileInView={whileInView}
                variants={imgVariants}
                viewport={{ once: true, amount: 0.5 }}
                className={css.block__title}>
                <p className={css.title}>{it.title}</p>
                <p className={css.description}>{it.description}</p>
            </motion.div>
        </div>
    );
};

export default TournamentsSliderCard;