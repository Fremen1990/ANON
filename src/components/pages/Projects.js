import React from "react";
import ProjecctsIcon from "../../assets/projects/projects_icon.svg";

export default function Projects() {
    return (
        <>
          <div className="background-container">
              <h3 className="mb-4">Projects</h3>
              <div className="container-projects d-flex flex-column align-items-center justify-content-center ">
                  <img className="projects-icon" src={ProjecctsIcon} alt="Stay Tuned" />
                  <h4 className="text-white">Stay tuned! </h4>
              </div>
          </div>

        </>
    );
}
