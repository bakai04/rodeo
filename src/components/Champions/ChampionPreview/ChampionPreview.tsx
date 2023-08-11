import React from 'react';
import style from "../../../pages/ChempionsPage/ChampionsPage.module.scss";

const ChampionPreview = ({data}:any) => {
  return (
    <div className={style.champion__preview}>
      <video
          muted
          autoPlay={true}
          // preload="true"
          playsInline
          src={data}
      />
    </div>
  );
};

export default ChampionPreview;