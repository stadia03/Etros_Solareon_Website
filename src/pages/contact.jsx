import React from "react";
import ContactForm from "../components/ContactForm";
import PDF from "../components/Pdf";

const Contact = () => {
  return (
    <div className="max-h-screen w-full bg-primary">
      <ContactForm />
      {/* <PDF/> */}
    </div>
  );
};

export default Contact;
