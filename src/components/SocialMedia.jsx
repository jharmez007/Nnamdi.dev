import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialMedia = () => {
  return (
    <div className = "app__social">
      <div>
        <a href="https://twitter.com/brodannamdi_" target="_blank" rel="noreferrer">
          <FaXTwitter />
        </a>
      </div>
      <div>
        <a href="https://github.com/jharmez007" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
      <div>
       <a href="https://www.linkedin.com/in/agu-james-19a8a91a9/" target="_blank" rel="noreferrer">
         <FaLinkedin />
       </a>
      </div>
    </div>
  )
}

export default SocialMedia
