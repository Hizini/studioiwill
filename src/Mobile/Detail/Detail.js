import "./Detail.scss";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { projectData, detailImges } from "../../Data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PUBLIC_IMG_PATH } from "../../js/util";

const Detail = () => {
    const { pathname } = window.location;
    const location = useLocation();
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);

    const detailArr = projectData.data;
    const count = detailArr.length / projectData.repeat;
    const slickRef = useRef();

    useEffect(() => {
        if (pathname === "/detail") {
            if (!location.state) return navigate("/");
            setIndex(location.state.index % count);
        }
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
    };

    return (
        <div className="m-studioiwill-detail-root-container">
            <div className="nav">
                <img
                    className="back"
                    src={`${PUBLIC_IMG_PATH}/left-arrow_b.svg`}
                    alt="back"
                    onClick={() => {
                        navigate(-1);
                    }}
                />
                <div className="nav-right">
                    <img
                        className="insta"
                        src={`${PUBLIC_IMG_PATH}/instagram.png`}
                        alt="instagram"
                        onClick={() => {
                            window.open(
                                "https://instagram.com/design.studio.iwill?igshid=MjEwN2IyYWYwYw==",
                                "_blank"
                            );
                        }}
                    />
                </div>
            </div>
            <div>
                {detailImges[index] && detailImges[index].length > 0 ? (
                    <div className="slider-area">
                        <Slider {...settings} ref={slickRef}>
                            {detailImges[index].map((img, i) => (
                                <div className="slider-img-area">
                                    <img
                                        className="slider-img"
                                        src={img.src}
                                        alt=""
                                        key={i}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                ) : (
                    <div className="slider-area no-image">
                        <img
                            className="no-image"
                            src={`${PUBLIC_IMG_PATH}/noImg.png`}
                            alt=""
                        />
                        <div className="no-image-text">이미지 준비중</div>
                    </div>
                )}
                <div className="detail-area">
                    <div className="project-title">
                        {detailArr[index].title}
                    </div>

                    <hr className="divider" />
                    <div className="project-info">
                        <div className="project-info-item">
                            <div className="project-info-label">TYPE</div>
                            <div className="project-info-value">
                                {detailArr[index].sub}
                            </div>
                        </div>
                        <div className="project-info-item">
                            <div className="project-info-label">LOCATION</div>
                            <div className="project-info-value">
                                {detailArr[index].location}
                            </div>
                        </div>
                        <div className="project-info-item">
                            <div className="project-info-label">AREA</div>
                            <div className="project-info-value">
                                {detailArr[index].area}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
