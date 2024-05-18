"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { service_ID, template_ID, public_key } from "../data";

const INPUT_CLASSES =
  "block w-full  rounded-md border-0 border-b-2 border-gray-300 appearance-none bg-transparent py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6";

function FormInput({ title, id, name, type, placeholder }) {
  return (
    <div className="w-full">
      <label
        className="block text-sm font-medium leading-6 text-gray-100"
        htmlFor={id}
      >
        {title}
      </label>
      <div className="mt-2">
        <input
          className={INPUT_CLASSES}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        service_ID.toString(),
        template_ID.toString(),
        form.current,
        public_key.toString()
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="max-w-4xl m-auto">
      <h2 className="text-base font-semibold leading-7 text-gray-100">
        Contactame!
      </h2>
      <form
        ref={form}
        action="#"
        method="post"
        className="flex flex-col gap-4 w-full"
        onSubmit={sendEmail}
      >
        <FormInput title="Nombre" type="text" name="Nombre" />
        <FormInput title="Apellido" type="text" name="Surname" />
        <FormInput title="Email" type="email" name="Email" />
        <FormInput title="Celular" type="tel" name="phone" />

        <button
          className="w-full bg-red-900 hover:bg-red-800 text-white h-10 rounded-xl"
          type="submit"
        >
          A TATUARSE
        </button>
      </form>
    </section>
  );
}

export default Form;
