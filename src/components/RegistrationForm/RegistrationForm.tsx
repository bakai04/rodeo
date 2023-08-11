import React, { useState } from 'react';
import css from "./RegistrationForm.module.scss"
import { useForm } from "react-hook-form";
import axios from "axios";

interface FormData {
    application_owner_name: string,
    amount_of_participants: number,
    participants_names: string,
    participants_ages: number,
    phone_numbers: number
    confirmation: boolean
}

const RegistrationForm = ({ handleShowModal }: any) => {
    const [showModal, setShowModal] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const [formData, setFormData] = useState(null);


    const onSubmit = (data: any) => {
        if (Object.keys(errors).length === 0) {
            setFormData(data);
            setShowModal(true);
        } else {
            console.log(errors);
        }
    };


    const handleModalSubmit = () => {
        axios.post("http://90.156.209.53:12500/api/v1/news/submit-application", JSON.stringify(formData))
        .then(resp => console.log(resp, "dfdf"))
        setShowModal(false);
        handleShowModal()      
    };

    const onChange = (e: any) => {
        console.log(formData)
        // @ts-ignore
        setFormData(prev => ({ ...prev, confirmation: e.target.checked }))
    }



    return (
        <div onClick={handleShowModal} className={css.registration__form__box}>
            <div onClick={e => e.stopPropagation()} className={css.reg__box}>

                <form onSubmit={handleSubmit(onSubmit)} >
                    <h2 className={css.reg__box__title}>
                        регистрация на участие в турнире
                    </h2>
                    <div className={css.user__box}>
                        <input {...register("application_owner_name", { required: true })}
                            type="text" name="application_owner_name"
                            required
                            aria-invalid={errors.application_owner_name ? "true" : "false"}
                        />
                        <label style={errors.application_owner_name ? { color: "red" } : { color: "white" }}>ФИО ЗАЯВИТЕЛЯ</label>

                    </div>
                    <div className={css.user__box}>
                        <input {...register("amount_of_participants", { required: true })} type="number" name="amount_of_participants" required />
                        <label style={errors.amount_of_participants ? { color: "red" } : { color: "white" }}>КОЛИЧЕСТВО УЧАСТНИКОВ (ОТ 5 ДО 15)</label>
                    </div>
                    <div className={css.user__box}>
                        <input {...register("participants_names", { required: true })} type="text" name="participants_names" required />
                        <label style={errors.participants_names ? { color: "red" } : { color: "white" }}>ФИО УЧАСТНИКА(ОВ)</label>
                    </div>
                    <div className={css.user__box}>
                        <input {...register("participants_ages", { required: true })} type="text" name="participants_ages" required />
                        <label style={errors.participants_ages ? { color: "red" } : { color: "white" }}>ВОЗРАСТ УЧАСТНИКА(ОВ)</label>
                    </div>
                    <div className={css.user__box}>
                        <input {...register("phone_numbers", { required: true })} type="text" name="phone_numbers" required />
                        <label style={errors.phone_numbers ? { color: "red" } : { color: "white" }}>НОМЕР ТЕЛЕФОНА (WHATSAPP,TELEGRAM)</label>
                    </div>
                    <h3>ЗАЯВИТЕЛЬ НЕСЁТ ОТВЕТСТВЕННОСТЬ ЗА УЧАСТНИКА</h3>
                    <h4 className={css.rules}>
                        <p>правила и регламент турнира</p>
                        Для «сдерживания» быка разрешается использовать только одну верёвку, которая плотно обвязана вокруг
                        тела быка и вокруг одной руки и запястья наездника; на эту руку обычно надевается перчатка.
                        Недопустимо наличие на быке седла, стремени или уздечки, также наезднику запрещается прикасаться
                        второй рукой к чему бы то ни было — верёвке, телу быка и даже собственному телу; если такое
                        происходит, то участник дисквалифицируется.
                        <br />
                        <br />
                        По формальным правилам успешность выполнения родео засчитывается всем, кто продержался на быке
                        восемь секунд, но величина оценки зависит как от длительности укрощения быка, так и от красоты
                        исполнения сдерживания быка и его послушания наезднику. Очки получают как всадник, так и бык
                        (последний — тем больше, чем смирнее себя вёл во время укрощения), после чего баллы суммируются и
                        выставляется общая оценка; если оценка получилась низкой из-за плохого поведения быка, то может быть
                        дана вторая попытка.
                    </h4>
                    <input placeholder={"Отправить Заявку"} className={css.reg__btn} type="submit" />



                    {showModal &&
                        <div onClick={() => setShowModal(!showModal)} className={css.registration__form__box}>
                            <div onClick={e => e.stopPropagation()} className={css.confirmation__form}>
                                <h3 className={css.confirmation__form__title}>
                                    Отправляя заявку, заявитель подтверждает, что соглашаеться с правиласми и условиями турнира
                                </h3>
                                <p className={css.rules}>
                                    <p>правила и регламент турнира</p>
                                    Для «сдерживания» быка разрешается использовать только одну верёвку, которая плотно обвязана вокруг
                                    тела быка и вокруг одной руки и запястья наездника; на эту руку обычно надевается перчатка.
                                    Недопустимо наличие на быке седла, стремени или уздечки, также наезднику запрещается прикасаться
                                    второй рукой к чему бы то ни было — верёвке, телу быка и даже собственному телу; если такое
                                    происходит, то участник дисквалифицируется.
                                    <br />
                                    <br />
                                    По формальным правилам успешность выполнения родео засчитывается всем, кто продержался на быке
                                    восемь секунд, но величина оценки зависит как от длительности укрощения быка, так и от красоты
                                    исполнения сдерживания быка и его послушания наезднику. Очки получают как всадник, так и бык
                                    (последний — тем больше, чем смирнее себя вёл во время укрощения), после чего баллы суммируются и
                                    выставляется общая оценка; если оценка получилась низкой из-за плохого поведения быка, то может быть
                                    дана вторая попытка.
                                </p>
                                <button disabled={
                                    // @ts-ignore
                                    !formData?.confirmation
                                } onClick={handleModalSubmit}
                                    className={
                                        // @ts-ignore
                                        formData?.confirmation ? css.confirmation__form__btn
                                            : css.confirmation__form__btn__dis}>
                                    отправить
                                </button>

                                <label className={css.confirmation__form__checkbox}>
                                    <input {...register("confirmation")} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} name="confirmation" type="checkbox" />
                                    я подтверждаю что ознакомился с регламентом и правилами турнира
                                </label>

                            </div>
                        </div>}
                </form>
            </div>
        </div>

    );
};

export default RegistrationForm;