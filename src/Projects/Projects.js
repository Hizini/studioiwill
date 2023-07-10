import "./Projects.scss";
import Building from "../Building/Building";
import { projectData } from "../Data/Data";

const Projects = (props) => {
    const { showBuildingDetail } = props;
    return (
        <div className="studioiwill-Projects-root-container">
            <div className="home-container">
				<div className="studioiwill-back"> 
					{
						projectData.data.map((data, index) => (
							<Building
                                showBuildingDetail = {showBuildingDetail}
                                style={data.style}
                                number={data.number}
                                title={data.title}
                                date={data.date}
                                index={index}
                                key={index}
                        />
						))
					}
				</div>
            </div>
        </div>
    );
};

export default Projects;
