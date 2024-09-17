"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "text-[20px] font-medium leading-[23.44px] text-[#FAFAFA] lg:hover:text-[#55EDFF] lg:text-white/50 relative max-w-fit transition-all duration-300 ease-in-out",
        isActive &&
          `lg:text-[#55EDFF] 
   `
      )}
      {...rest}
    />
  );
}
