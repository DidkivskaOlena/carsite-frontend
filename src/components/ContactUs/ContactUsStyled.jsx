import { Field, Form } from "formik";
import styled from "styled-components";

export const ContactContainer = styled.div`
        text-align: center;
        width: 100%;
        height: 100%;
    `

export const ContactForm = styled(Form)`
    background-color: #FFFFFF;
    z-index: 10;
    border: 1px solid #000000;
    border-radius: 20px;
    margin: 0 auto;

    @media (min-width: 1024px) and (max-width: 1400px) {
        width: 682px;
        height: 351px;
        padding: 40px 55px 55px 45px;
    }

    @media (min-width: 1401px) and (max-width: 1600px){
        width: 886px;
        height: 480px;
        padding: 53px 70px 70px 57px;
    }

    @media (min-width: 1601px){
        width: 1077px;
        height: 584px;
        padding: 60px 80px 80px 65px;
    }
`

export const ContactTitle = styled.h1`
    font-family: 'SA Thousand', 'Trebuchet MS', sans-serif;
    line-height: 3;
    letter-spacing: 0.08em;

    @media (min-width: 1024px) and (max-width: 1400px){
        font-size: 18px;
        margin-top: 14px;
        margin-bottom: 5px;
    }
    @media (min-width: 1401px) and (max-width: 1600px){
        font-size: 24px;
        margin-top: 18px;
        margin-bottom: 5px;
    }
    @media (min-width: 1601px){
        font-size: 27px;
        margin-top: 20px;
        margin-bottom: 5px;
    }
    `

export const ContactText = styled.p`
    font-family: "Jura", sans-serif;
    line-height: 1.1;
    letter-spacing: 0.08em;
    font-size: 16px;
    width: 50%;
    margin: 0 auto 40px;

    @media (min-width: 1024px) and (max-width: 1400px) {
        font-size: 14px;
        margin-bottom: 38px;
    }

    @media (min-width: 1401px) and (max-width: 1600px) {
        font-size: 16px;
        margin-bottom: 50px;
      }

    @media screen and (min-width: 1601px) {
        font-size: 18px;
        margin-bottom: 58px;
    }
    `


    export const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-items: stretch;

    @media (min-width: 1024px) and (max-width: 1400px) {
        grid-template-rows: 25px 6px 25px 30px;
        gap: 15px 14px;
    }

    @media (min-width: 1401px) and (max-width: 1600px) {
        gap: 20px 18px;
        grid-template-rows: 38px 8px 38px 48px;
      }

    @media screen and (min-width: 1601px) {
        gap: 25px 20px;
        grid-template-rows: 50px 10px 50px 60px;
    }
    `

    export const ContactGridItem = styled.div`
    display: flex;
    width: 100%;
    align-items: baseline;
    font-size: 16px;
    letter-spacing: 0.08em;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    /* font-weight: 600; */

    @media (min-width: 1024px) and (max-width: 1400px) {
        font-size: 14px;
    }

    @media (min-width: 1401px) and (max-width: 1600px) {
        font-size: 16px;
      }
    `

    export const ContactInput = styled(Field)`
    width: 36%;
    color: #000;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
    background: transparent;

    flex-grow: 1;
    font-size: 18px;
    letter-spacing: 0.08em;
    padding: 0 15px;
    margin-left: 10px;
    

    @media (min-width: 1024px) and (max-width: 1400px) {
        font-size: 14px;
    }

    @media (min-width: 1401px) and (max-width: 1600px) {
        font-size: 16px;
      }

      &:-internal-autofill-selected {
        background-color: white !important;
    }
    `

export const ContactTextarea = styled(Field)`
    resize: none;
    width: 100%;
    background-color: #F5F5F5;
    border: none;
    border-radius: 20px;
    padding: 15px;
    font-size: 16px;
    letter-spacing: 0.08em;
    margin-top: 9px;
    height: 120px;

    @media (min-width: 1024px) and (max-width: 1400px) {
        font-size: 14px;
        height: 70px;
    }

    @media (min-width: 1401px) and (max-width: 1600px) {
        font-size: 16px;
        height: 90px;
      }
    `

export const ContactComment = styled.p`
    grid-column: 1/2;
    font-size: 12px;
    text-align: left;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    letter-spacing: 0.08em;

    @media (min-width: 1024px) and (max-width: 1400px) {
        font-size: 8px;
    }

    @media (min-width: 1401px) and (max-width: 1600px) {
        font-size: 11px;
        
      }
    `

export const ContactPrefer = styled.div`
    grid-column: 1/3;
    display: flex;
    width: 100%;
    font-size: 16px;
    letter-spacing: 0.08em;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    align-items: baseline;

    @media (min-width: 1024px) and (max-width: 1400px) {
        font-size: 11px;
    }

    @media (min-width: 1401px) and (max-width: 1600px) {
        font-size: 14px;
      }
    `

    export const ContactItem1 = styled.label`
    grid-column: 1/2;
    line-height: 0;
    `

    export const ContactItem2 = styled.label`
    grid-column: 2/3;
    line-height: 0;
    `

    export const ContactItem3 = styled.label`
    grid-column: 1/2;
    line-height: 1.5;
    `

    export const ContactItem4 = styled.label`
    grid-column: 1/3;
    line-height: 1.1;
    `

    export const ContactItem5 = styled.div`
    text-align: left;
    grid-column: 1/3;
    font-size: 16px;
    letter-spacing: 0.08em;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    
    @media (min-width: 1024px) and (max-width: 1400px) {
        font-size: 11px;
    }

    @media (min-width: 1401px) and (max-width: 1600px) {
        font-size: 14px;
      }
    `

    export const ContactBackground = styled.div`
    background-color: black;
    width: 100%;
    height: 36vh;
    position: absolute;
    bottom: 0;
    z-index: -2;
    `

    export const ContactButton = styled.button`
    position: relative;
    left: 650px;
    top: 30px;
    display: flex;
    background-color: #DDFF00;
    border-radius: 20px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 16px;
    letter-spacing: 0.08em;
    justify-content: space-evenly;
    align-items: center;

    @media (min-width: 1024px) and (max-width: 1400px) {
        font-size: 14px;
        width: 145px;
        height: 30px;
        left: 460px;
        top: 18px;
    }

    @media (min-width: 1401px) and (max-width: 1600px) {
        font-size: 16px;
        width: 210px;
        height: 45px;
        left: 580px;
        top: 21px;
      }

    @media screen and (min-width: 1601px) {
        font-size: 18px;
        width: 240px;
        height: 51px;
        left: 730px;
        top: 23px;
    }
    `

    export const ContactImage = styled.img`
    width: 16px;
    }
    `

    export const DoneTitle = styled.h1`
       font-size: 16px;
       font-weight: 400;
       font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
       letter-spacing: 0.08em;
       margin: 0 auto;
    }
    `

    export const DoneText = styled.p`
       font-size: 16px;
       font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
       letter-spacing: 0.08em;
       width: 375px;
       margin: 50px auto;
    }
    `

    export const DoneButton = styled.a`
    background-color: #DDFF00;
    border-radius: 20px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 20px;
    letter-spacing: 0.08em;
    padding: 15px;
    text-decoration: none;

    @media (min-width: 1024px) and (max-width: 1400px) {
        font-size: 14px;
    }

    @media (min-width: 1401px) and (max-width: 1600px) {
        font-size: 18px;
      }
    `

    export const DoneContainer = styled.p`
       text-align: center;
       height: 100%;
       align-content: center;
    }
    `