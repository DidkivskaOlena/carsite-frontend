import style from './ContactUs.module.css'
import { t } from "i18next";

export function ContactUs() {
    return(
        <div className={style.container}>
            <h1 className={style.title}>{t(`contactus.title`)}</h1>
            <p className={style.text}>{t(`contactus.text`)}</p>
            <form className={style.component} name="contact_form" autoComplete="on" noValidate>
                <div className={style.gridContainer}>
                    <div className={style.item}>
                        <label className={style.gridItem1}>{t(`contactus.name`)}*</label>
                        <input type='text' name='name' className={style.input} required></input>
                    </div>
                    <div className={style.item}>
                        <label className={style.gridItem2}>EMAIL*</label>
                        <input type='email' name='email' className={style.input} required></input>
                    </div>
                    <div className={style.item}>
                        <label className={style.gridItem3}>{t(`contactus.phone`)}*</label>
                        <input type='tel' name='phone' className={style.input} required></input>
                    </div>
                    <div className={style.itemcontact}>
                        <label className={style.gridItem4}>{t(`contactus.prefer`)}</label>
                        <input type='text' name='contact' className={style.input}></input>
                    </div>
                    <div className={style.gridItem5}>
                        <label>{t(`contactus.message`)}*<textarea rows="4" type='text' name='masssage' className={style.textarea} required></textarea></label>
                    </div>
                </div>
                <button type='submit' className={style.button}>{t(`contactus.button`)}<img className={style.buttonimg} src="/arrowcontacts.png"/></button>
            </form>
            <div className={style.background}></div>
        </div>
    )
}
