import portfolioData from "@/app/data/data";
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";
import Image from "next/image";

const About = () => (
  <Section id="about">
    <SectionTitle>About Me</SectionTitle>
    <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
      <div className="w-full flex justify-center lg:justify-start lg:w-1/4">
        <Image
          src="/henry.jpeg"
          alt="Henry Salim"
          width={400}
          height={400}
          className="rounded-full"
        />
      </div>
      <p className="text-lg text-gray-300 text-justify leading-relaxed whitespace-pre-line w-full lg:w-3/4">
        {portfolioData.about}
      </p>
    </div>
  </Section>
);

export default About;
