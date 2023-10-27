import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faFacebook, faTelegram, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const iconMapping = {
  facebook: { icon: faFacebook, size: '2x' },
  telegram: { icon: faTelegram, size: '2x' },
  instagram: { icon: faInstagram, size: '2x' },
  whatsapp: { icon: faWhatsapp, size: '2x' }
    // Agrega más plataformas y sus iconos según sea necesario
  };

const SocialMediaLinks = ({ artist }) => {
    const links = artist ? artist.links : {};  
  return (
    
      <ul className='flex gap-[8rem] w-full'>
        {Object.entries(links).map(([platform, link], index) => (
          <li key={index}>
            <a alt={platform} href={link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={iconMapping[platform].icon } size={iconMapping[platform].size}/>
            </a>
          </li>
        ))}
      </ul>
    
  );
};

export default SocialMediaLinks;