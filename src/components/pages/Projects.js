import React from "react";
import ProjecctsIcon from "../../assets/projects/projects_icon.png";

export default function Projects() {
    return (
        <>
          <div className="background-container">
              <h3 >Projects</h3>
              <div className="container-projects">

                  <img className="projects-icon" src={ProjecctsIcon} alt="Stay Tuned" />

                  <h4>Stay tuned! </h4>

              </div>


          </div>

        </>
    );
}
