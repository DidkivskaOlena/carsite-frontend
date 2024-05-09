import { t } from 'i18next'
import { ButtonModalFaq, Modal, ModalText } from '../Hero/HeroCompStyle'
import style from './Services.module.css'

export function Services(){
    return(
        <div className={style.container}>
            <Modal>
                <ModalText>{t(`modal.greetings`)}</ModalText>
                <ModalText>{t(`modal.conditions`)}</ModalText>
                <ModalText>{t(`modal.request`)}</ModalText>
            <ButtonModalFaq href="/">{t(`modal.btn`)}</ButtonModalFaq>
        </Modal>
        </div>
    )
}