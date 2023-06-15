import "./Home.scss";
import Building from "../Building/Building";
import { backBuilding, frontBuilding, projectData } from "../Data/Data";

const Home = () => {
    return (
        <div className="studioiwill-Home-root-container">
            <div className="home-container">
                <div className="logo-area">
                    <img
                        className="logo"
                        src="/images/studioiwill-logo.svg"
                        alt="logo"
                    />
                </div>
				<div className="studioiwill-back">
					{
						projectData.data.map((data, index) => (
							<Building
                            height={data.height}
                            number={data.number}
                            title={data.title}
                            date={data.date}
							marginRight={data.marginRight}
                            status={"back"}
                            index={index}
                        />
						))
					}
				</div>
                {/* <div className="studioiwill-back">
                    {backBuilding.map((data, index) => (
                        <Building
                            height={data.height}
                            number={data.number}
                            title={data.title}
                            date={data.date}
                            status={"back"}
                            index={index}
                        />
                    ))}
                </div> */}
                {/* <div className="studioiwill-front">
                    {frontBuilding.map((data, index) => (
                        <Building
                            height={data.height}
                            number={data.number}
                            title={data.title}
                            date={data.date}
                            status={"front"}
                            index={index}
                        />
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default Home;
