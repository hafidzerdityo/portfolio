import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ProjectContent = ({ projectList, setProject, selectedProjectKey }) => {
  const selectedProject = projectList.find(
    (project) => project.key === selectedProjectKey
  );

  if (!selectedProject) return null;

  return (
    <div className="min-h-screen bg-base-100 py-10 pt-24">
      <div className="container mx-auto max-w-2xl flex flex-col gap-12 lg:gap-20">
        <button
          onClick={() => setProject(null)}
          className="inline-flex max-w-fit rounded-lg p-3 gap-4 items-center hover:bg-base-200"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </button>

        <div className="flex flex-col items-center gap-10 lg:flex-row ">
          <div className="flex flex-col gap-4 text-center lg:text-left ">
            <h1 className="text-3xl font-bold">{selectedProject.title}</h1>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <a
                href={selectedProject.link}
                target="_blank"
                className="text-blue-600 "
              >
                {selectedProject.link || "private-repo"}
              </a>
              <span className="hidden text-base-400 lg:inline">–</span>
              <span className="text-base-400">{selectedProject.date}</span>
            </div>
          </div>
        </div>
        <p>{selectedProject.desc}</p>
        <div
          className={`flex max-h-screen items-center justify-center ${
            selectedProject.is_private && "filter blur-sm"
          }`}
        >
          {selectedProject.image && (
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="max-h-[90vh] w-auto rounded-3xl shadow-md"
            />
          )}
        </div>

        {/* Tag */}
        <div className="flex flex-wrap gap-2 text-sm">
          {selectedProject.tag.map((tag, index) => (
            <span
              key={index}
              className="rounded-3xl border border-base-400 px-3 py-1 text-base-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;