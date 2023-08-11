import React from 'react';
import style from "./TournamentsPreview.module.scss";
import video from "../../../assets/images/video.mp4"

const TournamentsPreview = () => {
    return (
        <div className={style.tournaments__preview}>
            <video
                width={"100%"}
                muted
                autoPlay={true}
                // preload="true"
                playsInline
                src={video}
               />
        </div>
    );
};

export default TournamentsPreview;