import React from 'react';
import css from './TicketPage.module.scss'

const TicketPage = () => {
    return (
        <div className={css.wrapper__bg}>

            <div className={css.wrapper}>
                <p className={css.title}>GET READY TO RIDE</p>
                <div className={css.tickets__card__box}>
                    <div title="Click to expand" id="tab1" className={css.tickets__card}>
                        <img
                            src="https://www.americanrodeo.com/static/media/wild_card.27c5085296c9d8c3f986.png" alt=""
                            className={css.tickets__card__img} />
                        <div className={css.tickets__card__text__box}>
                            <p>WEDNESDAY, MARCH 8 2023</p>
                            <p>AT GLOBE LIFE FIELD</p>
                            <p>IN ARLINGTON, TX</p>
                        </div>
                    </div>
                    <div title="Click to expand" id="tab1" className={css.tickets__card}>
                        <img
                            src="https://www.americanrodeo.com/static/media/wild_card.27c5085296c9d8c3f986.png" alt=""
                            className={css.tickets__card__img} />
                        <div className={css.tickets__card__text__box}>
                            <p>WEDNESDAY, MARCH 8 2023</p>
                            <p>AT GLOBE LIFE FIELD</p>
                            <p>IN ARLINGTON, TX</p>
                        </div>
                    </div>
                    <div title="Click to expand" id="tab1" className={css.tickets__card}>
                        <img
                            src="https://www.americanrodeo.com/static/media/wild_card.27c5085296c9d8c3f986.png" alt=""
                            className={css.tickets__card__img} />
                        <div className={css.tickets__card__text__box}>
                            <p>WEDNESDAY, MARCH 8 2023</p>
                            <p>AT GLOBE LIFE FIELD</p>
                            <p>IN ARLINGTON, TX</p>
                        </div>
                    </div>
                    <div title="Click to expand" id="tab1" className={css.tickets__card}>
                        <img
                            src="https://www.americanrodeo.com/static/media/wild_card.27c5085296c9d8c3f986.png" alt=""
                            className={css.tickets__card__img} />
                        <div className={css.tickets__card__text__box}>
                            <p>WEDNESDAY, MARCH 8 2023</p>
                            <p>AT GLOBE LIFE FIELD</p>
                            <p>IN ARLINGTON, TX</p>
                        </div>
                    </div>
                </div>
                <div className={css.tickets__baner}>
                    <img src="https://www.americanrodeo.com/static/media/logo_event_2.78dd96e83cc3b69c70ce.png" alt="start" />
                    <div className={css.baner__text}>
                        <p className={css.text1}>EVENT PACKAGES</p>
                        <p className={css.text2}>WEDNESDAY, MARCH 8 - SATURDAY, MARCH 11 2023</p>
                        <p className={css.text3}>AT GLOBE LIFE FIELD - ARLINGTON, TX</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketPage;