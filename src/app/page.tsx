import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center mx-[36px] gap-4">
      <h1 className="font-medium text-[28px] leading-[32.81px] text-white text-center">
        Custom Product & Software Development Focused On Your Success
      </h1>
      <Image
        src="/assets/dd.png"
        width={500}
        height={500}
        alt=""
        className="md:w-[231px] md:h-[300px]"
      />
      <Link href="/services">
        <button className="bg-[#55EDFF] px-16 py-3 rounded font-semibold text-[20px] text-[#181959] leading-6 hover:opacity-50">
          DEV IT
        </button>
      </Link>
    </div>
  );
}
