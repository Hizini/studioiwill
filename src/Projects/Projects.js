import "./Projects.scss";
import Building from "../Building/Building";
import { projectData } from "../Data/Data";
import { useEffect, useRef, useState } from "react";

const Projects = ({ showBuildingDetail }) => {
    const buildingRef = useRef(null);
    // const interSectRef = useRef(null);
    // const [arrLength, setArrLength] = useState(1);
    // const [compHeight, setCompHeight] = useState();
    // const options = {
    //     root: null,
    //     rootMargin: "20px",
    //     threshold: 1.0,
    // };

    // const handleObserver = ([entries]) => {
    //     if (entries.isIntersecting) {
    //         setArrLength(arrLength + 1);
    //     }
    // };

    // useEffect(() => {
    //     const observer = new IntersectionObserver(handleObserver, options);
    //     if (interSectRef.current) {
    //         observer.observe(interSectRef.current);
    //     }
    //     return () => {
    //         observer.disconnect();
    //     };
    // }, [handleObserver]);

    useEffect(() => {
		window.onload = () => {
			buildingRef.current?.scrollIntoView({behavior: "smooth", block: 'end'})
		  };
    }, []);

    return (
        <div className="studioiwill-projects-root-container">
            <div className="home-container">
                {/* {new Array(arrLength).fill().map((v, i) => {
                    return (
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
                                    compHeight={compHeight}
                                    arrLength={arrLength}
                                    isFirst={i === 1}
                                />
                            ))}
                        </div>
                    );
                })} */}
                <div className="studioiwill-back" ref={buildingRef}>
                    {projectData.data.map((data, index) => (
                        <Building
                            showBuildingDetail={showBuildingDetail}
                            style={data.style}
                            number={data.number}
                            title={data.title}
							date={data.date}
							sub={data.sub}
                            index={index}
                            key={index}
                        />
                    ))}
                </div>
                {/* <div ref={interSectRef} /> */}
            </div>
        </div>
    );
};

export default Projects;
