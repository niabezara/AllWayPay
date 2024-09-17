import React from "react";

const links = [
  { name: "home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "projects", href: "#projects" },
  { name: "partners", href: "#partners" },
  { name: "about us", href: "#about us" },
  { name: "Contact", href: "#Contact" },
];

interface NavigationProps {
  isMenuOpen?: boolean;
  desktopSize?: boolean;
}

export default function Navigation({
  isMenuOpen,
  desktopSize,
}: NavigationProps) {
  return (
    <>
      {!desktopSize && isMenuOpen && (
        <nav data-openmobile={isMenuOpen} className="">
          <ul>
            <li>
              {links.map((link) => (
                <div key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </div>
              ))}
            </li>
          </ul>
        </nav>
      )}
      {desktopSize && (
        <nav>
          <ul>
            <li>
              {links.map((link) => (
                <div key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </div>
              ))}
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
