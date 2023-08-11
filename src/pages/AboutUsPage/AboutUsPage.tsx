import React, { useEffect, useState } from 'react';
import style from "./AboutUs.module.scss"
import AboutUsPreview from "../../components/AboutUs/Preview/AboutUsPreview";
import AboutUsCard from "../../components/AboutUs/Card/AboutUsCard";
import AboutUsImages from "../../components/AboutUs/Images/AboutUsImages";
import AboutUsFirstBlock from "../../components/AboutUs/AboutUsFirstBlock/AboutUsFirstBlock";
import SecondBlock from "../../components/AboutUs/SecondBlock/SecondBlock";
import axios from "axios";
import { IAboutUs } from "../../shared/types";

const data = {
    preview: {
        img: "https://cdn.discordapp.com/attachments/978515025473966083/1082264163360985099/fc51b0b8dedfa797.jpg",
        text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet commodi consequuntur explicabo ipsa laboriosam magni maiores nobis nostrum, perspiciatis placeat quas quibusdam quo quos velit."
    },
    people: [
        {
            img: "https://cdn.discordapp.com/attachments/978515025473966083/1072490872270225538/image.png",
            name: " Иванов Иван Иванович",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eos neque numquam."
        },
        {
            img: "https://cdn.discordapp.com/attachments/978515025473966083/1072490872270225538/image.png",
            name: " Иванов Иван Иванович",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eos neque numquam."
        },
        {
            img: "https://cdn.discordapp.com/attachments/978515025473966083/1072490872270225538/image.png",
            name: " Иванов Иван Иванович",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eos neque numquam."
        },
        {
            img: "https://cdn.discordapp.com/attachments/978515025473966083/1072490872270225538/image.png",
            name: " Иванов Иван Иванович",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eos neque numquam."
        },
    ],
    images: [
        {
            img: "https://www.americanrodeo.com/static/media/single_rider.63ac92f637de926dd90e.jpg",

        },
        {
            img: "https://www.americanrodeo.com/static/media/single_rider.63ac92f637de926dd90e.jpg",

        },
        {
            img: "https://www.americanrodeo.com/static/media/single_rider.63ac92f637de926dd90e.jpg",

        }, {
            img: "https://www.americanrodeo.com/static/media/single_rider.63ac92f637de926dd90e.jpg",

        },

    ],
    images__description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos dolore dolorem eligendi fugiat ipsam, laboriosam minus quos rem tempore. Atque consectetur ea error esse et, exercitationem expedita, fuga, harum illo impedit natus non nulla obcaecati quae quisquam repellendus veniam vitae? Alias, aut dignissimos dolor dolorum eligendi eos esse illum molestiae, mollitia, omnis quia quos reiciendis rerum similique vitae? A, accusamus alias architecto dolorem dolores ea eveniet fugiat illo, inventore ipsum iusto maiores modi non odit quidem quis, quo rem repellendus sint veniam! Assumenda, beatae cupiditate labore neque quod reprehenderit rerum ullam! Doloremque earum error minus perferendis.",
    title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet commodi consequuntur explicabo ipsa laboriosam magni maiores nobis nostrum, perspiciatis placeat quas quibusdam quo quos velit. laboriosam magni maiores nobis nostrum, perspiciatis placeat quas quibusdam quo quos",
    first__block:{
        title:"Lorem ipsum",
        description:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, deleniti dicta est excepturi illum\n" +
            "          minima necessitatibus nesciunt nisi nobis porro quae quaerat ratione voluptatem? Corporis cupiditate deleniti\n" +
            "          doloribus dolorum impedit in, iusto necessitatibus, obcaecati pariatur perferendis sed tempore voluptatem!\n" +
            "          Excepturi illo nam nemo neque nulla officiis pariatur possimus ratione repellendus!",
        img: "https://cdn.discordapp.com/attachments/978515025473966083/1082264104682651648/2.png",
    },
    second__block:{
        title:"Lorem ipsum",
        description:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, deleniti dicta est excepturi illum\n" +
            "          minima necessitatibus nesciunt nisi nobis porro quae quaerat ratione voluptatem? Corporis cupiditate deleniti\n" +
            "          doloribus dolorum impedit in, iusto necessitatibus, obcaecati pariatur perferendis sed tempore voluptatem!\n" +
            "          Excepturi illo nam nemo neque nulla officiis pariatur possimus ratione repellendus!",
        img: "https://cdn.discordapp.com/attachments/978515025473966083/1082264069240795177/1.jpg",
    }

}

interface IProps {
    selectedLanguage:string | undefined,

}

const AboutUsPage = ({selectedLanguage}:IProps) => {
    const [aboutUs, setAboutUs] = useState<IAboutUs | null>(null)

    useEffect(() => {
        axios(`http://90.156.209.53:12500/api/v1/about-us/get-about-us-page/${selectedLanguage}/`)
            .then(res => setAboutUs(res.data))
    },[selectedLanguage])

    return (
        <section className={style.about__us}>
            <AboutUsPreview image={aboutUs?.preview_image_url || ""} title={aboutUs?.title || ""}/>
            <div className="container">
                <div className={style.about__us__image__description}>
                    {
                        aboutUs?.appeal
                    }
                </div>
            </div>

            <AboutUsFirstBlock data={aboutUs}/>
            <SecondBlock data={aboutUs}/>
        </section>
    );
};

export default AboutUsPage;