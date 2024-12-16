import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-base-100 pb-10 pt-48 overflow-y-scroll">
        <div className="container mx-auto px-10 sm:px-8 lg:px-8 max-w-2xl flex flex-col gap-12 lg:gap-20">
          <div className="text-xs w-full">
            <p className="font-bold">The name is Muhammad Hafidz Erdityo.</p>I
            am a Software Engineer with 2 years of industry experience,
            specializing in{" "}
            <span className="font-bold">Backend Engineering</span>. I have
            significant expertise in developing scalable backend solutions for
            fintech, particularly sharia-compliant banking systems, contributing
            to major projects such as
            <span className="font-bold">
              {" "}
              BCA Syariah and BJB Syariah Core Banking System, Pospay Superapp,
              and PosAja UMKM.
            </span>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-4 mt-8">
            <h2 className="text-lg font-bold">Contact</h2>
            <div className="flex items-center gap-4">
              <a
                href="https://t.me/hafidzerdityo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-500 hover:text-blue-700 hover:scale-105"
              >
                <FontAwesomeIcon icon={faTelegram} className="text-2xl" />
                <span>Telegram</span>
              </a>
              <a
                href="https://wa.me/6282118674613"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-500 hover:text-green-700 hover:scale-105"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
