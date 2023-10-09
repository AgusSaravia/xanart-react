import React from 'react'
const LINK_CLASS = ' w-fit underlined text-red-700 hover:text-red-600 focus:text-red-600 border-b-[1px]  border-red-700 font-light text-[18px]'
const PARAGRAPH = "text-[2rem] lg:text-[1.6rem] flex flex-wrap flex-col"
const LIST_CLASS = 'px-5 lg:mx-[7rem] flex flex-col justify-between '
const CallToAction = () => {
  return (
    <div className='p-4  bg-zinc-900 sm:w-full '>
      <ul className='grid  sm:grid-flow-row lg:grid-flow-col   md:grid-flow-col gap-10'>
        <li className={LIST_CLASS}>
          <div className={PARAGRAPH}>
            Que debo saber para tatuarme:
              *algo
              *algo
              *algo mas

          </div>
          <a className={LINK_CLASS} href="/Contact-Us">Contactame </a>
        </li>
        <li className={LIST_CLASS}>
          <div className={PARAGRAPH}>
            <p className="text-[2rem] lg:text-[1.6rem] lg:max-w-[30rem]">
              Si no sabes como cuidar tu tatuaje o tenes idea pero dudas de algo. <br />
              Prepare una guia para despejar preguntas frecuentas 
            </p>
            <a className={LINK_CLASS} href="/Cuidados/page.jsx">Cuidados</a>
          </div>
        </li>
      </ul>


    </div>
  )
}

export default CallToAction