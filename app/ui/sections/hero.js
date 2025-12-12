import portfolioData from "@/app/data/data";
import Section from "../components/section";
import GithubIcon from "../icons/github";
import LinkedinIcon from "../icons/linkedin";
import MailIcon from "../icons/mail";

const Hero = () => (
  <Section id="home" className="pt-32 md:pt-48 text-center">
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
      {portfolioData.name}
    </h1>
    <p className="mt-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
      {portfolioData.headline}
      <br />
      <span className="text-lg text-gray-500">
        {portfolioData.contact.location}
      </span>
    </p>
    <div className="mt-10 flex justify-center gap-4">
      <a
        href={portfolioData.contact.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex ease-in-out duration-300 hover:-translate-y-2 items-center gap-2 px-6 py-3 border border-gray-700 text-sm font-medium rounded-lg text-gray-300 bg-gray-900 hover:bg-gray-800 hover:border-gray-600 transition-all"
      >
        <GithubIcon />
        GitHub
      </a>
      <a
        href={portfolioData.contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center ease-in-out duration-300 hover:-translate-y-2 gap-2 px-6 py-3 border border-gray-700 text-sm font-medium rounded-lg text-gray-300 bg-gray-900 hover:bg-gray-800 hover:border-gray-600 transition-all"
      >
        <LinkedinIcon className="h-5 w-5" />
        LinkedIn
      </a>
      <a
        href={`mailto:${portfolioData.contact.email}`}
        className="inline-flex items-center ease-in-out duration-300 hover:-translate-y-2 gap-2 px-6 py-3 border border-gray-700 text-sm font-medium rounded-lg text-gray-300 bg-gray-900 hover:bg-gray-800 hover:border-gray-600 transition-all"
      >
        <MailIcon className="h-5 w-5" />
        Email
      </a>
    </div>
  </Section>
);

export default Hero;
