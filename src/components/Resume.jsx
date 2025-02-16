import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faNodeJs,
  faReact,
  faAws,
  faGolang,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import FadeContent from "../utils/animations/FadeContent";

import cv_hafidz from "../assets/cv_hafidz.pdf";

const Resume = () => {
  const experienceList = [
    {
      date: "Nov 2022 - Present",
      role: "Backend Engineer",
      company: "Pos Indonesia",
      type: "Full-time",
      description:
        "Developing and maintaining backend systems for the PosAjaUMKM and Pospay Super App.",
      link: "https://www.posindonesia.co.id/en",
    },
    {
      date: "April 2023 - Present",
      role: "Backend Engineer",
      company: "Upwork",
      type: "Freelance",
      description: [
        "Developing and maintaining backend systems for the BCA Syariah Core Banking System and Branch Distribution System.",
        "Developing and maintaining backend systems for the BJB Syariah Core Banking System, Branch Distribution System, CRM, CMS.",
      ],
      link: "https://www.upwork.com/",
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
    <>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="min-h-screen bg-base-100 py-10 pt-24">
          <div className="container mx-auto px-10 sm:px-8 lg:px-8 max-w-4xl">
            <div className=" p-8  text-center mb-12">
              <h1 className="text-xl md:text-2xl  lg:text-4xl font-bold text-base-content">
                Muhammad Hafidz Erdityo
              </h1>
              <p className="text-lg text-base-content/70">Software Engineer</p>
            </div>

            {/* Header */}

            {/* Experience Section */}
            <section className="space-y-8">
              <h2 className="text-lg lg:text-2xl font-semibold text-base-content mb-4">
                Experience
              </h2>
              <div className="flex flex-col gap-5 bg-base-200 p-6 rounded-lg shadow-sm">
                {experienceList.map((job, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between gap-10">
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={job.company}
                        className="transition-all duration-300 hover:scale-105"
                      >
                        <div className="text-xs text-base-content/70">
                          <span className="font-bold italic mr-1">
                            {job.company}
                          </span>
                          <span className=" cursor-pointer">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                          </span>{" "}
                          • {job.type}
                        </div>
                      </a>

                      <div className="text-xs text-base-content/70 text-right">
                        {job.date}
                      </div>
                    </div>
                    <h3 className="text-md font-semibold text-base-content mt-2">
                      {job.role}
                    </h3>
                    {Array.isArray(job.description) ? (
                      <ul className="list-disc pl-5 mt-2 text-sm text-base-content/70">
                        {job.description.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2 text-sm text-base-content/70">
                        {job.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="mt-12">
              <h2 className="text-lg lg:text-2xl font-semibold text-base-content mb-4">
                Education
              </h2>
              <div className="bg-base-200 p-6 rounded-lg shadow-sm">
                {educationList.map((educationVal) => (
                  <div className="my-4">
                    <div className="flex justify-between">
                      <p className="text-xs text-base-content/70">
                        {educationVal.university_name}
                      </p>
                      <span className="text-xs text-base-content/70">
                        {educationVal.year_start} - {educationVal.year_end}
                      </span>
                    </div>
                    <h3 className="text-md font-semibold text-base-content mt-2">
                      {educationVal.degree}
                    </h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Tech Stack Section */}
            <section className="my-12">
              <h2 className="text-lg lg:text-2xl font-semibold text-base-content mb-4">
                Tech Stack
              </h2>
              <div className="bg-base-200 p-6 rounded-lg shadow-sm">
                <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-base-content/70">
                  {techStackList.map((tech, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <FontAwesomeIcon
                        icon={tech.icon}
                        className="text-lg lg:text-xl"
                      />
                      <span className="text-xs lg:text-xs">{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Download Resume Button */}
            <div className="mt-12 flex justify-center">
              <a href={cv_hafidz} download className="btn btn-neutral btn-wide">
                Download Full Resume
              </a>
            </div>
          </div>
        </div>
      </FadeContent>
    </>
  );
};

export default Resume;
