import React, {useEffect, useState} from 'react';
import styles from "./MainPage.module.scss"
import MainPreview from "../../components/Main/MainPreview/MainPreview";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";


const data = {
  cards:[
    {
      img:"https://cdn.discordapp.com/attachments/978515025473966083/1082264104682651648/2.png",
      text:" Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur."
    },
    {
      img:"https://cdn.discordapp.com/attachments/978515025473966083/1082033312836632646/image.png",
      text:" Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur."
    },
    {
      img:"https://cdn.discordapp.com/attachments/978515025473966083/1082031624398577804/photo_2_2023-03-06_02-06-14.jpg",
      text:" Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur."
    },
    {
      img:"https://cdn.discordapp.com/attachments/978515025473966083/1082031700827176961/photo_22_2023-03-06_02-06-14.jpg",
      text:" Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur."
    },
    {
      img:"https://cdn.discordapp.com/attachments/978515025473966083/1082031624193060984/photo_1_2023-03-06_02-06-14.jpg",
      text:" Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur."
    },
    {
      img:"https://cdn.discordapp.com/attachments/978515025473966083/1082031625233236058/photo_6_2023-03-06_02-06-14.jpg",
      text:" Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur."
    },
  ]
}
interface IProps {
  selectedLanguage:string | undefined,

}

const MainPage = ({selectedLanguage}:IProps) => {
  const [toggleModal, setToggleModal] = useState(false)


  const handleShowModal = () => {
    setToggleModal(!toggleModal)
    document.body.style.overflow = !toggleModal ? "hidden" : "auto"
  }
  useEffect(() => {
    document.body.style.overflow = toggleModal ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = toggleModal ? "hidden" : "auto"
    }
  },[])

  return (
    <section className={styles.tickets}>

      <MainPreview />

      <button onClick={handleShowModal} className={styles.tickets__btn}>
      регистрация
      </button>

      <p className={styles.nameTitle}>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing.
          <br/>
        </span>
        Lorem ipsum dolor sit.
        Lorem ipsum dolor sit amet, consectetur.
        Lorem ipsum dolor sit amet, consectetur.
      </p>

      <div className={styles.tickets__card__box}>
        {
          data.cards.map(it => {
            return (
                <div className={styles.ticket__card}>
                  <div className={styles.ticket__img}>
                    <img src={it.img} alt="logo" />
                  </div>
                  <div className={styles.ticket__text}>
                    <p>{it.text}</p>
                  </div>
                </div>
            )
          })
        }

      </div>
      {toggleModal && <RegistrationForm handleShowModal={handleShowModal}/>}
    </section>
  );
};

export default MainPage;