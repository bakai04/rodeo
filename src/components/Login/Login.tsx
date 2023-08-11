import React from 'react';
import css from './Login.module.scss'

const Login = () => {
    return (
        <div className={css.wrapper}>
            <form>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklFXBAf5NCoVlbif3m18DPMZoKnVvOUATIQ&usqp=CAU" alt="" />
                <p>Авторизация</p>
                <input type="text" placeholder='Логин' className={css.login} />
                <input type="password" placeholder='Пароль' className={css.password} />
                <input type="checkbox" className={css.custom_checkbox} id="pass" name="pass" value="yes" />
                <label htmlFor="pass">Запомнить пароль</label>
                <button>Войти</button>
            </form>
        </div>
    );
};

export default Login;