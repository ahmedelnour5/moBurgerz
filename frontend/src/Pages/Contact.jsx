import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto ">
      <div className="h-full flex flex-col justify-center">
        <Heading />
        <ContactForm />
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <form className="p-10 space-y-3 w-96">
        <div className="flex flex-col">
          <label for="name" className="">
            Name:
          </label>
          <input
            type="text"
            placeholder="First Name"
            name="name"
            id="name"
            className="border-2 border-black px-2 py-1"
          ></input>
        </div>
        <div className="flex flex-col">
          <label for="name">Email:</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            className="border-2 border-black px-2 py-1"
          ></input>
        </div>
        <div className="flex flex-col">
          <label for="phoneNumber">Phone Number:</label>
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            id="phoneNumber"
            className="border-2 border-black px-2 py-1 block w-full"
          ></input>
        </div>
        <div className="flex flex-col">
          <label for="message">Message:</label>
          <textarea
            placeholder="Message"
            name="message"
            id="message"
            className="border-2 border-black"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-black hover:text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const Heading = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 pb-24 text-center">
      <h2 className="text-6xl font-bold mb-6">Contact Us</h2>
      <p>Send us a message and we’ll get back to you as soon as possible.</p>
      <p>Looking forward to hearing from you</p>
    </div>
  );
};
export default Contact;
