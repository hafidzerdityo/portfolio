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
      desc: "I developed and implemented several computer vision models focusing on two key areas: face similarity detection and object detection. For face similarity, I created a deep learning model that can accurately compare and match facial features between different images, potentially useful for identity verification systems. In object detection, I worked on training and fine-tuning YOLO models for specific use cases, including a house detection system for social welfare programs.",
      tag: [
        { name: "Python", icon: faPython },
        { name: "PyTorch", icon: null },
        { name: "ML", icon: null },
      ],
      is_private: false,
    },
    {
      thumbnail: posaja_umkm,
      content_images: [posaja_umkm],
      year: "2024",
      name: "PosAja UMKM",
      key: "pos_umkm",
      title: "PosAja UMKM",
      link: null,
      date: "January 2024",
      desc: "I developed backend API systems for the PosAJA UMKM app, focusing on logistics and courier features. My work included implementing functionalities for courier management, shipment orders, and Cash on Delivery (COD) services. The backend was built using Go with the Fiber framework.",
      tag: [
        { name: "Go", icon: faGolang },
        { name: "Fiber", icon: null },
        { name: "Docker", icon: null },
      ],
      is_private: false,
    },
    {
      thumbnail: bjbs_ifos,
      content_images: [bjbs_ifos],
      year: "2024",
      name: "BJB Syariah - IFOS",
      key: "bjbs_ifos",
      title: "Bank BJB Syariah Integrated Financing Originating System",
      link: null,
      date: "May 2024",
      desc: "I contributed to the backend API systems for the standalone BJBS Financing Syariah app, designed specifically for BJB employees. This app handles the management of financing accounts, including creating and overseeing various types of financing such as Murabahah, Qardh, Musyarakah, and Ijarah. The app was developed using Python with the FastAPI framework.",
      tag: [
        { name: "Python", icon: faPython },
        { name: "FastAPI", icon: null },
        { name: "Docker", icon: null },
      ],
      is_private: false,
    },
    {
      thumbnail: bjbs_bds,
      content_images: [bjbs_bds],
      year: "2024",
      name: "BJB Syariah - BDS, CBS",
      key: "bjbs_bds",
      title: "Bank BJB Syariah Branch Delivery System and Core Banking System",
      link: null,
      date: "January 2024",
      desc: "I contributed to the development of microservices for the Bank BJB Syariah Branch Delivery System (BDS), which interfaces directly with customers via tellers and is connected to the Core Banking System (CBS). The BDS and CBS are microservices consisting of services for CIF, Transactions, Accounts, and Journals. The app was developed using Python with the FastAPI framework.",
      tag: [
        { name: "Python", icon: faPython },
        { name: "FastAPI", icon: null },
        { name: "Docker", icon: null },
      ],
      is_private: false,
    },
    {
      thumbnail: bjbs_mobile,
      content_images: [bjbs_mobile],
      year: "2024",
      name: "BJB Syariah - Mobile Maslahah API",
      key: "bjbs_mobile",
      title: "Bank BJB Syariah Mobile Banking API",
      link: null,
      date: "January 2024",
      desc: "I contributed to the development of the BJBS Maslahah Mobile Banking API, which serves as the backend infrastructure for the bank's mobile banking application. The API seamlessly integrates with the core banking system, providing secure and efficient access to banking services such as account management, fund transfers, and transaction history. The system was built using Python with the FastAPI framework, ensuring high performance and scalability.",
      tag: [
        { name: "Python", icon: faPython },
        { name: "FastAPI", icon: null },
        { name: "Docker", icon: null },
      ],
      is_private: false,
    },
    {
      thumbnail: bcas_bds,
      content_images: [bcas_bds],
      year: "2023",
      name: "BCA Syariah - BDS, CBS",
      key: "bcas_bds",
      title: "Bank BCA Syariah Branch Delivery System and Core Banking System",
      link: null,
      date: "April 2023",
      desc: "I contributed to the development of microservices for the Bank BCA Syariah Branch Delivery System (BDS), which interfaces directly with customers via bank tellers (counter services) and is connected to the Core Banking System (CBS). The BDS and CBS are microservices consisting of services for CIF, Funding, Financing, Cash, and General Ledger. All services were developed using Go with gRPC.",
      tag: [
        { name: "Go", icon: faGolang },
        { name: "gRPC", icon: null },
        { name: "Docker", icon: null },
      ],
      is_private: false,
    },
    {
      thumbnail: pospay_superapp,
      content_images: [pospay_superapp],
      year: "2022",
      name: "Pospay",
      key: "pospay_superapp",
      title: "Pospay Superapp",
      link: null,
      date: "November 2022",
      desc: "I contributed to the development and maintenance of backend API systems for the Pospay app, a fintech application based on Giro (bank transfer). Pospay also functions as an e-wallet, enabling users to manage their financial transactions and payments. My work primarily focused on maintenance and bug fixing. The backend was developed using Python with the FastAPI framework.",
      tag: [
        { name: "Python", icon: faPython },
        { name: "FastAPI", icon: null },
      ],
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
    <FadeContent
      blur={true}
      duration={1000}
      easing="ease-out"
      initialOpacity={0}
    >
      <div className="min-h-screen bg-base-100 pb-12 lg:pb-20 pt-24 lg:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-10 lg:mb-16">
            <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
                  className="group h-full bg-base-200 hover:bg-base-300 rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 cursor-pointer"
                >
                  {/* Project Thumbnail */}
                  <div className="relative overflow-hidden h-40 lg:h-48">
                    <div className="absolute inset-0 z-10" />
                    <img
                      src={val.thumbnail}
                      alt={val.name}
                      className="w-full h-full object-cover object-center transform"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="p-4 lg:p-6">
                    <h3 className="text-base lg:text-lg font-semibold text-base-content mb-1 lg:mb-2 group-hover:text-primary transition-colors">
                      {val.name}
                    </h3>
                    <p className="text-xs lg:text-sm text-base-content/70 line-clamp-2 mb-3 lg:mb-4">
                      {val.title} • {val.year}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 lg:gap-2 mt-auto">
                      {val.tag.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center gap-1 lg:gap-1.5 px-2 lg:px-3 py-0.5 lg:py-1 rounded-full text-xs font-medium bg-base-300 text-base-content/80 group-hover:bg-primary/10 group-hover:text-primary transition-colors"
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
