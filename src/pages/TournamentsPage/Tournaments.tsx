import React, { useEffect, useState } from 'react';
import css from "./turnaments.module.scss";
import { motion, Variants } from "framer-motion"
import TournamentsPreview from "../../components/Tournaments/TournamentsPreview/TournamentsPreview";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, Navigation } from "swiper";
import TournamentsCard from "../../components/Tournaments/TournamentsCard/TournamentsCard";
import TournamentsSliderCard from "../../components/Tournaments/TournamentsSliderCard/TournamentsSliderCard";
import axios from "axios";
import { ITournamentResponce } from "../../shared/types";

const textVariants: Variants = {
    offscreen: {
        x: "-150%"
    },
    onscreen: {
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.1,
            duration: 2
        }
    }
};

const imgVariants: Variants = {
    offscreen: {
        x: "150%"
    },
    onscreen: {
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.1,
            duration: 2
        }
    }
};
const cardVariants: Variants = {
    offscreen: {
        y: "80%"
    },
    onscreen: {
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.1,
            duration: 2
        }
    }
};


interface IProps {
    selectedLanguage: string | undefined,

}
const Tournaments = ({ selectedLanguage }: IProps) => {

    const initial = { opacity: 0 };
    const initialY = { opacity: 0, y: 100 };
    const initialImageRight = { x: 200 };
    const initialImageLeft = { x: -200 };
    const whileInViewImage = { x: 0 };

    const whileInView = { opacity: 1, x: 0, y: 0 };
    const transition = { duration: 0.5 };
    const transitionImage = { duration: 1 };

    const [tournaments, setTournaments] = useState<ITournamentResponce | null>(null)

    useEffect(() => {
        axios(`http://90.156.209.53:12500/api/v1/tournaments/get-tournament-page/${selectedLanguage}/`)
            .then(res => setTournaments(res.data))
    }, [selectedLanguage])

    return (
        <div className={css.wrapper}>
            <TournamentsPreview />
            <div className={css.container}>
                <motion.div
                    initial={initialY}
                    whileInView={whileInView}
                    transition={transition}
                    viewport={{ once: true, amount: 0.2 }}
                    className={css.cards}>

                    {
                        tournaments?.tournaments.map(it => {
                            return (
                                <TournamentsCard it={it} cardVariants={cardVariants} />
                            )
                        })
                    }



                </motion.div>
                <motion.div className={css.block__text}
                    initial={initial}
                    whileInView={whileInView}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.div
                        initial={initialImageLeft}
                        whileInView={whileInViewImage}
                        transition={transitionImage}
                        variants={textVariants}
                        viewport={{ once: true, amount: 0.5 }}
                        className={css.block__imgs}>
                        <Swiper
                            effect={"cards"}
                            grabCursor={false}
                            modules={[EffectCards, Navigation, Autoplay]}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            className={css.mySwiper}
                        >
                            {
                                tournaments?.events.scroll_events.map(it => {
                                    return (
                                        <SwiperSlide >
                                            <TournamentsSliderCard
                                                it={it}
                                                transitionImage={transitionImage}
                                                initialImageRight={initialImageRight}
                                                whileInView={whileInView}
                                                imgVariants={imgVariants} />
                                        </SwiperSlide>

                                    )
                                })

                            }

                        </Swiper>
                    </motion.div>
                </motion.div>

                {
                    tournaments?.events.default_events.map((elem, index) => (
                        <motion.div
                            initial={initial}
                            whileInView={whileInView}
                            transition={transitionImage}
                            variants={textVariants}

                            viewport={{ once: true, amount: 0.5 }} className={css.block__gallery}>

                            {
                                (index % 2) === 0 && <motion.p
                                    transition={transitionImage}
                                    initial={initialImageRight}
                                    whileInView={whileInView}
                                    viewport={{ once: true, amount: 0.5 }}
                                    variants={textVariants}
                                    className={css.descr}>
                                    {elem.description}
                                </motion.p>
                            }
                            <motion.div
                                initial={initialImageLeft}
                                whileInView={whileInViewImage}
                                transition={transitionImage}
                                variants={textVariants}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <img className={css.gallery__img}
                                    src={elem.image_url}
                                    alt="" />
                            </motion.div>

                            {
                                (index % 2) !== 0 && <motion.p
                                    transition={transitionImage}
                                    initial={initialImageRight}
                                    whileInView={whileInView}
                                    viewport={{ once: true, amount: 0.5 }}
                                    variants={textVariants}
                                    className={css.descr}>
                                    {elem.description}
                                </motion.p>
                            }
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
};

export default Tournaments;