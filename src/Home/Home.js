import "./Home.scss";
import Projects from "../Projects/Projects";
import Detail from "../Detail/Detail";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PUBLIC_IMG_PATH } from "../js/util";

const Home = () => {
    const [showDetail, setShowDetail] = useState(false);
    const [params, setParams] = useState({});

    const navigate = useNavigate();

    const showBuildingDetail = (detailInfo) => {
        setParams(detailInfo);
        setShowDetail(true);
    };

    return (
        <div className="studioiwill-Home-root-container">
            <div className="left">
                {showDetail ? (
                    <Detail
                        index={params.state?.index}
                        setShowDetail={setShowDetail}
                    />
                ) : (
                    <>
                        <div className="logo-area">
                            <img
                                // onClick={() => navigate("about")}
                                src={`${PUBLIC_IMG_PATH}/studioiwill-main-logo.png`}
                                alt=""
                            />
                        </div>
                        <div className="footer">
                            <a
                                className="instagram"
                                href="https://instagram.com/design.studio.iwill?igshid=MjEwN2IyYWYwYw=="
                                target="blank"
                            >
                                <img
                                    src={`${PUBLIC_IMG_PATH}/instagram.png`}
                                    alt=""
                                />
                            </a>
                            <div className="company">
                                STUDIO I'll_All Rights Reserved.
                            </div>
                            <div className="address">
                                2F_57 Yeonhui-ro Seodaemun-gu, Seoul
                            </div>
                            <a
                                className="email"
                                href="mailto:designstudio.iwill@gmail.com"
                            >
                                designstudio.iwill@gmail.com
                            </a>
                        </div>
                    </>
                )}
            </div>
            <div className="right">
                <Projects showBuildingDetail={showBuildingDetail} />
            </div>
        </div>
    );
};

export default Home;
