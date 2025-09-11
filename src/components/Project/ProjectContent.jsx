import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLink } from "@fortawesome/free-solid-svg-icons";
import BlurText from "../../utils/animations/BlurText";
import FadeContent from "../../utils/animations/FadeContent";

const ProjectContent = ({ projectList, setProject, selectedProjectKey }) => {
  const selectedProject = projectList.find(
    (project) => project.key === selectedProjectKey
  );

  if (!selectedProject) return null;

  return (
    <FadeContent
      blur={true}
      duration={1000}
      easing="ease-out"
      initialOpacity={0}
    >
      <div className="min-h-screen bg-base-100 py-6 lg:py-10 pt-20 lg:pt-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Back Button */}
          <button
            onClick={() => setProject(null)}
            className="group mb-8 lg:mb-12 inline-flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-base-200 transition-colors"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-sm lg:text-base text-base-content group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-sm lg:text-base">Back</span>
          </button>

          {/* Project Header */}
          <div className="space-y-6 lg:space-y-8 mb-8 lg:mb-12">
            <h1 className="text-2xl lg:text-3xl font-bold text-base-content">
              <BlurText
                text={selectedProject.title}
                delay={150}
                animateBy="words"
                direction="top"
              />
            </h1>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-sm lg:text-base">
              {selectedProject.link ? (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base-content hover:text-base-content/70 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={faLink}
                    className="text-xs lg:text-sm"
                  />
                  <span>View Project</span>
                </a>
              ) : (
                <span className="text-base-content/60">Private Repository</span>
              )}
              <span className="hidden sm:block text-base-content/40">•</span>
              <span className="text-base-content/60">
                {selectedProject.date}
              </span>
            </div>

            <p className="text-sm lg:text-base text-base-content/80 leading-relaxed">
              {selectedProject.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {selectedProject.tag.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs lg:text-sm font-medium bg-base-200 text-base-content/80"
                >
                  {tag.icon && (
                    <FontAwesomeIcon
                      icon={tag.icon}
                      className="text-xs lg:text-sm"
                    />
                  )}
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Project Images */}
          {selectedProject.content_images && (
            <div className="w-full">
              <div className="carousel w-full">
                {selectedProject.content_images.map((image, index) => (
                  <div
                    key={index}
                    id={`slide${index}`}
                    className="carousel-item relative w-full flex justify-center"
                  >
                    <div className="relative w-full max-w-2xl">
                      <img
                        src={image}
                        alt={`${selectedProject.name} ${index + 1}`}
                        className={`rounded-lg w-full h-auto max-h-[60vh] object-contain ${
                          selectedProject.is_private ? "filter blur-sm" : ""
                        }`}
                      />

                      {selectedProject.content_images.length > 1 && (
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                          <a
                            href={`#slide${
                              index === 0
                                ? selectedProject.content_images.length - 1
                                : index - 1
                            }`}
                            className="btn btn-circle btn-sm lg:btn-md bg-base-100/60 hover:bg-base-100/80 border-0"
                          >
                            ❮
                          </a>
                          <a
                            href={`#slide${
                              index ===
                              selectedProject.content_images.length - 1
                                ? 0
                                : index + 1
                            }`}
                            className="btn btn-circle btn-sm lg:btn-md bg-base-100/60 hover:bg-base-100/80 border-0"
                          >
                            ❯
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </FadeContent>
  );
};

export default ProjectContent;
