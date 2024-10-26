import IconBadge from "@/components/UI/IconBadge";
import React from "react";

const FeatureHero = () => {
  return (
    <section className="relative w-full mb-4 md:mt-20">
      <div className="mx-auto py-10 flex justify-center items-center max-w-custom">
        <div className="relative flex flex-col-reverse md:flex-col justify-center items-start gap-12 md:gap-4 mx-8 pt-16 md:py-0 md:mx-auto">
          <div className="hidden md:flex gap-8 absolute left-0 top-44">
            <IconBadge title="Health" />
            <IconBadge title="Scheduling and Appointments" />
          </div>

          <div className="hidden md:flex gap-4 absolute right-12 bottom-12">
            <IconBadge title="Payment and Insurance" />
            <IconBadge title="Messaging" />
          </div>

          <IconBadge
            classes="md:hidden absolute right-0 top-1"
            title="Scheduling and Appointments"
          />
          <IconBadge
            classes="md:hidden absolute left-0 top-[80px]"
            title="Health"
          />
          <IconBadge
            classes="md:hidden absolute left-0 bottom-[85px]"
            title="Payment and Insurance"
          />

          <IconBadge
            classes="md:hidden absolute right-0 bottom-[155px]"
            title="Messaging"
          />

          <p className="mt-10 md:mt-0  font-ab text-xl md:text-5xl font-normal  md:max-w-[705px] text-start text-[#4B4B4B]">
            What Can be Accomplished with{" "}
            <span className="text-[#7E7E7E]">ProductName</span>
          </p>
          <svg
            className="hidden md:block overflow-hidden w-[338px] h-[146px] md:w-[1078px] md:h-[485px]"
            viewBox="0 0 1109 485"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="clip-path">
                <path d="M45 484.209C20.1472 484.209 0 464.062 0 439.209V179.119C0 154.266 20.1471 134.119 45 134.119H418.158C443.011 134.119 463.158 113.972 463.158 89.1189V45C463.158 20.1472 483.305 0 508.158 0H1063.25C1088.11 0 1108.25 20.1472 1108.25 45V312.883C1108.25 337.736 1088.11 357.883 1063.25 357.883H691.369C666.516 357.883 646.369 378.03 646.369 402.883V439.209C646.369 464.062 626.222 484.209 601.369 484.209H45Z" />
                {/* <path
                  d="M13.081 246.654C5.85654 246.654 0 240.797 0 233.573V81.4006C0 74.1762 5.85653 68.3197 13.0809 68.3197H101.102C108.326 68.3197 114.183 62.4631 114.183 55.2387V13.081C114.183 5.85654 120.039 0 127.264 0H325.296C332.521 0 338.377 5.85653 338.377 13.0809V169.223C338.377 176.448 332.521 182.304 325.297 182.304H210.936C203.712 182.304 197.855 188.161 197.855 195.385V233.573C197.855 240.797 191.999 246.654 184.774 246.654H13.081Z"
               
                /> */}
              </clipPath>
            </defs>
            <image
              href="/assets/bcd2.png"
              width="1138"
              height="485"
              clipPath="url(#clip-path)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>

          <svg
            className="md:hidden overflow-hidden w-full "
            viewBox="0 0 338 246"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="clip-path2">
                {/* <path d="M45 484.209C20.1472 484.209 0 464.062 0 439.209V179.119C0 154.266 20.1471 134.119 45 134.119H418.158C443.011 134.119 463.158 113.972 463.158 89.1189V45C463.158 20.1472 483.305 0 508.158 0H1063.25C1088.11 0 1108.25 20.1472 1108.25 45V312.883C1108.25 337.736 1088.11 357.883 1063.25 357.883H691.369C666.516 357.883 646.369 378.03 646.369 402.883V439.209C646.369 464.062 626.222 484.209 601.369 484.209H45Z" /> */}
                <path d="M13.081 246.654C5.85654 246.654 0 240.797 0 233.573V81.4006C0 74.1762 5.85653 68.3197 13.0809 68.3197H101.102C108.326 68.3197 114.183 62.4631 114.183 55.2387V13.081C114.183 5.85654 120.039 0 127.264 0H325.296C332.521 0 338.377 5.85653 338.377 13.0809V169.223C338.377 176.448 332.521 182.304 325.297 182.304H210.936C203.712 182.304 197.855 188.161 197.855 195.385V233.573C197.855 240.797 191.999 246.654 184.774 246.654H13.081Z" />
              </clipPath>
            </defs>
            <image
              href="/assets/bcd2.png"
              width="338"
              height="246"
              clipPath="url(#clip-path2)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;
