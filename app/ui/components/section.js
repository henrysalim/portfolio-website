const Section = ({ children, id, className = "" }) => (
  <section
    id={id}
    className={`w-full max-w-5xl mx-auto px-4 md:px-8 py-20 md:py-28 ${className}`}
  >
    {children}
  </section>
);

export default Section;
