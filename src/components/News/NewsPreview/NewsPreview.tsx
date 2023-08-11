import React from 'react';
import style from "./NewsPreview.module.scss";


const NewsPreview = ({img, text}:any) => {
    return (
        <div className={style.news}>
            <div style={{backgroundImage: `url(${img})`}} className={style.news__preview}>
               <p className={style.news__title}>
                   {text}
               </p>
            </div>
        </div>
    );
};

export default NewsPreview;