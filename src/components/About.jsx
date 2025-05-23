import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faBuilding,
  faCalendarDays,
  faEnvelope,
  faCopy,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import DecryptedText from "../utils/animations/DecryptedText";
import AnimatedContent from "../utils/animations/AnimatedContent";

// Import client logos
import bjb_syariah from "../assets/ClientLogo/bjb-syariah.png";
import posind_logo from "../assets/ClientLogo/posind_logo.png";
import bcas_logo from "../assets/ClientLogo/bcas_logo.png";

const About = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hafidze15@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const stats = [
    {
      icon: faCalendarDays,
      value: "2+",
      title: "Years Experience",
      desc: "In Software Development",
    },
    {
      icon: faCode,
      value: "7+",
      title: "Projects",
      desc: "Involved",
    },
    {
      icon: faBuilding,
      value: "3",
      title: "Companies",
      desc: "Worked With",
    },
  ];

  const clients = [
    {
      name: "Bank BJB Syariah",
      logo: bjb_syariah,
      projects: [
        "Core Banking System",
        "Branch Delivery System",
        "Mobile Banking API",
      ],
    },
    {
      name: "Bank BCA Syariah",
      logo: bcas_logo,
      projects: ["Core Banking System", "Branch Delivery System"],
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 pb-10 pt-24 lg:pt-48">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl flex flex-col gap-8 lg:gap-20">
        {/* Introduction */}
        <div className="text-sm space-y-4 lg:space-y-6">
          <div className="flex flex-col gap-3 lg:gap-4">
            <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Muhammad Hafidz Erdityo
            </h1>
            <div className="flex flex-wrap items-center gap-2">
              <div className="badge badge-primary">Software Engineer</div>
              <div className="badge badge-secondary">Backend Specialist</div>
              <div className="badge">🇮🇩 Indonesia</div>
            </div>
          </div>

          <div className="prose prose-sm">
            <p className="text-sm lg:text-base leading-relaxed">
              I'm a Software Engineer with 2+ years of specialized experience in
              Backend Engineering, building microservices for fintech
              applications including sharia-compliant banking systems for major
              institutions like Bank BCA Syariah, Bank BJB Syariah, and national
              platform Pospay Superapp and PosAjaUMKM. Beyond backend
              engineering, I'm currently expanding my knowledge in Machine
              Learning and Blockchain.
            </p>

            <div className="mt-6">
              <h3 className="text-base lg:text-lg font-semibold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Core Expertise:
              </h3>
              <ul className="space-y-3">
                <li className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <span className="badge badge-primary badge-sm whitespace-nowrap">
                    Banking Systems
                  </span>
                  <span className="text-sm">
                    Development of core banking systems and financial services
                    platforms
                  </span>
                </li>
                <li className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <span className="badge badge-secondary badge-sm whitespace-nowrap">
                    Backend Architecture
                  </span>
                  <span className="text-sm">
                    Design and implementation of scalable microservices
                  </span>
                </li>
                <li className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <span className="badge badge-accent badge-sm whitespace-nowrap">
                    API Development
                  </span>
                  <span className="text-sm">
                    Building high-performance APIs with FastAPI, Go Fiber, or
                    just any framework
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="card-body items-center text-center p-4 lg:p-6">
                <div className="bg-primary p-2 lg:p-3 rounded-full">
                  <FontAwesomeIcon
                    icon={stat.icon}
                    className="text-xl lg:text-2xl text-base-100"
                  />
                </div>
                <h2 className="card-title text-2xl lg:text-3xl font-bold text-primary mt-2">
                  {stat.value}
                </h2>
                <p className="font-semibold text-sm lg:text-base">
                  {stat.title}
                </p>
                <p className="text-xs opacity-75">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Clients Section */}
        <div className="space-y-4 lg:space-y-6">
          <h2 className="text-xl lg:text-2xl font-bold bg-primary bg-clip-text text-transparent">
            Featured Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default"
              >
                <div className="card-body p-4 lg:p-6">
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="bg-base-100 p-2 rounded-xl">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
                      />
                    </div>
                    <h3 className="card-title text-sm lg:text-base bg-primary bg-clip-text text-transparent">
                      {client.name}
                    </h3>
                  </div>
                  <div className="divider my-2"></div>
                  <ul className="text-xs space-y-2">
                    {client.projects.map((project, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-3 lg:space-y-4">
          <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Contact Me
          </h2>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:gap-4">
            <a
              href="https://t.me/hafidzerdityo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-outline gap-2 hover:scale-105 flex-1 sm:flex-none"
            >
              <FontAwesomeIcon
                icon={faTelegram}
                className="text-lg lg:text-xl"
              />
              <span>Telegram</span>
            </a>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-base-200">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-primary text-lg"
              />
              <span className="text-base-content select-all">
                hafidze15@gmail.com
              </span>
              <button
                onClick={handleCopyEmail}
                className=" ml-2 p-1.5 rounded-md hover:bg-base-300 transition-colors"
                title="Copy to clipboard"
              >
                <FontAwesomeIcon
                  icon={copied ? faCheck : faCopy}
                  className={`text-sm text-primary ${
                    copied ? "text-success" : "text-base-content/70"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
