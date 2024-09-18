import dynamic from "next/dynamic";

const AboutUS = dynamic(() => import("../../components/AboutUs"), {
  ssr: false,
});

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-left mx-[16px] mt-[68px] max-w-[1440px] lg:mx-[120px] lg:mt-[125px] mb-[68px]">
      <h3 className="text-[#55EDFF] text-left w-full font-medium text-[20px] lg:text-[24px] leading-[23px] lg:leading-[28px] mb-[39px] lg:mb-[55px]">
        # about us
      </h3>
      <AboutUS />
    </div>
  );
};

export default AboutPage;
