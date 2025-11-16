import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-900">Let's Connect</h3>
            <p className="text-gray-500 mt-1">Feel free to reach out for collaborations or a chat.</p>
          </div>
          <div className="flex space-x-6">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href={SOCIAL_LINKS.email} className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
              <MailIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Parth Kale. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
