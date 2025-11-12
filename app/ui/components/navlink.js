import portfolioData from "@/app/data/data";

const NavLinks = ({
  className = "",
  setIsMobileMenuOpen,
}) => {
  const navItems = ["About", "Skills", "Experience", "Projects"];

  return (
    <nav className={className}>
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setIsMobileMenuOpen(false)}
          className="px-3 py-2 text-gray-300 rounded-md text-sm font-medium hover:text-white hover:bg-gray-800 transition-colors"
        >
          {item}
        </a>
      ))}
      <a
        href={`mailto:${portfolioData.contact.email}`}
        className="px-3 py-2 text-gray-300 rounded-md text-sm font-medium hover:text-white hover:bg-gray-800 transition-colors md:hidden"
      >
        Contact
      </a>
    </nav>
  );
};

export default NavLinks;
