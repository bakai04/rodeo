import { motion, Variants } from "framer-motion"
import css from './NewsAnimaionBigCard.module.scss'

const textVariants: Variants = {
    offscreen: {
        x: "-100%",
        opacity:0,
    },
    onscreen: {
        x: 0,
        opacity:1,
        transition: {
            type: "spring",
            bounce: 0.1,
            duration: 2
        }
    }
};

const imgVariants: Variants = {
    offscreen: {
        x: "100%",
        opacity:0,
    },
    onscreen: {
        x: 0,
        opacity:1,
        transition: {
            type: "spring",
            bounce: 0.1,
            duration: 2
        }
    }
};
interface IProps {
    it:{
        description: string
        image_url: string
        location_n_date: string
        title: string
        upper_title: string
    }
}
const NewsAnimaionBigCard = ({it}:IProps) => {

    return (
        <motion.div className={css.wrapper} initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}>
            <motion.div className={css.blockText} variants={textVariants}>
                <p className={css.blockText__header}>{it?.upper_title}</p>
                <h1 className={css.blockText__name}>{it?.title}</h1>
                <div className={css.blockText__all}>
                    <p className={css.blockText__descr}>{it?.description}</p>
                    <div className={css.line} />
                    <p className={css.blockText__date1}>{it?.location_n_date}</p>
                </div>
            </motion.div>
            <motion.img variants={imgVariants} src={it?.image_url} className={css.bg} alt="photo" />
        </motion.div>
    );
};

export default NewsAnimaionBigCard;