import React from "react";

const FAQ = () => {
  return (
    <section className="relative w-full bg-red-50 px-8 mb-4  mt-72">
      <div className="bg-yellow-100  mx-auto py-44 w-full max-w-7xl text-center">
        <svg
          className="overflow-hidden w-[338px ] h-[146px] md:w-[1109px] md:h-[485px] mx-auto"
   
          viewBox="0 0 1109 485"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="clip-path">
              <path d="M45 484.209C20.1472 484.209 0 464.062 0 439.209V179.119C0 154.266 20.1471 134.119 45 134.119H418.158C443.011 134.119 463.158 113.972 463.158 89.1189V45C463.158 20.1472 483.305 0 508.158 0H1063.25C1088.11 0 1108.25 20.1472 1108.25 45V312.883C1108.25 337.736 1088.11 357.883 1063.25 357.883H691.369C666.516 357.883 646.369 378.03 646.369 402.883V439.209C646.369 464.062 626.222 484.209 601.369 484.209H45Z" />
            </clipPath>
          </defs>
          <image
            href="/bcd2.png"
            width="1109"
            height="485"
            clipPath="url(#clip-path)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
    </section>
  );
};

export default FAQ;
