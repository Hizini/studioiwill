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
                <div className="footer">
                    <div className="company">
                        STUDIO I'll_All Rights Reserved.
                    </div>
                    <div className="address">
                        2F_57 Yeonhui-ro Seodaemun-gu, Seoul
                    </div>
                    <div className="email">
                        Studio_iwill@daum.net
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
