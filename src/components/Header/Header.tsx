import React, {useState} from 'react';
import style from "./Header.module.scss"
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import LanguageSelect from "./LanguageSelect/LanguageSelect";
const Links = [
  {
    link: '/news',
    title: "НОВОСТИ"
  },
  {
    link: '/gallery',
    title: "ГАЛЕРЕЯ"
  },
  {
    link: '/tournaments',
    title: "ТУРНИРЫ"
  },
  {
    link: '/champions',
    title: "Чемпионы"
  },
  {
    link: '/about-us',
    title: "О НАС"
  },
]
type LanguageOption = {
  value: string;
  label: string;
}
const languageOptions: LanguageOption[] = [
  {value: 'russian', label: 'RU'},
  {value: 'kyrgyz', label: 'KG'},
  {value: 'english', label: 'EN'},
];
interface IProps {
  selectedLanguage:string | undefined,
  setSelectedLanguage: (value: string | undefined) => void,
}


const Header = ({selectedLanguage, setSelectedLanguage}:IProps) => {
  return (
    <header className={style.headers}>
      <div className={style.header__container}>
        <div className={style.header__logo__box}>
          <NavLink to={"/"}><img src={logo} alt="logo" /></NavLink>
        </div>
        <nav className={style.header__nav__bar}>

          {Links.map((item, index) =>
            <NavLink key={index}
              className={({ isActive }) =>
                isActive ? style.activeClassName : ""
              } to={item.link}>{item.title}</NavLink>
          )}

        </nav>
        <div className={style.header__second__logo__box}>
         <LanguageSelect setSelectedLanguage={setSelectedLanguage} languageOptions={languageOptions} selectedLanguage={selectedLanguage} />
        </div>
      </div>
    </header>
  );
};

export default Header;