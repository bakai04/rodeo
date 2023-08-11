import React, { useEffect, useState } from 'react';
import style from "./ChampionsPage.module.scss"
import ChampionPreview from "../../components/Champions/ChampionPreview/ChampionPreview";
import ChampionTurneyCard from "../../components/Champions/ChampionTurneyCard/ChampionTurneyCard";
import ChampionCard from "../../components/Champions/ChampionCard/ChampionCard";
import ChampionSubCard from "../../components/Champions/ChampionSubCard/ChampionSubCard";
import video from "../../assets/images/championPreview.mp4";
import axios from "axios";
import { IChampion } from "../../shared/types";
const arr = {
    preview: {
        video: video
    },
    champions: [

        {
            champion: {
                name: "Иванов Иван Иванович",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                    " Accusamus adipisci aliquid architecto blanditiis commodi cum " +
                    "cumque delectus deleniti dignissimos dolore dolorem dolores eaque " +
                    "earum est ex facilis id ipsum maiores maxime mollitia nobis pariatur " +
                    "quaerat quas quasi quo quod recusandae saepe sapiente, sed similique " +
                    "temporibus tenetur ullam velit veniam veritatis voluptate voluptatibus!" +
                    " Corporis dolor, doloremque ipsum sint soluta vel voluptas.",
                img: "https://cdn.discordapp.com/attachments/978515025473966083/1082208151933296660/image.png"
            },
            second: {
                name: "Иванов Иван Иванович",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, modi, quidem!",
                img: "https://cdn.discordapp.com/attachments/978515025473966083/1082208151933296660/image.png"
            },
            third: {
                name: "Иванов Иван Иванович",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, modi, quidem!",
                img: "https://cdn.discordapp.com/attachments/978515025473966083/1082208151933296660/image.png"
            }

        },
        {
            champion: {
                name: "Исраилов Исраил Исраилович",
                text: "qwertyuiukjhngbfv." +
                    " Accusamus adipisci aliquid architecto blanditiis commodi cum " +
                    "cumque delectus deleniti dignissimos dolore dolorem dolores eaque " +
                    "earum est ex facilis id ipsum maiores maxime mollitia nobis pariatur " +
                    "quaerat quas quasi quo quod recusandae saepe sapiente, sed similique " +
                    "temporibus tenetur ullam velit veniam veritatis voluptate voluptatibus!" +
                    " Corporis dolor, doloremque ipsum sint soluta vel voluptas.",
                img: "https://cdn.discordapp.com/attachments/978515025473966083/1082206930723946506/image.png"
            },
            second: {
                name: "Исраилов Исраил Исраилович",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, modi, quidem!",
                img: "https://cdn.discordapp.com/attachments/978515025473966083/1082206930723946506/image.png"
            },
            third: {
                name: "Исраилов Исраил Исраилович",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, modi, quidem!",
                img: "https://cdn.discordapp.com/attachments/978515025473966083/1082206930723946506/image.png"
            }
        },
        {
            champion: {
                name: "Шаирбеков Шаирбек Шаирбекович",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                    " Accusamus adipisci aliquid architecto blanditiis commodi cum " +
                    "cumque delectus deleniti dignissimos dolore dolorem dolores eaque " +
                    "earum est ex facilis id ipsum maiores maxime mollitia nobis pariatur " +
                    "quaerat quas quasi quo quod recusandae saepe sapiente, sed similique " +
                    "temporibus tenetur ullam velit veniam veritatis voluptate voluptatibus!" +
                    " Corporis dolor, doloremque ipsum sint soluta vel voluptas.",
                img: "https://cdn.discordapp.com/attachments/978515025473966083/1082207108956688435/image.png"
            },
            second: {
                name: "Шаирбеков Шаирбек Шаирбекович",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, modi, quidem!",
                img: "https://cdn.discordapp.com/attachments/978515025473966083/1082207108956688435/image.png"
            },
            third: {
                name: "Шаирбеков Шаирбек Шаирбекович",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, modi, quidem!",
                img: "https://cdn.discordapp.com/attachments/978515025473966083/1082207108956688435/image.png"
            }
        },
        {
            champion: {
                name: "Шарапидинов Шарапидин Шарапидинович",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                    " Accusamus adipisci aliquid architecto blanditiis commodi cum " +
                    "cumque delectus deleniti dignissimos dolore dolorem dolores eaque " +
                    "earum est ex facilis id ipsum maiores maxime mollitia nobis pariatur " +
                    "quaerat quas quasi quo quod recusandae saepe sapiente, sed similique " +
                    "temporibus tenetur ullam velit veniam veritatis voluptate voluptatibus!" +
                    " Corporis dolor, doloremque ipsum sint soluta vel voluptas.",
                img: "https://cdn.discordapp.com/attachments/978515025473966083/1082207207308926997/image.png"
            },
            second: {
                name: "Шарапидинов Шарапидин Шарапидинович",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, modi, quidem!",
                img: "https://cdn.discordapp.com/attachments/978515025473966083/1082207207308926997/image.png"
            },
            third: {
                name: "Шарапидинов Шарапидин Шарапидинович",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, modi, quidem!",
                img: "https://cdn.discordapp.com/attachments/978515025473966083/1082207207308926997/image.png"
            }
        },
        {
            champion: {
                name: "Влади́мир Ильи́ч Ле́нин",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                    " Accusamus adipisci aliquid architecto blanditiis commodi cum " +
                    "cumque delectus deleniti dignissimos dolore dolorem dolores eaque " +
                    "earum est ex facilis id ipsum maiores maxime mollitia nobis pariatur " +
                    "quaerat quas quasi quo quod recusandae saepe sapiente, sed similique " +
                    "temporibus tenetur ullam velit veniam veritatis voluptate voluptatibus!" +
                    " Corporis dolor, doloremque ipsum sint soluta vel voluptas.",
                img: "https://cdn.discordapp.com/attachments/978515025473966083/1082207342801715371/image.png"
            },
            second: {
                name: "Влади́мир Ильи́ч Ле́нин",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, modi, quidem!",
                img: "https://cdn.discordapp.com/attachments/978515025473966083/1082207342801715371/image.png"
            },
            third: {
                name: "Влади́мир Ильи́ч Ле́нин",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, modi, quidem!",
                img: "https://cdn.discordapp.com/attachments/978515025473966083/1082207342801715371/image.png"
            }
        }
    ]
}

interface IProps {
    selectedLanguage: string | undefined,

}
const url = import.meta.env.VITE_REACT_APP_BASE_URL
const ChampionsPage = ({ selectedLanguage }: IProps) => {
    const [champions, setChampions] = useState([])
    const [currentTournament, setCurrenTournament] = useState<IChampion | null>(null)


    useEffect(() => {
        axios(`${url}champions/get-champion-page/${selectedLanguage}/`)
            .then(res => {
                setChampions(res.data.data)
                setCurrenTournament(res.data.data[0])
            })
    }, [selectedLanguage])

    return (
        <section className={style.champion}>
            <ChampionPreview data={arr.preview.video} />
            <div className={style.tourney__flex__box}>
                {
                    champions?.map((it, idx) => {
                        return (
                            <ChampionTurneyCard
                                key={idx}
                                setCurrenTournament={setCurrenTournament}
                                it={it}
                                idx={idx + 1} />
                        )
                    })
                }
            </div>
            <div className={style.champion__content__box}>
                <div className="container">
                    <ChampionCard currentTournament={currentTournament?.first_place} />
                    <div className={style.champion__subcard__flex__box}>
                        <ChampionSubCard currentTournament={currentTournament?.second_place} />
                        <ChampionSubCard currentTournament={currentTournament?.third_place} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChampionsPage;