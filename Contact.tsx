import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="py-16 bg-[#050709]">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <ContactForm />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
          className="mx-auto"
        >
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
