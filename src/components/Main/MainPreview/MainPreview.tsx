import React from 'react';
import style from "./MainPreviw.module.scss";

const MainPreview = () => {
    return (
        <div className={style.main__preview}>
            <h3 className={style.main__title}>
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

export default MainPreview;