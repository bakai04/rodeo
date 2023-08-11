import React from 'react';
import style from "./GalleryPreview.module.scss";
import video from "../../../assets/images/gallery__preview.mp4";
import { IGalery } from "../../../shared/types";

interface GaleryPreviewProps {
    data: IGalery | null
}

const GalleryPreview = ({ data }: GaleryPreviewProps) => {
    return (
        <div className={style.gallery__preview}>
            <video
                muted
                autoPlay={true}
                // preload="true"
                playsInline
                src={video}
            />
        </div>
    );
};

export default GalleryPreview;