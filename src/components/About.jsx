import React from "react";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-base-100 pb-10 pt-48 overflow-y-scroll">
        <div className="container mx-auto px-10 sm:px-8 lg:px-8 max-w-2xl flex flex-col gap-12 lg:gap-20">
          <p className="text-xs w-full">
            <p className="font-bold">The name is Muhammad Hafidz Erdityo.</p>I
            am a Software Engineer with 2 years of industry experience,
            specializing in{" "}
            <span className="font-bold">Backend Engineering</span>. I have
            significant expertise in developing scalable backend solutions for
            fintech, particularly sharia-compliant banking systems, contributing
            to major projects such as{" "}
            <span className="font-bold">
              BCA Syariah and BJB Syariah Core Banking System, Pospay Superapp,
              and PosAja UMKM.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
