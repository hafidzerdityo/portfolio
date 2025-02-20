import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import DecryptedText from "../utils/animations/DecryptedText";
import AnimatedContent from "../utils/animations/AnimatedContent";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-base-100 pb-10 pt-48 overflow-y-scroll">
        <div className="container mx-auto px-10 sm:px-8 lg:px-8 max-w-2xl flex flex-col gap-12 lg:gap-20">
          <div className="text-xs w-full">
            <DecryptedText
              text="the name is muhammad hafidz erdityo. i am a software engineer based in indonesia 🇮🇩 with 2 years of industry experience, specializing in backend engineering. i have significant expertise in developing scalable backend solutions for indonesian banking, particularly sharia-compliant banking systems, contributing to major projects such as bca syariah and bjb syariah core banking system, pospay superapp, and posaja umkm."
              speed={3}
              animateOn="view"
              sequential={true}
              maxIterations={2}
              revealDirection="start"
            />
          </div>

          {/* Contact Section */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="flex flex-col gap-4 mt-8">
              <h2 className="text-lg font-bold">Contact</h2>
              <div className="flex items-center gap-4">
                <a
                  href="https://t.me/hafidzerdityo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-all duration-300 text-base-content/70 hover:text-blue-700 hover:scale-105"
                >
                  <FontAwesomeIcon icon={faTelegram} className="text-2xl" />
                  <span>Telegram</span>
                </a>
                <a
                  href="https://wa.me/6282118674613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-all duration-300 text-base-content/70 hover:text-green-700 hover:scale-105"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </>
  );
};

export default About;
