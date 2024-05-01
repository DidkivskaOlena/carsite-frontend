import style from './ContactUs.module.css'

export function ContactUs() {
    return(
        <div className={style.container}>
            <h1 className={style.title}>GET IN TOUCH</h1>
            <p className={style.text}>You can ask your question or simply get in touch with us by filling out the contact form below.</p>
            <div className={style.component}>
                <div className={style.gridContainer}>
                    <div className={style.item}>
                        <label className={style.gridItem1}>NAME*</label>
                        <input type='text' name='name' className={style.input} required></input>
                    </div>
                    <div className={style.item}>
                        <label className={style.gridItem2}>EMAIL*</label>
                        <input type='email' name='email' className={style.input} required></input>
                    </div>
                    <div className={style.item}>
                        <label className={style.gridItem3}>PHONE*</label>
                        <input type='tel' name='phone' className={style.input} required></input>
                    </div>
                    <div className={style.itemcontact}>
                        <label className={style.gridItem4}>I PREFER TO BE CONTACTED BY</label>
                        <input type='text' name='contact' className={style.input}></input>
                    </div>
                    <div className={style.itemmassage}>
                        <label className={style.gridItem5}>MESSAGE*</label>
                        <input type='text' name='masssage' className={style.input} required></input>
                    </div>
                </div>
                <button type='submit'>Send Message</button>
            </div>
            <div className={style.background}></div>
        </div>
    )
}
