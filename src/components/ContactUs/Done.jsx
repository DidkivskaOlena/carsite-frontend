import { DoneButton, DoneContainer, DoneText, DoneTitle } from "./ContactUsStyled";
import { t } from "i18next";

export function Done(){
    return (
        <DoneContainer>
            <DoneTitle>{t(`done.title`)}</DoneTitle>
            <DoneText>{t(`done.text`)}</DoneText>
            <DoneButton href="/" type="button">{t(`done.button`)}</DoneButton>
        </DoneContainer>
    )
}