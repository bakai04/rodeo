import React, { useEffect, useState } from 'react';
import css from './GalleryPage.module.scss'
import { motion, Variants } from "framer-motion"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import GalleryPreview from "../../components/Gallery/GalleryPreview/GalleryPreview";
import border from "../../assets/images/border.png";
import axios from "axios";
import { IGalery, IImageType, ITournamentResponce } from "../../shared/types";

const textVariants: Variants = {
    offscreen: {
        scale: 1
    },
    onscreen: {
        scale: 1,
        transition: {
            type: "spring",
            duration: 3
        }
    }
};

interface ILanguageProps {
    selectedLanguage: string | undefined,
}

const url = import.meta.env.VITE_REACT_APP_BASE_URL
const GalleryPage = ({ selectedLanguage }: ILanguageProps) => {
    const [data, setData] = useState<IGalery | null>(null)
    const [tournaments, setTournaments] = useState<ITournamentResponce | null>(null)

    useEffect(() => {
        axios(`${url}gallery/get-gallery-page/${selectedLanguage}/`)
            .then(res => setData(res.data))
        axios(`${url}tournaments/get-tournament-page/${selectedLanguage}/`)
            .then(res => setTournaments(res.data))
    }, [selectedLanguage])

    const initialY = { opacity: 0, y: 100 };
    const whileInView = { opacity: 1, x: 0, y: 0 };
    const transition = { duration: 0.5 };

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

    return (
        <div >
            <GalleryPreview data={data} />

            <div className={css.swiper__container}>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >

                    {
                        data?.data.scroll_images.map(it => {
                            return (
                                <SwiperSlide className={css.slick__box}>
                                    <img className={css.slider__img} src={it.image_url} alt="swipe" />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

            <motion.div
                initial={initialY}
                whileInView={whileInView}
                transition={transition}
                viewport={{ once: true, amount: 0.2 }}
                className={css.cards}>
                {
                    tournaments?.tournaments.map((elem, index) => (
                        <motion.div variants={cardVariants} key={index} className={css.card}>
                            <img src={border} alt="border" className={css.border} />
                            <img
                                src={elem.image_url}
                                alt="cow" className={css.logo} />
                            <div className={css.card__text}>
                                <p>{elem.title}</p>
                                <p>{elem.location}</p>
                                <p>{elem.date}</p>
                                <p>{elem.tile}</p>
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>

            <p className={css.gallery__card__title}>{data?.title.upper_title}</p>
            <motion.div
                className={css.wrapper}
                initial="offscreen"
                whileInView="onscreen"
                variants={textVariants}
                viewport={{ once: true, amount: 0.8 }}>

                {data?.data.upper_images.map((item, index) =>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        className={css.item} variants={textVariants} key={index}>
                        <div className={css.itemInform}>
                            <img src={item.image_url} alt="img" />
                        </div>
                    </motion.div>
                )}
            </motion.div>

            <p className={css.gallery__card__second__title}>{data?.title.lower_title}</p>
            <motion.div
                className={css.wrapper}
                initial="offscreen"
                whileInView="onscreen"
                variants={textVariants}
                viewport={{ once: true, amount: 0.8 }}>

                {data?.data.lower_images.map((item, index) =>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        className={css.item} variants={textVariants} key={index}>
                        <div className={css.itemInform}>
                            <img src={item.image_url} alt="img" />
                        </div>
                    </motion.div>
                )}

            </motion.div>
        </div>
    );
};

export default GalleryPage;