import { ErrorMessage, Formik} from 'formik';
import { ErrorBoundary } from "react-error-boundary";
import * as Yup from "yup";
import { t } from "i18next";
import { Address, ContactBackground, ContactButton, ContactComment, ContactContainer, ContactForm, ContactGrid, ContactGridItem, ContactImage, ContactInput, ContactItem1, ContactItem2, ContactItem3, ContactItem4, ContactItem5, ContactLink, ContactPrefer, ContactText, ContactTextLink, ContactTextarea, ContactTitle, ContactTitleContainer, ContactTitleSVG, ContactTitleText, FaqContainer, FaqGrid, FaqGridItem, FaqTitle, LinkLocate, Locate, Map, MapContainer, MapTitle } from './ContactUsStyled.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { sendMail } from '../../redux/mail/operation.js';
import { selectIsSending} from '../../redux/mail/selectors.js';
import { Done } from "./Done.jsx"

const initialValues = {
    name: "", 
    email: '', 
    phone: '', 
    prefer: "",
    message: "" 
  };

const validateSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
        .max(63, "Must be between 6 and 63 characters.")
        .min(6, "Must be between 6 and 63 characters.")
        .email("Invalid email address")
        .matches(
          /[a-zA-Z]([-.\s]?[0-9a-zA-Z_-]){1,}@/,
          "The @ symbol must be preceded by at least 2 characters"
        )
        .required("Email is required"),
    phone: Yup.string()
        .required("Mobile phone is required"),
    prefer: Yup.string()
        .max(100, "Max 100 characters."),
    message: Yup.string()
        .max(500, "Must be between 5 and 500 characters.")
        .min(5, "Must be between 5 and 500 characters.")
        .required("Message is required"),
})

export function ContactUs() {
    const dispatch = useDispatch();
    const isSending = useSelector(selectIsSending);
    console.log(isSending);

    return(
        <ContactContainer >
            <ContactTitle >{t(`contactus.title`)}</ContactTitle>
            <ContactText>{t(`contactus.text`)}</ContactText>
            <ErrorBoundary 
                fallback={<ContactForm>
                            <Done/>
                        </ContactForm> }>
                        <Formik
                initialValues={initialValues}
                validationSchema={validateSchema}
                onSubmit={(values) => {
                    dispatch(sendMail(values))
                }}
                >
                <ContactForm >
                    {isSending ? (<><Done/></>) : (<>
                        <ContactGrid>
                    <ContactGridItem>
                        <ContactItem1 htmlFor="name">{t(`contactus.name`)}*</ContactItem1>
                        <ContactInput type='text' id="name" name='name' required></ContactInput>
                        <ErrorMessage name="name" component="div"></ErrorMessage>
                    </ContactGridItem>
                    <ContactGridItem>
                        <ContactItem2 htmlFor="email" >EMAIL*</ContactItem2>
                        <ContactInput type='email' id='email' name='email' required></ContactInput>
                        <ErrorMessage name="email" component="div"></ErrorMessage>
                    </ContactGridItem>
                    <ContactGridItem>
                        <ContactItem3 htmlFor='phone' >{t(`contactus.phone`)}*</ContactItem3>
                        <ContactInput type='tel' id='phone' name='phone' required></ContactInput>
                        <ErrorMessage name="phone" component="div"></ErrorMessage>
                    </ContactGridItem>
                    <ContactComment >{t(`contactus.comment`)}</ContactComment>
                    <ContactPrefer >
                        <ContactItem4 htmlFor='prefer' >{t(`contactus.prefer`)}</ContactItem4>
                        <ContactInput type='text' id='prefer' name='prefer'></ContactInput>
                        <ErrorMessage name="prefer" component="div"></ErrorMessage>
                    </ContactPrefer>
                    <ContactItem5 >
                        <label>{t(`contactus.message`)}*<ContactTextarea rows="4" type='text' name='message' required></ContactTextarea></label>
                        <ErrorMessage name="message" component="div"></ErrorMessage>
                    </ContactItem5>
                </ContactGrid>
                <ContactButton type='submit' >{t(`contactus.button`)}<ContactImage src="/arrowcontacts.png"/></ContactButton></>)}
            </ContactForm>
            </Formik>
            </ErrorBoundary>
            <ContactBackground></ContactBackground>
            <MapContainer>
                <Map>
                    <img src="/map.jpg"></img>
                    <LinkLocate href='https://www.google.com/maps/d/u/0/edit?mid=12Mu5kS4T3Re597SmVskG5tUB5b5dVh4&usp=sharing' target="_blank" rel="noopener noreferrer">
                        <Locate src='/locate_gps_navigation_pin_point_location_icon-icons.com_59906 1.png'></Locate>
                    </LinkLocate>
                </Map>
                <Address>
                    <MapTitle>Contact us</MapTitle>
                    <ul>
                        <ContactLink >
                            <ContactTitleContainer>
                            <ContactTitleSVG src='/locate_gps_navigation_pin_point_location_icon-icons.com_59906 2.svg' width={22}></ContactTitleSVG>
                                <ContactTitleText>Address</ContactTitleText>
                            </ContactTitleContainer>
                            <ContactTextLink href='https://www.google.com/maps/d/u/0/edit?mid=12Mu5kS4T3Re597SmVskG5tUB5b5dVh4&usp=sharing' target="_blank" rel="noopener noreferrer">Verre Weide 6 5, 4264KM Veen, Netherlands </ContactTextLink>
                        </ContactLink>
                        <ContactLink >
                            <ContactTitleContainer>
                                <ContactTitleSVG src="/email-envelope-outline-shape-with-rounded-corners_icon-icons.com_56530 1.svg" alt=""  width={22}/>
                                <ContactTitleText>Contact</ContactTitleText>
                            </ContactTitleContainer>
                            <ul>
                                <li><ContactTextLink href="info.automaxgarage@gmal.com">info.automaxgarage@gmal.com</ContactTextLink></li>
                                <li><ContactTextLink href="tel:+0629768160" >(0) 6 29 76 81 60</ContactTextLink></li>
                            </ul>
                        </ContactLink>
                    </ul>
                </Address>
            </MapContainer>
            <FaqContainer>
                <FaqTitle >{t(`menu.faq`)}</FaqTitle>
                <FaqGrid>
                    <FaqGridItem>
                        <ContactItem1 htmlFor="name">{t(`contactus.name`)}*</ContactItem1>
                    </FaGridItem>
                    <FaGridItem>
                        <ContactItem2 htmlFor="email" >EMAIL*</ContactItem2>
                    </FaGridItem>
                    <FaGridItem>
                        <ContactItem3 htmlFor='phone' >{t(`contactus.phone`)}*</ContactItem3>
                    </FaGridItem>
                    <FaGridItem>
                        <ContactItem1 htmlFor="name">{t(`contactus.name`)}*</ContactItem1>
                    </FaGridItem>
                    <FaGridItem>
                        <ContactItem2 htmlFor="email" >EMAIL*</ContactItem2>
                    </FaGridItem>
                    <FaGridItem>
                        <ContactItem3 htmlFor='phone' >{t(`contactus.phone`)}*</ContactItem3>
                    </FaGridItem>
                </FaqGrid>
            </FaqContainer>
        </ContactContainer>
    )
}
