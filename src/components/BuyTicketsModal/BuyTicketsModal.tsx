import React from 'react';
import css from "./BuyTicketsModal.module.scss"
import logo from "../../assets/images/logo.png"
const BuyTicketsModal = ({handleShowModal}:any) => {

    return (
        <div onClick={handleShowModal} className={css.buy__tickets__modal}>
            <div className={css.buy__tickets__modal__content__box}>
                <img className={css.buy__tickets__modal__img} src={logo} alt=""/>
                <div className={css.buy__tickets__modal__text__box}>
                    <p className={css.buy__tickets__modal__text}>
                        для получения дополнительной информации и приобретения билетов свяжитесь по номеру
                    </p>
                    <p className={css.buy__tickets__modal__text__number}>
                        +996 555 22 22 25
                    </p>
                </div>

            </div>

        </div>
    );
};

export default BuyTicketsModal;