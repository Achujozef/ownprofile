import React from "react";

const Contact = () => {
  return (
    <section className="contactSession bg-secondery px-5 py-32  rounded-tl-full" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-medium  mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p className="font-light text-md">
          I am currently open for a fulltime Full Stack Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>
        <br />
        <p className="py-2 font-thin text-md">
          <span >Email:</span> achujosephsl@gmail.com
        </p>
        <p className="py-2 font-thin text-md">
          <span>Whatsapp:</span>+91 7736448062
        </p>
        <p className="py-2 font-thin text-md">
          <span>Phone:<a href="tel:+917306129332">+91 7736448062</a></span>
        </p>
      </div>
    </section>
  );
};

export default Contact;