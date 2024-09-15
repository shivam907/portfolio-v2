"use client";
import React, { useEffect, useState } from "react";
import classes from "./project.module.css";
import Link from "next/link";
import projectss from "../../data/projects.json";

const Page = () => {
  const [projects, setProjects] = useState(projectss);
  const [selectedTechnologies, setSelectedTechnologies] = useState({
    "HTML CSS": true,
    ReactJs: true,
    NodeJs: true,
    JavaScript: true,
    NextJs: true,
  });

  // Handle checkbox change
  const handleCheckboxChange = (tech) => {
    setSelectedTechnologies((prevState) => ({
      ...prevState,
      [tech]: !prevState[tech],
    }));
  };

  const filteredProjects = projects.filter((project) => {
    const projectTechs = project.technologies || [];
    return Object.keys(selectedTechnologies).some(
      (tech) => selectedTechnologies[tech] && projectTechs.includes(tech)
    );
  });

  return (
    <>
      <div className={classes.leftBar}>
        <img className={classes.img1} src="/personal-info-icon.svg" alt="" />
        <img
          className={classes.img2}
          src="/professional-info-icon.svg"
          alt=""
        />
      </div>
      <div className={classes.info}>
        <div className={classes.personalInfo}>
          <div className={classes.heading}>
            <div className={classes.icon}>
              <img src="/icon.webp" alt="" />
            </div>
            <div className={classes.name}>my-projects</div>
          </div>
          <div className={classes.select}>
            {["HTML CSS", "ReactJs", "NodeJs", "JavaScript", "NextJs"].map(
              (tech) => (
                <div key={tech} className={classes.option}>
                  <label className={classes.check}>
                    <input
                      type="checkbox"
                      className={classes.checkbox}
                      checked={selectedTechnologies[tech]}
                      onChange={() => handleCheckboxChange(tech)}
                    />
                  </label>
                  <div className={classes.optionName}>{tech}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className={classes.code}>
        <div className={classes.displayFile}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} className={classes.project}>
                <div className={classes.projNames}>
                  <div className={classes.projName}>{project.name}</div>
                  <div className={classes.projectName}>
                    // _{project.nameClass}
                  </div>
                </div>
                <div className={classes.projectBox}>
                  <img src={project.image} alt={project.name} />
                  <div className={classes.projContent}>
                    <p>{project.description}</p>
                    <div className={classes.btns}>
                      {project.projectLink && (
                        <Link href={project.projectLink}>
                          <div className={classes.view}>Live Demo</div>
                        </Link>
                      )}
                      {project.githubLink && (
                        <Link className={classes.imm} href={project.githubLink}>
                          <img src={project.repoIcon} alt="GitHub" />
                          <div className={classes.cirr}>
                            <div className={classes.cir}></div>
                          </div>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={classes.no}>
              <h1>404</h1>
              <h2>|</h2>
              <p>// No projects match the selected technologies.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
