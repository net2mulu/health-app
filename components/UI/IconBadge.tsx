import React from "react";

const IconBadge = ({ title, classes }: { title: string; classes?: string }) => {
  return (
    <div
      className={`${classes} flex items-center justify-center  border-2 border-mid px-2 py-1.5 rounded-full`}
    >
      <svg
        width="26"
        height="25"
        viewBox="0 0 26 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12.9226" cy="12.4128" r="12.1072" fill="#5DBA47" />
        <path
          d="M17.8901 10.1311L12.2747 15.7466L9.72217 13.1941"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <p className="px-2 font-gilroy-bold text-xs md:text-sm font-normal text-mediumGray">
        {title}
      </p>
    </div>
  );
};

export default IconBadge;
