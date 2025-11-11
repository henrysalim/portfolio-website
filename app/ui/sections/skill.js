import portfolioData from "@/app/data/data";
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";

const Skills = () => (
  <Section id="skills">
    <SectionTitle>Technical Skills</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioData.skills.map((skill) => (
        <div
          key={skill.category}
          className="p-6 bg-gray-900 border border-gray-800 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            {skill.category}
          </h3>
          <p className="text-gray-400">{skill.items}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;
