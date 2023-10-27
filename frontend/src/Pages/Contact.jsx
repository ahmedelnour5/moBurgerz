import React, { useState } from "react";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <form
        className="p-10 space-y-3 w-full flex flex-col items-center "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col ">
          <label for="name" className="">
            Name:
          </label>
          <input
            type="text"
            placeholder="First Name"
            name="name"
            id="name"
            className="border-2 border-black px-2 py-1 w-80"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col">
          <label for="name">Email:</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            className="border-2 border-black px-2 py-1 w-80"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col">
          <label for="phoneNumber">Phone Number:</label>
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            id="phoneNumber"
            className="border-2 border-black px-2 py-1 block w-80"
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col">
          <label for="message">Message:</label>
          <textarea
            placeholder="Message"
            name="message"
            id="message"
            className="border-2 border-black w-80 px-2 py-1"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="text-center">
          <button
            className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-black hover:text-white"
            type="submit"
            onClick={handleSubmit}
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
