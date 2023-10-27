import React from 'react';
import SocialMediaLinks from './SocialMediaLinks';
import { artists, navigation } from '../data';
import NavLinks from './NavLinks.jsx'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='py-5 h-auto w-full bg-zinc-950 flex flex-col justify-center items-center'>
     <div className='w-[70%] flex justify-center border-b'> 
     <a href="/"> <Image
      className=' h-auto'
        src={'/xanart.png'}
        width={200}
        height={100}
        alt="Xanart logo "
      /></a>
      



     </div>
      <nav className='px-9 py-4 list-none flex flex-col'>
        <div className='flex text-xs py-4'>
        <NavLinks links={navigation}/>
        </div>
        <div className='flex flex-row'>

          {artists.map((artist, index) => (
          <SocialMediaLinks key={index} artist={artist} />
        ))}        
        </div>
       
      
      </nav>
      <span className='text-xs'>Developed by <a href="https://www.github.com/AgusSaravia" target='_blank'  >Agustin Saravia</a></span>
    </footer>
  );
};

export default Footer;

//{artists.map((artist, index) => (
  //<SocialMediaLinks key={index} artist={artist} />
//))}