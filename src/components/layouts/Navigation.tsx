import { cn } from "@/lib/utils";

import { navigationLinks } from "@/utils/siteData";
import NavigationLink from "./NavigationLinks";

interface NavigationProps {
  slug?: string;
  isMenuOpen?: boolean;
  toggleSidebar: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  toggleSidebar,
}) => {
  return (
    <>
      <nav
        className={cn(
          `hidden lg:flex lg:items-center gap-[38px]`,

          isMenuOpen &&
            `z-20 
        flex flex-col
        animate-link-opacity
        gap-[53px]
        absolute
        top-1/2
        left-0
        transform translate-x-10 -translate-y-1/2 `
        )}
      >
        {navigationLinks.map((link) => (
          <NavigationLink
            key={link.name}
            href={link.path}
            onClick={() => isMenuOpen && toggleSidebar()}
          >
            {link.name}
          </NavigationLink>
        ))}
      </nav>
    </>
  );
};

export default Navigation;
