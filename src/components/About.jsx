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

import {
  faPython,
  faNodeJs,
  faReact,
  faAws,
  faGolang,
} from "@fortawesome/free-brands-svg-icons";

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

  const techStackList = [
    { name: "Go • Fiber • gRPC", icon: faGolang },
    { name: "Python • FastAPI", icon: faPython },
    { name: "Node.js • Express.js", icon: faNodeJs },
    { name: "JavaScript • React.js", icon: faReact },
    { name: "Amazon Web Service", icon: faAws },
  ];

  const stats = [
    { icon: faCalendarDays, value: "4+", title: "Years" },
    { icon: faCode, value: "7+", title: "Projects" },
    { icon: faBuilding, value: "2", title: "Companies" },
  ];

  const clients = [
    {
      name: "Bank BJB Syariah",
      logo: bjb_syariah,
      projects: ["Core Banking", "Branch Delivery", "Mobile Banking API"],
    },
    {
      name: "Bank BCA Syariah",
      logo: bcas_logo,
      projects: ["Core Banking", "Branch Delivery"],
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 py-16 lg:py-24">
      <div className="container mx-auto max-w-3xl px-4 flex flex-col gap-12">
        {/* Intro */}
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-base-content">
            Muhammad Hafidz Erdityo
          </h1>
          <div className="flex flex-wrap gap-1.5 text-xs">
            <span className="badge bg-base-200 text-base-content">
              Software Engineer
            </span>
            <span className="badge bg-base-300 text-base-content">
              Backend Specialist
            </span>
            <span className="badge bg-base-100 text-base-content">🇮🇩</span>
          </div>
          <p className="text-sm text-base-content leading-relaxed mt-2">
            Software Engineer with 4+ years of experience. Built
            sharia-compliant fintech microservices, including solutions for Bank
            BCA Syariah, Bank BJB Syariah, Pospay Superapp, and PosAjaUMKM. As a
            proud electrical engineer, I also build robotics projects for fun.
          </p>
        </div>

        {/* Core Expertise */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-base-content">
            Core Expertise
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="badge badge-sm bg-base-300">Banking</span>
              <span>Core systems & financial platforms</span>
            </li>
            <li className="flex gap-2">
              <span className="badge badge-sm bg-base-300">Architecture</span>
              <span>Scalable microservices</span>
            </li>
            <li className="flex gap-2">
              <span className="badge badge-sm bg-base-300">APIs</span>
              <span>High-performance APIs (FastAPI, Go Fiber, etc.)</span>
            </li>
          </ul>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 text-sm">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="card bg-base-200 shadow-sm rounded-lg p-3 flex flex-col items-center"
            >
              <FontAwesomeIcon
                icon={stat.icon}
                className="text-base text-base-content mb-1"
              />
              <span className="text-lg font-bold">{stat.value}</span>
              <span className="text-xs">{stat.title}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <section className="space-y-4">
          <h2 className="text-lg lg:text-xl font-semibold text-base-content border-b border-base-300 pb-1">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {techStackList.map((tech, idx) => (
              <div key={idx} className="card bg-base-200 shadow-sm rounded-lg">
                <div className="card-body flex-row items-center gap-2 p-2.5">
                  <div className="bg-base-300 p-1.5 rounded-md">
                    <FontAwesomeIcon
                      icon={tech.icon}
                      className="text-sm lg:text-base text-base-content"
                    />
                  </div>
                  <span className="text-xs lg:text-sm text-base-content">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Clients */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-base-content">
            Notable Clients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="card bg-base-200 shadow-sm rounded-lg p-4 text-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-8 h-8 object-contain"
                  />
                  <h3 className="font-medium">{client.name}</h3>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-base-content/80">
                  {client.projects.map((proj, i) => (
                    <li key={i}>{proj}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-base-content">Contact</h2>
          <div className="flex flex-col sm:flex-row gap-3 text-sm">
            <a
              href="https://t.me/hafidzerdityo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-xs sm:btn-sm btn-outline btn-neutral gap-2"
            >
              <FontAwesomeIcon icon={faTelegram} className="text-sm" />
              Telegram
            </a>
            <button
              onClick={handleCopyEmail}
              className="btn btn-xs sm:btn-sm btn-outline btn-neutral gap-2"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
              <span className="select-all text-xs">hafidze15@gmail.com</span>
              <FontAwesomeIcon
                icon={copied ? faCheck : faCopy}
                className={`text-xs ${
                  copied ? "text-success" : "text-base-content/70"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
