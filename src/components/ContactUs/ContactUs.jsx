import style from './ContactUs.module.css'
import { t } from "i18next";

export function ContactUs() {
    console.log();
    return(
        <div className={style.container}>
            <h1 className={style.title}>{t(`contactus.title`)}</h1>
            <p className={style.text}>{t(`contactus.text`)}</p>
            <form action="https://submit-form.com/P1j7Dh64i" className={style.component} name="contact_form" autoComplete="on" noValidate method="POST">
                <div className={style.gridContainer}>
                    <div className={style.item}>
                        <label htmlFor="name" className={style.gridItem1}>{t(`contactus.name`)}*</label>
                        <input type='text' id="name" name='name' className={style.input} required></input>
                    </div>
                    <div className={style.item}>
                        <label htmlFor="email" className={style.gridItem2}>EMAIL*</label>
                        <input type='email' id='email' name='email' className={style.input} required></input>
                    </div>
                    <div className={style.item}>
                        <label htmlFor='phone' className={style.gridItem3}>{t(`contactus.phone`)}*</label>
                        <input type='tel' id='phone' name='phone' className={style.input} required></input>
                    </div>
                    <div className={style.itemcontact}>
                        <label htmlFor='prefer' className={style.gridItem4}>{t(`contactus.prefer`)}</label>
                        <input type='text' id='prefer' name='prefer' className={style.input}></input>
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
