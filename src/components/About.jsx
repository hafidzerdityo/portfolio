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

// Import client logos
import bjb_syariah from "../assets/ClientLogo/bjb-syariah.png";
import bcas_logo from "../assets/ClientLogo/bcas_logo.png";

const About = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hafidze15@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const stats = [
    { icon: faCalendarDays, value: "2+", title: "Years Experience" },
    { icon: faCode, value: "7+", title: "Projects" },
    { icon: faBuilding, value: "3", title: "Companies" },
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
    <div className="min-h-screen bg-base-100 py-24 lg:py-48">
      <div className="container mx-auto max-w-4xl px-4 lg:px-8 flex flex-col gap-12 lg:gap-24">
        {/* Introduction */}
        <div className="flex flex-col gap-4 lg:gap-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-base-content">
            Muhammad Hafidz Erdityo
          </h1>
          <div className="flex flex-wrap gap-2">
            <span className="badge bg-base-200 text-base-content">
              Software Engineer
            </span>
            <span className="badge bg-base-300 text-base-content">
              Backend Specialist
            </span>
            <span className="badge bg-base-100 text-base-content">
              🇮🇩 Indonesia
            </span>
          </div>
          <p className="text-base lg:text-lg text-base-content leading-relaxed mt-4">
            I'm a Software Engineer with 2+ years of experience in Backend
            Engineering, building microservices for fintech applications
            including sharia-compliant banking systems for institutions like
            Bank BCA Syariah, Bank BJB Syariah, and national platforms like
            Pospay Superapp and PosAjaUMKM. Currently exploring Machine Learning
            and Blockchain technologies.
          </p>
        </div>

        {/* Core Expertise */}
        <div>
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-base-content">
            Core Expertise
          </h2>
          <ul className="space-y-3">
            <li className="flex flex-col lg:flex-row lg:items-center gap-3">
              <span className="badge bg-base-200 badge-sm whitespace-nowrap">
                Banking Systems
              </span>
              <span className="text-sm text-base-content">
                Development of core banking systems and financial services
                platforms
              </span>
            </li>
            <li className="flex flex-col lg:flex-row lg:items-center gap-3">
              <span className="badge bg-base-200 badge-sm whitespace-nowrap">
                Backend Architecture
              </span>
              <span className="text-sm text-base-content">
                Design and implementation of scalable microservices
              </span>
            </li>
            <li className="flex flex-col lg:flex-row lg:items-center gap-3">
              <span className="badge bg-base-200 badge-sm whitespace-nowrap">
                API Development
              </span>
              <span className="text-sm text-base-content">
                High-performance APIs with FastAPI, Go Fiber, or any framework
              </span>
            </li>
          </ul>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl"
            >
              <div className="card-body flex flex-col items-center text-center p-6 gap-3">
                <div className="bg-base-300 p-3 rounded-full">
                  <FontAwesomeIcon
                    icon={stat.icon}
                    className="text-xl text-base-content"
                  />
                </div>
                <h3 className="text-2xl font-bold text-base-content">
                  {stat.value}
                </h3>
                <p className="text-sm text-base-content">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Clients */}
        <div>
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-base-content">
            Featured Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl cursor-default"
              >
                <div className="card-body flex flex-col gap-3 p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-base-100 p-2 rounded-xl">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <h3 className="text-base font-medium text-base-content">
                      {client.name}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm text-base-content pl-4">
                    {client.projects.map((proj, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-base-content/50"></div>
                        {proj}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl lg:text-2xl font-semibold text-base-content">
            Contact Me
          </h2>
          <div className="flex flex-col sm:flex-row items-stretch gap-4">
            <a
              href="https://t.me/hafidzerdityo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-neutral flex-1 sm:flex-none gap-2 hover:scale-105 transition-transform"
            >
              <FontAwesomeIcon icon={faTelegram} className="text-lg" />
              Telegram
            </a>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-base-200">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-base-content text-lg"
              />
              <span className="text-base-content select-all">
                hafidze15@gmail.com
              </span>
              <button
                onClick={handleCopyEmail}
                className="ml-2 p-1.5 rounded-md hover:bg-base-300 transition-colors"
              >
                <FontAwesomeIcon
                  icon={copied ? faCheck : faCopy}
                  className={`text-sm ${
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
