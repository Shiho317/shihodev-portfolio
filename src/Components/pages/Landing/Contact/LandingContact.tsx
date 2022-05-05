import {
  ContactContents,
  ContactTitle,
  ContactWrapper,
} from "./LandingContact.style";
import ContactForm from "./ContactForm";

const LandingContact = () => {
  return (
    <ContactWrapper>
      <ContactContents>
        <ContactTitle>
          <h1>Contact me!! I am excited to talk to you.</h1>
        </ContactTitle>
        <ContactForm />
        <div className="cream-1"></div>
        <div className="cream-2"></div>
        <div className="blue-1"></div>
      </ContactContents>
    </ContactWrapper>
  );
};

export default LandingContact;
