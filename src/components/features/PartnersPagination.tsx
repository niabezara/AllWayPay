import React from "react";
import { Icons } from "@/components/shared/Icons";

interface PartnersPaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
  screenWidth: number; // Pass screenWidth as prop
}

export const PartnersPagination: React.FC<PartnersPaginationProps> = ({
  pageCount,
  currentPage,
  onPageChange,
  className,
  screenWidth,
}) => {
  // Show 3 pages on mobile, 7 on desktop
  const maxPages = screenWidth >= 1024 ? 7 : 3;
  const startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
  const endPage = Math.min(pageCount, startPage + maxPages - 1);

  return (
    <div className={className}>
      {/* Previous Button */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className={`px-4 py-2 flex items-center gap-2 ${
          currentPage === 1 ? "disabled" : ""
        }`}
      >
        <Icons.doubleArrowLeft />
        <Icons.arrowleft strokeWidth="2" height="17px" />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
        const page = startPage + index;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2  text-white rounded-[8px] font-bold text-[18px] leading-[21px] ${
              currentPage === page ? "bg-[#384BFF] text-white" : ""
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => currentPage < pageCount && onPageChange(currentPage + 1)}
        className={`px-4 py-2 flex items-center gap-2 ${
          currentPage === pageCount ? "disabled" : ""
        }`}
      >
        <Icons.arrowright strokeWidth="2" height="17px" />
        <Icons.doubleArrowRight />
      </button>
    </div>
  );
};
