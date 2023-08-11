import React, {useEffect, useState} from 'react';
import css from './Footer.module.scss'
import bg from "../../assets/images/footer__bg.png"
import BuyTicketsModal from "../BuyTicketsModal/BuyTicketsModal";
const Footer = () => {
    const [toggleModal, setToggleModal] = useState(false)

    const handleShowModal = () => {
        setToggleModal(!toggleModal)
        document.body.style.overflow = !toggleModal ? "hidden" : "auto"
    }
    useEffect(() => {
        document.body.style.overflow = toggleModal ? "hidden" : "auto"
        return () => {
            document.body.style.overflow = toggleModal ? "hidden" : "auto"
        }
    },[])

    return (
        <>
            {toggleModal && <BuyTicketsModal handleShowModal={handleShowModal}/>}
            <div className={css.wrapper__bg}>
                <div className={css.wrapper}>
                    <div className={css.footer__img__box}>
                        <img
                            className={css.footer__img}
                            src={bg}
                            alt="2 cowboys "/>
                    </div>
                    <div className={css.footer__text__box}>
                        <p className={css.footer__text}>
                            для получения дополнительной информации и приобретения билетов свяжитесь по номеру
                        </p>
                        <p className={css.footer__text__number}>
                            +996 555 22 22 25
                        </p>
                    </div>
                    <div className={css.footer__btn__box}>
                        <button onClick={handleShowModal} className={css.footer__btn}>
                            купить билеты
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Footer;