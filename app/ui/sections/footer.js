import portfolioData from "@/app/data/data";
import GithubIcon from "../icons/github";
import LinkedinIcon from "../icons/linkedin";
import MailIcon from "../icons/mail";

const Footer = () => (
  <footer className="border-t border-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} {portfolioData.name}. All rights
        reserved.
      </p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a
          href={portfolioData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-300 transition-colors"
        >
          <GithubIcon className="h-5 w-5" />
        </a>
        <a
          href={portfolioData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-300 transition-colors"
        >
          <LinkedinIcon className="h-5 w-5" />
        </a>
        <a
          href={`mailto:${portfolioData.contact.email}`}
          className="text-gray-500 hover:text-gray-300 transition-colors"
        >
          <MailIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
