import portfolioData from "@/app/data/data";
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";

const Experience = () => (
  <Section id="experience">
    <SectionTitle>Work & Organizational Experience</SectionTitle>
    <div className="flex flex-col gap-12">
      {portfolioData.experiences.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-6 p-6 bg-gray-900 border border-gray-800 rounded-lg shadow-lg"
        >
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
            <p className="text-gray-400 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 mt-1">{exp.date}</p>
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-300">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Experience;
