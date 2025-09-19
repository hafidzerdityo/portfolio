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

import cv_hafidz from "../assets/cv_hafidz.pdf";

const Resume = () => {
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
      company: "Bank BCA Syariah",
      type: "Full-Time",
      description: [
        "Developing and maintaining backend systems for the BCA Syariah Core Banking System and Branch Distribution System.",
        "Developing and maintaining backend systems Mobile Banking API, Customer relationship Management, Cash Management System.",
        // "Developing and maintaining backend systems for the BJB Syariah Core Banking System, Branch Distribution System API, Mobile Banking API, Customer relationship Management, Cash Management System.",
      ],
      link: "https://www.bcasyariah.co.id/",
      //   link: "https://ihsansolusi.co.id/",
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

  return (
    <div className="min-h-screen bg-base-100 py-16 lg:py-20 relative">
      <div className="container mx-auto max-w-3xl px-4 space-y-10">
        {/* Experience */}
        <section className="space-y-4">
          <h1 className="text-lg lg:text-xl font-semibold text-base-content">
            Experience
          </h1>
          <div className="space-y-3">
            {experienceList.map((job, index) => (
              <div
                key={index}
                className="card bg-base-200 shadow-sm rounded-lg"
              >
                <div className="card-body p-3 lg:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <h3 className="text-sm lg:text-base font-medium mb-1">
                        {job.role}
                      </h3>
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-base-content/70 hover:text-base-content flex items-center gap-1"
                      >
                        <span>{job.company}</span>
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-[10px]"
                        />
                      </a>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="badge badge-xs sm:badge-sm bg-base-300 text-base-content">
                        {job.type}
                      </div>
                      <div className="text-[11px] text-base-content/50 mt-1">
                        {job.date}
                      </div>
                    </div>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-base-content/70">
                    {job.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-base-content/50 mt-1"></div>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-4">
          <h2 className="text-lg lg:text-xl font-semibold text-base-content border-b border-base-300 pb-1">
            Education
          </h2>
          {educationList.map((edu, idx) => (
            <div key={idx} className="card bg-base-200 shadow-sm rounded-lg">
              <div className="card-body p-3 lg:p-4 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h3 className="text-sm lg:text-base font-medium mb-0.5">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-base-content/70">
                    {edu.university_name}
                  </p>
                </div>
                <div className="badge badge-xs sm:badge-sm bg-base-300 text-base-content">
                  {edu.year_start} - {edu.year_end}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Download Resume */}
        <div className="flex justify-center">
          <a
            href={cv_hafidz}
            download
            className="btn btn-xs sm:btn-sm bg-base-300 text-base-content hover:bg-base-200 w-full sm:w-auto"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
