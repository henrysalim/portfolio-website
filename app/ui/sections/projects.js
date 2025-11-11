import portfolioData from "@/app/data/data";
import Pill from "../components/pill";
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";
import ExternalLinkIcon from "../icons/external";
import GithubIcon from "../icons/github";

const Projects = () => (
  <Section id="projects">
    <SectionTitle>Projects</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {portfolioData.projects.map((project) => (
        <div
          key={project.title}
          className="flex flex-col h-full bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-lg"
        >
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-semibold text-white mb-3">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.split(", ").map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
            <p className="text-gray-400 text-sm">{project.description}</p>
          </div>
          <div className="p-6 bg-gray-900/50 border-t border-gray-800 flex justify-end gap-4">
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              Source Code
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Projects;
