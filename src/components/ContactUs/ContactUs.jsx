import { ErrorMessage, Formik} from 'formik';
import * as Yup from "yup";
import { t } from "i18next";
import { ContactBackground, ContactButton, ContactComment, ContactContainer, ContactForm, ContactGrid, ContactGridItem, ContactImage, ContactInput, ContactItem1, ContactItem2, ContactItem3, ContactItem4, ContactItem5, ContactPrefer, ContactText, ContactTextarea, ContactTitle } from './ContactUsStyled.jsx';
import { useDispatch } from 'react-redux';
import { sendMail } from '../../redux/mail/operation.js';

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
    
    return(
        <ContactContainer >
            <ContactTitle >{t(`contactus.title`)}</ContactTitle>
            <ContactText>{t(`contactus.text`)}</ContactText>
            <Formik
                initialValues={initialValues}
                validationSchema={validateSchema}
                onSubmit={(values) => {
                    dispatch(sendMail(values))
                }}
                >
            
                <ContactForm >
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
                <ContactButton type='submit' >{t(`contactus.button`)}<ContactImage src="/arrowcontacts.png"/></ContactButton>
            </ContactForm>
            </Formik>
            <ContactBackground></ContactBackground>
        </ContactContainer>
    )
}
