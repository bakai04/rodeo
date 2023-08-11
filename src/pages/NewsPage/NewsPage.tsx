import NewsAnimaionMiniCard from '../../components/News/NewsAnimaionMiniCard/NewsAnimaionMiniCard';
import NewsAnimaionBigCard from '../../components/News/NewsAnimaionBigCard/NewsAnimaionBigCard';
import NewsPreview from "../../components/News/NewsPreview/NewsPreview";
import {useEffect, useState} from "react";
import axios from "axios";


const data = {
    preview:{
        img:"https://cdn.discordapp.com/attachments/978515025473966083/1081965947218309241/01010101_.jpg",
        title:"Rodeo today"
    },

    images:[
        {
            img: "https://cdn.discordapp.com/attachments/978515025473966083/1082031623299661885/photo_7_2023-03-06_02-06-14.jpg",
            text:{
                head:"FEATURING MULTI-PLATIUM RECORDING ARTIST",
                title:"CODY JONHSON",
                description:"PERFORMING AN EXTENDED HALFTIME SHOW LIVE AT THE AMERICAN RODEO 2023 IN ARLINGTON, TX",
                footer:"saturday, march 11 at glove life field"
            }
        },
    ]
}
export interface IProps {
    description: string
    image_url: string
    location_n_date: string
    title: string
    upper_title: string
}

interface ILanguageProps {
    selectedLanguage:string | undefined,

}

const NewsPage = ({selectedLanguage}:ILanguageProps) => {
    const [data1, setData] = useState<IProps[]>([])

    const url = process.env.REACT_APP_BASE_URL
    
    useEffect(() => {
        axios(`http://90.156.209.53:12500/api/v1/news/get-news-page/{langauge}/?language=${selectedLanguage}`)
            .then(res => setData(res.data.data))
    },[selectedLanguage])

    return (
        <div >
            <NewsPreview img={data.preview.img} text={"Rodeo today"} />
            <NewsAnimaionBigCard it={data1[0]} />
            {
                data1.map((it) => {
                    return (
                        <NewsAnimaionMiniCard it={it} />
                    )
                })
            }

        </div >
    );
};

export default NewsPage;