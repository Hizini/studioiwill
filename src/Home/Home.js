import "./Home.scss";
import Projects from "../Projects/Projects";
import Detail from "../Detail/Detail";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [showDetail, setShowDetail] = useState(false);
    const [params, setParams] = useState({});

    const navigate = useNavigate();

    const showBuildingDetail = detailInfo => {
        setParams(detailInfo);
        setShowDetail(true);
    };

    return (
        <div className="studioiwill-Home-root-container">
            <div className="left">
                {
                    showDetail
                    ? <Detail index={params.state?.index}
                              setShowDetail={setShowDetail}/>
                    : <div className="logo-area"><img onClick={() => navigate('about')} src='/images/studioiwill-main-logo.png' alt=''/></div>
                }
            </div>
            <div className="right">
                <Projects showBuildingDetail={showBuildingDetail}/>
            </div>
        </div>
    );
};

export default Home;
