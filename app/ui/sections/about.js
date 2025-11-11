import portfolioData from "@/app/data/data";
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";

const About = () => (
  <Section id="about">
    <SectionTitle>About Me</SectionTitle>
    <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
      {portfolioData.about}
    </p>
  </Section>
);

export default About;
