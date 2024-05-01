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
                        <input className={style.input}></input>
                    </div>
                    <div className={style.item}>
                        <label className={style.gridItem2}>EMAIL*</label>
                        <input className={style.input}></input>
                    </div>
                    <div className={style.item}>
                        <label className={style.gridItem3}>PHONE*</label>
                        <input className={style.input}></input>
                    </div>
                    <div className={style.itemcontact}>
                        <label className={style.gridItem4}>I PREFER TO BE CONTACTED BY</label>
                        <input className={style.input}></input>
                    </div>
                    <label className={style.gridItem5}>MESSAGE*<input className={style.input}></input></label>
                </div>
                <button>Send Message</button>
            </div>
            <div className={style.background}></div>
        </div>
    )
}
