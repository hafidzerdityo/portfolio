import React, { useState } from "react";
import ProjectContent from "./Project/ProjectContent";
import bjbs_bds from "../assets/ListProjects/bjbs_bds.png";
import bjbs_ifos from "../assets/ListProjects/bjbs_ifos.png";
import bcas_bds from "../assets/ListProjects/bcas_bds.png";
import posaja_umkm from "../assets/ListProjects/posaja_umkm.png";
import pos_psl from "../assets/ListProjects/pos_psl.png";
import pospay_superapp from "../assets/ListProjects/pospay_superapp.png";
import FadeContent from "../utils/animations/FadeContent";
import face_sim from "../assets/ListProjects/face_sim.png";
import house_det from "../assets/ListProjects/house_det.png";
import ocr_textract from "../assets/ListProjects/ocr_textract.png";

import AnimatedContent from "../utils/animations/AnimatedContent";

const Projects = ({ setShowNav }) => {
  const [project, setProject] = useState(null);
  const projectList = [
    {
      image: house_det,
      year: "2025",
      name: "House Detection",
      key: "house_det",
      title: "House Detection System",
      link: "https://github.com/hafidzerdityo/object-detection-api",
      date: "March 2023",
      desc: "Retrained YOLOV8 using a custom dataset for a house detection system that identifies and classifies houses for the POS IND Bantuan Sosial Project. The project utilized Python and YOLOV8 for image classification.",
      tag: ["Python", "PyTorch", "YOLOV8", "FastAPI"],
      is_private: false,
    },

    {
      image: ocr_textract,
      year: "2025",
      name: "OCR Textract",
      key: "ocr_textract",
      title: "KTP (Indonesian National ID) OCR using AWS Textract",
      link: null,
      date: "March 2023",
      desc: "Implemented an OCR system using AWS Textract to extract text KTP (Indonesian National ID) and regex it into readable JSON format. The system was developed with Python and AWS Textract.",
      tag: ["Python", "FastAPI", "AWS Textract", "OCR"],
      is_private: false,
    },
    {
      image: posaja_umkm,
      year: "2024",
      name: "PosAja UMKM",
      key: "pos_umkm",
      title: "PosAja UMKM",
      link: null,
      date: "January 2024",
      desc: "I developed backend API systems for the PosAJA UMKM app, focusing on logistics and courier features. My work included implementing functionalities for courier management, shipment orders, and Cash on Delivery (COD) services. The backend was built using Go with the Fiber framework.",
      tag: ["Go", "Fiber", "Docker"],
      is_private: false,
    },
    {
      image: bjbs_ifos,
      year: "2024",
      name: "BJB Syariah - IFOS",
      key: "bjbs_ifos",
      title: "Bank BJB Syariah Integrated Financing Originating System",
      link: null,
      date: "May 2024",
      desc: "I contributed to the backend API systems for the standalone BJBS Financing Syariah app, designed specifically for BJB employees. This app handles the management of financing accounts, including creating and overseeing various types of financing such as Murabahah, Qardh, Musyarakah, and Ijarah. The app was developed using Python with the FastAPI framework.",
      tag: ["Python", "FastAPI", "Docker"],
      is_private: false,
    },

    {
      image: bjbs_bds,
      year: "2024",
      name: "BJB Syariah - BDS, CBS",
      key: "bjbs_bds",
      title: "Bank BJB Syariah Branch Delivery System and Core Banking System",
      link: null,
      date: "January 2024",
      desc: "I contributed to the development of microservices for the Bank BJB Syariah Branch Delivery System (BDS), which interfaces directly with customers via tellers and is connected to the Core Banking System (CBS). The BDS and CBS are microservices consisting of services for CIF, Transactions, Accounts, and Journals. The app was developed using Python with the FastAPI framework.",
      tag: ["Python", "FastAPI", "Docker"],
      is_private: false,
    },
    {
      image: bcas_bds,
      year: "2023",
      name: "BCA Syariah - BDS, CBS",
      key: "bcas_bds",
      title: "Bank BCA Syariah Branch Delivery System and Core Banking System",
      link: null,
      date: "April 2023",
      desc: "I contributed to the development of microservices for the Bank BCA Syariah Branch Delivery System (BDS), which interfaces directly with customers via bank tellers (counter services) and is connected to the Core Banking System (CBS). The BDS and CBS are microservices consisting of services for CIF, Funding, Financing, Cash, and General Ledger. All services were developed using Go with gRPC.",
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
      desc: "I contributed to the development and maintenance of backend API systems for the Pospay app, a fintech application based on Giro (bank transfer). Pospay also functions as an e-wallet, enabling users to manage their financial transactions and payments. My work primarily focused on maintenance and bug fixing. The backend was developed using Python with the FastAPI framework.",
      tag: ["Python", "FastAPI"],
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
    <>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="min-h-screen bg-base-100 pb-10 pt-48">
          <div className="container text-xs lg:text-md mx-auto px-10 sm:px-8 lg:px-8 max-w-4xl flex flex-col gap-12 lg:gap-20">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectList.map((val) => (
                // card
                <div
                  key={val.key}
                  onClick={() => setProject(val.key)}
                  className={`grayscale  hover:grayscale-0 hover:scale-105 flex flex-col gap-12 lg:gap-2 rounded-xl hover:shadow-lg transition-all duration-300 p-5 bg-base-200 cursor-pointer ${
                    val.is_private && "filter blur-sm"
                  }`}
                >
                  {/* Project Image */}
                  <div className="overflow-hidden rounded-md mb-4 ">
                    <img
                      src={val.image}
                      alt={val.name}
                      className="rounded-md w-full h-32 object-cover object-top transition-transform duration-300"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="flex-grow">
                    <h3 className="text-xs md:text-lg font-semibold text-base-content">
                      {val.name}
                    </h3>
                    <p className="hidden md:block text-xs text-base-content/70">
                      {val.title} <span className="text-base-500">&bull;</span>{" "}
                      {val.year}
                    </p>
                  </div>
                  {/* Tags */}
                  <div className="hidden md:flex flex-wrap gap-2 mt-4">
                    {val.tag.map((tag, index) => (
                      <span
                        key={index}
                        className="font-medium text-base-600 bg-base-300 px-2 py-1 rounded-lg"
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
      </FadeContent>
    </>
  );
};

export default Projects;
