'use client'
import Header from 'app/Header.jsx'
import Hero from './components/Hero'

const INPUT_CLASSES = "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

function FormInput({ title, id, inputProps }) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor={id}>
        {title}
      </label>
      <div className="mt-2">
        <input className={INPUT_CLASSES} name={inputProps}  />
      </div>
    </div>
  )
}
function Form() {
  return (
    <section className="w-full max-w-lg">
      <h2 className="text-base font-semibold leading-7 text-gray-900">Contactame!</h2>
      <form action="#" method="post">
        <FormInput title="coso" id="jaja" />
        <input type="text" name="Name" id="name" placeholder="Nombre" />
        <input type="text" name="Surname" id="surname" placeholder="Apellido" />
        <input type="email" name="Email" id="email" placeholder="Email" />
        <input placeholder="Telefono" type="tel" id="phone" name="Phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3} " />
        <button type="submit" id="form-submit">GO!</button>
      </form>
    </section>
  )
}




export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between ">
      <Header/>
      <Hero/>
      <Form />
    </main>
  )
}
