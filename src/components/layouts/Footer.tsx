import React from "react";
import { Icons } from "../shared/Icons";

export const footerIcons = [
  {
    icon: <Icons.fb />,
    path: "/facebook",
  },
  { icon: <Icons.insta />, path: "/instagram" },
  {
    icon: <Icons.x />,
    path: "/x",
  },
  { icon: <Icons.link />, path: "/linkedin" },
];

function Footer() {
  return (
    <footer className="w-full items-center flex flex-col lg:flex-row lg:justify-between gap-[60px] lg:text-[14px] font-normal lg:leading-[16.41px] bg-[url(/assets/footerimg.png)] text-[16px] leading-[18.75px]  text-[#FBF6FF] bg-no-repeat bg-cover bg-center px-[38px] py-[52px] lg:px-[119px] lg:py-[63px] ">
      <section className="w-full max-w-screen-lg  flex flex-col underline gap-8">
        <p>Privacy policy</p>
        <p>Cookie & privacy preferences</p>
      </section>
      <span className="hidden w-full items-center gap-2 lg:flex">
        <Icons.group />
        Copyright Devspace
      </span>
      <div className=" flex gap-[62px] lg:gap-[30px]">
        {footerIcons.map((item, index) => (
          <a key={index} href={item.path} aria-label={`Go to ${item.path}`}>
            {item.icon}
          </a>
        ))}
      </div>
      <span className="flex items-center gap-2 lg:hidden">
        <Icons.group />
        Copyright Devspace
      </span>
    </footer>
  );
}

export default Footer;
