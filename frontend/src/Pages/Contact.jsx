import React from "react";

const Contact = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

const ContactForm = () => {
  return (
    <div>
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
