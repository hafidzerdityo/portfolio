import React, { useState } from "react";
import ProjectContent from "./Resume/ProjectContent";
import bjbs_bds from "../assets/ListProjects/bjbs_bds.png";
import bjbs_cms from "../assets/ListProjects/bjbs_cms.png";
import bjbs_crm from "../assets/ListProjects/bjbs_crm.png";
import bjbs_ifos from "../assets/ListProjects/bjbs_ifos.png";
import bcas_bds from "../assets/ListProjects/bcas_bds.png";
import posaja_umkm from "../assets/ListProjects/posaja_umkm.png";
import pos_psl from "../assets/ListProjects/pos_psl.png";
import pospay_superapp from "../assets/ListProjects/pospay_superapp.png";

const Projects = ({ setShowNav }) => {
  const [project, setProject] = useState(null);
  const projectList = [
    {
      image: bjbs_ifos,
      year: "2024",
      name: "BJBS IFOS",
      key: "bjbs_ifos",
      title: "Bank BJB Syariah Integrated Financing Originating System",
      link: null,
      date: "May 2024",
      desc: "I developed backend API systems for the new standalone BJBS Financing app. Developed using Python FastAPI.",
      tag: ["Python", "FastAPI", "Docker"],
      is_private: false,
    },
    {
      image: pos_psl,
      year: "2024",
      name: "Pos Smart Logistics",
      key: "pos_psl",
      title: "Pos Smart Logistics",
      link: "https://smart-logistik-pita.netlify.app/",
      date: "October 2024",
      desc: "Frontend Prototype for PosInd Smart Logistics on Pos Indonesia Innovation Award 2024. Use admin as username and password if you want to try the app on the link.",
      tag: ["React.js", "DaisyUI"],
      is_private: false,
    },
    {
      image: posaja_umkm,
      year: "2024",
      name: "Posaja UMKM",
      key: "pos_umkm",
      title: "PosAja UMKM",
      link: null,
      date: "January 2024",
      desc: "I developed backend API systems for the PosAJA UMKM app. Developed using Go with Fiber framework.",
      tag: ["Go", "Fiber", "Docker"],
      is_private: false,
    },
    {
      image: bjbs_bds,
      year: "2024",
      name: "BJBS BDS",
      key: "bjbs_bds",
      title: "Bank BJB Syariah Branch Delivery System",
      link: null,
      date: "January 2024",
      desc: "I developed microservices for the Branch Delivery System (BDS) and the Core Banking System (CBS). Developed using Python FastAPI",
      tag: ["Python", "FastAPI", "Docker"],
      is_private: false,
    },
    {
      image: bjbs_cms,
      year: "2024",
      name: "BJBS CMS",
      key: "bjbs_cms",
      title: "Bank BJB Syariah Customer Management System",
      link: null,
      date: "January 2024",
      desc: "I developed backend API systems for the BJBS Customer Management System.",
      tag: ["Python", "FastAPI", "Docker"],
      is_private: false,
    },
    {
      image: bjbs_crm,
      year: "2024",
      name: "BJBS CRM",
      key: "bjbs_crm",
      title: "Bank BJB Syariah Customer Relationship Management",
      link: null,
      date: "January 2024",
      desc: "I developed backend API systems for the BJBS Customer Relationship Management.",
      tag: ["Python", "FastAPI", "Docker"],
      is_private: false,
    },
    {
      image: bcas_bds,
      year: "2023",
      name: "BCAS BDS",
      key: "bcas_bds",
      title: "Bank BCA Syariah Branch Delivery System",
      link: null,
      date: "April 2023",
      desc: "I developed microservices for the Branch Delivery System (BDS) and the Core Banking System (CBS). All services developed using Go gRPC.",
      tag: ["Go", "gRPC", "Docker"],
      is_private: false,
    },
    {
      image: pospay_superapp,
      year: "2022",
      name: "Pospay",
      key: "pospay_superapp",
      title: "Pospay Superapp",
      link: null,
      date: "November 2022",
      desc: "I developed backend API systems for the Pospay App. Mostly maintanance, bugfixing.",
      tag: ["PHP", "Laravel", "Docker"],
      is_private: false,
    },
  ];

  if (project === null) {
    setShowNav(true);
  }

  if (project !== null) {
    setShowNav(false);
    return (
      <ProjectContent
        projectList={projectList}
        setProject={setProject}
        selectedProjectKey={project}
      />
    );
  }

  return (
    <div className="min-h-screen bg-base-100 py-10 pt-48">
      <div className="container mx-auto max-w-4xl flex flex-col gap-12 lg:gap-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((val) => (
            <div
              key={val.key}
              onClick={() => setProject(val.key)}
              className={`flex flex-col gap-12 lg:gap-2 rounded-xl hover:shadow-lg transition-all duration-300 p-5 bg-base-200 cursor-pointer ${
                val.is_private && "filter blur-sm"
              }`}
            >
              {/* Project Image */}
              <div className="overflow-hidden rounded-md mb-4">
                <img
                  src={val.image}
                  alt={val.name}
                  className="grayscale rounded-md w-full h-32 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Project Details */}
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-base-content">
                  {val.name}
                </h3>
                <p className="text-xs text-base-content/70">
                  {val.title} <span className="text-base-500">&bull;</span>{" "}
                  {val.year}
                </p>
                <p className="mt-2 text-sm text-base-content">
                  {val.desc.length > 100
                    ? `${val.desc.substring(0, 100)}...`
                    : val.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {val.tag.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium text-base-600 bg-base-300 px-2 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
