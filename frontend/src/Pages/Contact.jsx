import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <ContactForm />
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="flex flex-col ">
      <form>
        <div>
          <input type="text" placeholder="First Name" name="first_name"></input>
          <input type="text" placeholder="Last Name" name="last_name"></input>
        </div>
        <div>
          <input type="text" name="email" id="email"></input>
        </div>
      </form>
    </div>
  );
};
export default Contact;
