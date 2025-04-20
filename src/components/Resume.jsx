import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faNodeJs,
  faReact,
  faAws,
  faGolang,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faGhost,
} from "@fortawesome/free-solid-svg-icons";

import FadeContent from "../utils/animations/FadeContent";
import cv_hafidz from "../assets/cv_hafidz.pdf";
import cv_hafidz2 from "../assets/cv_hafidz2.pdf";

const Resume = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleHiddenButtonClick = () => {
    setClickCount((prev) => {
      if (prev + 1 === 3) {
        setIsUpdated(true);
      }
      return prev + 1;
    });
  };
  const experienceList = [
    {
      date: "Nov 2022 - Present",
      role: "Backend Engineer",
      company: "Pos Indonesia",
      type: "Full-time",
      description: [
        "Working on backend development for the PosAjaUMKM project using Go Fiber.",
        "Managing and maintaining the backend for the PosPay app using Python FastAPI.",
        "Developed and deployed multiple computer vision model using PyTorch and FastAPI",
      ],
      link: "https://www.posindonesia.co.id/en",
    },
    {
      date: "April 2023 - Present",
      role: "Backend Engineer",
      company: isUpdated ? "Ihsan Solusi" : "Upwork",
      type: "Part-Time",
      description: [
        "Developing and maintaining backend systems for the BCA Syariah Core Banking System and Branch Distribution System.",
        "Developing and maintaining backend systems for the BJB Syariah Core Banking System, Branch Distribution System API, Mobile Banking API, Customer relationship Management, Cash Management System.",
      ],
      link: isUpdated
        ? "https://ihsansolusi.co.id/"
        : "https://www.upwork.com/",
    },
    {
      date: "Jan 2022 - Jul 2022",
      role: "Data Scientist",
      company: "Telkom Indonesia",
      type: "Contract",
      description:
        "Worked on web scraping, ETL processes, data analysis, and developing an ML model for legal projects.",
      link: "https://www.telkom.co.id/sites",
    },
  ];

  const educationList = [
    {
      year_start: "2015",
      year_end: "2020",
      university_name: "Telkom University",
      degree: "Bachelor of Engineering in Electrical and Electronics",
    },
  ];

  const techStackList = [
    { name: "Go • Fiber • gRPC", icon: faGolang },
    { name: "Python • FastAPI", icon: faPython },
    { name: "Node.js • Express.js", icon: faNodeJs },
    { name: "JavaScript • React.js", icon: faReact },
    { name: "Amazon Web Service", icon: faAws },
  ];

  return (
    <div className="min-h-screen bg-base-100 py-6 lg:py-10 pt-20 lg:pt-24 relative">
      <div className="absolute top-32 right-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button
          className="p-2 bg-base-300 text-base-content rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
          onClick={handleHiddenButtonClick}
        >
          <FontAwesomeIcon icon={faGhost} />
        </button>
      </div>
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Experience Section */}
        <section className="space-y-6 lg:space-y-8 mb-12 lg:mb-16">
          <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Experience
          </h1>
          <div className="space-y-6 lg:space-y-8">
            {experienceList.map((job, index) => (
              <div
                key={index}
                className="card bg-base-200 shadow-md lg:shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="card-body p-4 lg:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                    <div>
                      <h3 className="card-title text-base lg:text-lg mb-1">
                        {job.role}
                      </h3>
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-secondary hover:text-secondary/70 transition-colors flex items-center gap-1"
                      >
                        <span className="font-medium">{job.company}</span>
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-xs"
                        />
                      </a>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="badge badge-primary badge-sm lg:badge-md">
                        {job.type}
                      </div>
                      <div className="text-xs lg:text-sm text-base-content/70 mt-1">
                        {job.date}
                      </div>
                    </div>
                  </div>
                  <div className="divider my-2"></div>
                  {Array.isArray(job.description) ? (
                    <ul className="space-y-2 text-xs lg:text-sm text-base-content/70">
                      {job.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></div>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs lg:text-sm text-base-content/70">
                      {job.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12 lg:mb-16">
          <h2 className="text-xl lg:text-2xl font-bold text-primary flex items-center gap-2 pb-2 border-b border-base-300 mb-6 lg:mb-8">
            Education
          </h2>
          {educationList.map((education, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-md lg:shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="card-body p-4 lg:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="card-title text-base lg:text-lg mb-1">
                      {education.degree}
                    </h3>
                    <p className="text-sm text-secondary">
                      {education.university_name}
                    </p>
                  </div>
                  <div className="badge badge-secondary badge-sm lg:badge-md">
                    {education.year_start} - {education.year_end}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Tech Stack Section */}
        <section className="mb-12 lg:mb-16">
          <h2 className="text-xl lg:text-2xl font-bold text-primary flex items-center gap-2 pb-2 border-b border-base-300 mb-6 lg:mb-8">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {techStackList.map((tech, index) => (
              <div
                key={index}
                className="card bg-base-200 shadow-md lg:shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="card-body flex-row items-center gap-3 p-3 lg:p-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <FontAwesomeIcon
                      icon={tech.icon}
                      className="text-lg lg:text-xl text-primary"
                    />
                  </div>
                  <span className="text-xs lg:text-sm font-medium">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Download Resume Button */}
        <div className="flex justify-center">
          <a
            href={isUpdated ? cv_hafidz2 : cv_hafidz}
            download
            className="btn btn-primary hover:btn-secondary transition-colors w-full sm:w-auto"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
