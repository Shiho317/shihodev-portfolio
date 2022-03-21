import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  ContactContents, 
  ContactInput, 
  ContactTitle, 
  ContactWrapper, 
  SubmitButton
  } from "./LandingContact.style";

interface UserDataType{
  name: string;
  email: string;
  message: string;
}

const LandingContact = () => {

  const initialData = {
    name: '',
    email: '',
    message: '',
  }

  const [ userData, setUserData ] = useState(initialData as UserDataType);

  const serviceID = `${process.env.REACT_APP_YOUR_SERVICE_ID}`;
  const templateID = `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`;
  const userID = `${process.env.REACT_APP_YOUR_USER_ID}`;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.currentTarget, userID)
    .then((result) => {
      console.log(result.text);
      alert(`Thank you ${userData.name}. Confirmation email has been sent to : "${userData.email}".`)
    }, (error) => {
      console.log(error);
      alert('Something went wrong. Please try again.')
    });
    e.currentTarget.reset();
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserData(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

  return(
    <ContactWrapper>
      <ContactContents>
        <ContactTitle>
          <h1>Contact me!! I am excited to talk to you.</h1>
        </ContactTitle>
        <ContactInput onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="NAME" onChange={handleChangeInput} required/>
          <input type="email" name="email" placeholder="EMAIL" onChange={handleChangeInput} required/>
          <textarea name="message" cols={30} rows={15} placeholder="MESSAGE" onChange={handleChangeTextarea} required></textarea>
          <SubmitButton type="submit">GET IN TOUCH</SubmitButton>
        </ContactInput>
        <div className="cream-1"></div>
        <div className="cream-2"></div>
        <div className="blue-1"></div>
      </ContactContents>
    </ContactWrapper>
  )
};

export default LandingContact;