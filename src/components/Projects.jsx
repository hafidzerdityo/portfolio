import React, { useState } from "react";
import ProjectContent from "./Project/ProjectContent";
import bjbs_bds from "../assets/ListProjects/bjbs_bds.png";
import bjbs_ifos from "../assets/ListProjects/bjbs_ifos.png";
import bcas_bds from "../assets/ListProjects/bcas_bds.png";
import posaja_umkm from "../assets/ListProjects/posaja_umkm.png";
import pospay_superapp from "../assets/ListProjects/pospay_superapp.png";
import bjbs_mobile from "../assets/ListProjects/bjbs_mobile.png";
import ml_thumbnail from "../assets/ListProjects/ml_thumbnail.png";
import ml_house_det from "../assets/ListProjects/ml_house_det.png";
import ml_facesim from "../assets/ListProjects/ml_facesim.png";
// import bjb_syariah from "../assets/ClientLogo/bjb-syariah.png";
import FadeContent from "../utils/animations/FadeContent";
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

import AnimatedContent from "../utils/animations/AnimatedContent";
const Projects = ({ setShowNav }) => {
  const [project, setProject] = useState(null);

  const projectList = [
    {
      thumbnail: ml_thumbnail,
      content_images: [ml_house_det, ml_facesim],
      year: "2023",
      name: "Machine Learning Project",
      key: "ml_project",
      title: "Computer Vision Projects - Face Similarity & Object Detection",
      link: null,
      date: "March 2023",
      desc: "Implemented CV models for face similarity and object detection, including YOLO house detection for social welfare programs.",
      tag: [
        { name: "Python", icon: faPython },
        { name: "PyTorch", icon: null },
        { name: "ML", icon: null },
      ],
    },
    {
      thumbnail: posaja_umkm,
      content_images: [posaja_umkm],
      year: "2024",
      name: "PosAja UMKM",
      key: "pos_umkm",
      title: "PosAja UMKM Backend",
      link: null,
      date: "January 2024",
      desc: "Built backend API systems for logistics and courier features using Go Fiber.",
      tag: [
        { name: "Go", icon: faGolang },
        { name: "Fiber", icon: null },
        { name: "Docker", icon: null },
      ],
    },
    {
      thumbnail: bjbs_ifos,
      content_images: [bjbs_ifos],
      year: "2024",
      name: "BJB Syariah - IFOS",
      key: "bjbs_ifos",
      title: "Integrated Financing Originating System",
      link: null,
      date: "May 2024",
      desc: "Backend API for BJBS Financing app handling Murabahah, Qardh, Musyarakah, Ijarah. Built with Python FastAPI.",
      tag: [
        { name: "Python", icon: faPython },
        { name: "FastAPI", icon: null },
        { name: "Docker", icon: null },
      ],
    },
    {
      thumbnail: bjbs_bds,
      content_images: [bjbs_bds],
      year: "2024",
      name: "BJB Syariah - BDS & CBS",
      key: "bjbs_bds",
      title: "Branch Delivery & Core Banking System",
      link: null,
      date: "January 2024",
      desc: "Developed microservices for BDS & CBS with Python FastAPI.",
      tag: [
        { name: "Python", icon: faPython },
        { name: "FastAPI", icon: null },
        { name: "Docker", icon: null },
      ],
    },
    {
      thumbnail: bjbs_mobile,
      content_images: [bjbs_mobile],
      year: "2024",
      name: "BJB Syariah - Mobile API",
      key: "bjbs_mobile",
      title: "Mobile Banking API",
      link: null,
      date: "January 2024",
      desc: "Developed backend API infrastructure for mobile banking app using Python FastAPI.",
      tag: [
        { name: "Python", icon: faPython },
        { name: "FastAPI", icon: null },
        { name: "Docker", icon: null },
      ],
    },
    {
      thumbnail: bcas_bds,
      content_images: [bcas_bds],
      year: "2023",
      name: "BCA Syariah - BDS & CBS",
      key: "bcas_bds",
      title: "Branch Delivery & Core Banking System",
      link: null,
      date: "April 2023",
      desc: "Developed microservices for BDS & CBS using Go gRPC.",
      tag: [
        { name: "Go", icon: faGolang },
        { name: "gRPC", icon: null },
        { name: "Docker", icon: null },
      ],
    },
    {
      thumbnail: pospay_superapp,
      content_images: [pospay_superapp],
      year: "2022",
      name: "Pospay",
      key: "pospay_superapp",
      title: "Superapp Fintech Backend",
      link: null,
      date: "November 2022",
      desc: "Maintained backend API systems for Pospay app using Python FastAPI.",
      tag: [
        { name: "Python", icon: faPython },
        { name: "FastAPI", icon: null },
      ],
    },
  ];

  if (project === null) setShowNav(true);
  else {
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
    <FadeContent
      blur={true}
      duration={1000}
      easing="ease-out"
      initialOpacity={0}
    >
      <div className="min-h-screen bg-base-100 pb-12 lg:pb-20 pt-24 lg:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-10 lg:mb-16">
            <h1 className="text-2xl lg:text-4xl font-bold text-base-content">
              Featured Projects
            </h1>
            <p className="mt-3 lg:mt-4 text-sm lg:text-base text-base-content/70">
              Explore my recent work and technical achievements
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {projectList.map((val, index) => (
              <AnimatedContent
                key={val.key}
                delay={index * 100}
                className="h-full"
              >
                <div
                  onClick={() => setProject(val.key)}
                  className="group h-full bg-gradient-to-br from-base-200 to-base-300 rounded-xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
                >
                  <div className="relative overflow-hidden h-40 lg:h-48 rounded-t-xl">
                    <img
                      src={val.thumbnail}
                      alt={val.name}
                      className="w-full h-full object-cover object-center transition-all duration-300 filter grayscale group-hover:grayscale-0"
                    />
                  </div>

                  <div className="p-4 lg:p-6 flex flex-col justify-between h-full rounded-b-xl">
                    <h3 className="text-base lg:text-lg font-semibold text-base-content mb-1 lg:mb-2 group-hover:text-primary transition-colors">
                      {val.name}
                    </h3>
                    <p className="text-xs lg:text-sm text-base-content/70 line-clamp-2 mb-3 lg:mb-4">
                      {val.title} • {val.year}
                    </p>

                    <div className="flex flex-wrap gap-1.5 lg:gap-2 mt-auto">
                      {val.tag.map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 lg:gap-1.5 px-2 lg:px-3 py-0.5 lg:py-1 rounded-full text-xs font-medium bg-base-300 text-base-content/80 group-hover:bg-primary/10 group-hover:text-primary shadow-sm transition-all"
                        >
                          {tag.icon && (
                            <FontAwesomeIcon
                              icon={tag.icon}
                              className="text-[10px] lg:text-xs"
                            />
                          )}
                          <span className="text-[10px] lg:text-xs">
                            {tag.name}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </FadeContent>
  );
};

export default Projects;
