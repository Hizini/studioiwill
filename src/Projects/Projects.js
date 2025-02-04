import "./Projects.scss";
import Building from "../Building/Building";
import { projectData } from "../Data/Data";
import { useEffect, useRef, useState } from "react";

const Projects = ({ showBuildingDetail }) => {
    const buildingRef = useRef(null);

    const interSectRef = useRef(null);
	const [isTop, setIsTop] = useState(false)
	const [initialized, setInitialized] = useState(false);
    // const [arrLength, setArrLength] = useState(1);
    // const [compHeight, setCompHeight] = useState();
    const options = {
        root: null,
        rootMargin: "20px",
        threshold: 1.0,
    };

    const handleObserver = ([entries]) => {
		setIsTop(false)
        if (entries.isIntersecting) {
			setIsTop(true)
		// 			  setTimeout(() => {
        //       buildingRef.current?.scrollIntoView({
        //           behavior: "smooth",
        //           block: "end",
        //       });
        //   }, 1000);
        }
    };

	useEffect(() => {
		if(!isTop && !initialized) return
		// console.log(buildingRef.current)
		// window.location.reload()
		// buildingRef.current.scrollIntoView({ behavior:'smooth', block:'end'})
		// window.onload = () => {
		// 	console.log('gg')
		// 	buildingRef.current.scrollIntoView({ block: 'end'})
		//   };
		//   setTimeout(() => {
        //       buildingRef.current.scrollIntoView({
        //           behavior: "smooth",
        //           block: "end",
        //       });
        //   }, 1000);
		  
	}, [isTop, initialized])

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, options);
        if (interSectRef.current) {
            observer.observe(interSectRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, [handleObserver]);

    useEffect(() => {
		setInitialized(true);
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
				<div ref={interSectRef} style={{margin:'20px',width:'100%'}}/>
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
            </div>
        </div>
    );
};

export default Projects;
