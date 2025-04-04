import { t } from 'i18next'
import { CustomerContainer, FaqContainer, FormContainer, TitleItemFaq } from './FaqCompStyled.jsx'

export function Faq() {
    return(
        <FaqContainer>
            <CustomerContainer>
                <TitleItemFaq>GET IN TOUCH</TitleItemFaq>
            </CustomerContainer>
            <FormContainer></FormContainer>
        </FaqContainer>
    )
}
