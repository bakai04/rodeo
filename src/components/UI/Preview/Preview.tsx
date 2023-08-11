import React from 'react';
import style from "../../../pages/ChempionsPage/ChampionsPage.module.scss";


const Preview = () => {
    return (
        <div className={style.champion__preview}>
            <h3 className={style.champion__title}>
                Восемь
                <br/>
                секунд-
                <br/>
                шанс
                <br/>
                на славу
                <br/>
            </h3>
        </div>
    );
};

export default Preview;