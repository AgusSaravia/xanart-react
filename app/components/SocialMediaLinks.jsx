import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTelegram, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const iconMapping = {
  facebook: { icon: faFacebook, size: '2x' },
  telegram: { icon: faTelegram, size: '2x' },
  instagram: { icon: faInstagram, size: '2x' },
  whatsapp: { icon: faWhatsapp, size: '2x' }
  // Agrega más plataformas y sus iconos según sea necesario
};

const SocialMediaLink = ({ platform, link }) => (
  <li className='list-none'>
    <a alt={platform} href={link} target="_blank" rel="noopener noreferrer">
      {iconMapping[platform] && (
        <FontAwesomeIcon icon={iconMapping[platform].icon} size={iconMapping[platform].size || ''} />
        )}
    </a>
  </li>
);

const SocialMediaLinks = ({ artist, className,container}) => {
  const links = artist ? artist.links : {};  
   
 return( <div>
    <ul className={container}>
      {Object.entries(links).map(([platform, link], index) => (
        <SocialMediaLink container={`${className}`} key={index} platform={platform} link={link} />
      ))}
    </ul>
  </div>)
};

export default SocialMediaLinks;