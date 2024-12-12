import React from "react";
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
    },
    {
      date: "Jan 2021 - Jul 2022",
      role: "Data Scientist",
      company: "Telkom Indonesia",
      type: "Contract",
      description:
        "Worked on web scraping, ETL processes, data analysis, and developing an ML model for legal projects.",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 py-10 pt-24">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className=" p-8  text-center mb-12">
          <h1 className="text-4xl font-bold text-base-content">
            Muhammad Hafidz Erdityo
          </h1>
          <p className="text-lg text-base-content/70">Software Engineer</p>
        </div>

        {/* Experience Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-base-content mb-4">
            Experience
          </h2>
          <div className="flex flex-col gap-5 bg-base-200 p-6 rounded-lg shadow-sm">
            {experienceList.map((job, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between gap-10">
                  <div className="text-xs text-base-content/70">
                    {job.company} • {job.type}
                  </div>
                  <div className="text-xs text-base-content/70">{job.date}</div>
                </div>
                <h3 className="text-lg font-semibold text-base-content mt-2">
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
          <h2 className="text-2xl font-semibold text-base-content mb-4">
            Education
          </h2>
          <div className="bg-base-200 p-6 rounded-lg shadow-sm">
            <div className="flex justify-between">
              <span className="text-sm text-base-content/70">2015 - 2020</span>
              <p className="text-sm text-base-content/70">Telkom University</p>
            </div>
            <h3 className="text-lg font-semibold text-base-content mt-2">
              Bachelor of Engineering in Electrical and Electronics
            </h3>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-base-content mb-4">
            Skills
          </h2>
          <div className="bg-base-200 p-6 rounded-lg shadow-sm">
            <ul className="list-disc pl-5 text-sm text-base-content/70">
              <li>Backend Development: FastAPI, Express.js, gRPC, Fiber</li>
              <li>Frontend Development: Next.js</li>
              <li>Machine Learning: PyTorch</li>
              <li>Cloud Platforms: AWS, GCP</li>
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
  );
};

export default Resume;
