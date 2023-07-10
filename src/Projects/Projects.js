import "./Projects.scss";
import Building from "../Building/Building";
import { projectData } from "../Data/Data";
import { useEffect, useRef } from "react";

const Projects = ({ showBuildingDetail }) => {
    const buildingRef = useRef(null);

    useEffect(() => {
        if (buildingRef.current) {
            buildingRef.current.scrollTop = 0;
        }
    }, []);

    return (
        <div className="studioiwill-projects-root-container">
            <div className="home-container">
                <div className="studioiwill-back" ref={buildingRef}>
                    {projectData.data.map((data, index) => (
                        <Building
                            showBuildingDetail={showBuildingDetail}
                            style={data.style}
                            number={data.number}
                            title={data.title}
                            date={data.date}
                            index={index}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
