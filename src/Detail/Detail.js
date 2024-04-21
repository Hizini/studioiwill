import "./Detail.scss";
import Nav from "../Nav/Nav";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { projectData, detailImges } from "../Data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PUBLIC_IMG_PATH } from "../js/util";

const Detail = (props) => {
    // const { pathname } = window.location;
    // const location = useLocation();
    // const navigate = useNavigate();
    let { index, setShowDetail } = props;
    const detailArr = projectData.data;
    const count = detailArr.length / projectData.repeat;
    index = index % count;
    const [previewSrc, setPreviewSrc] = useState(null);
    const slickRef = useRef();

    // useEffect(() => {
    //     if (pathname === "/detail" && !location.state) return navigate("/");

    //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // }, []);

    // if (pathname === "/detail") {
    //     if (!location.state) return navigate("/");
    //     index = location.state.index;
    // }
    useEffect(() => {
        if (detailImges[index] && detailImges[index].length > 0)
            setPreviewSrc(detailImges[index][0]?.src ?? null);
		else setPreviewSrc(null)
    }, [index]);

    const handleClickPrvBtn = () => slickRef.current.slickPrev();
    const handleClickNextBtn = () => slickRef.current.slickNext();

    const handleClickPreview = (src) => {
        setPreviewSrc(src);
    };

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
        <div className="studioiwill-detail-root-container">
            <Nav setShowDetail={setShowDetail} />
            <div>
                {detailImges[index] && detailImges[index].length > 0 ? (
                    <div className="preview-area">
                        <img className="preview" src={previewSrc} alt="" />
                        <div className="preview-slider-area">
                            <div className="preview-slider">
                                <Slider {...settings} ref={slickRef}>
                                    {detailImges[index].map((img, i) => (
                                        <img
                                            className="preview-img"
                                            onClick={() =>
                                                handleClickPreview(img.src)
                                            }
                                            src={img.src}
                                            alt=""
                                            key={i}
                                        />
                                    ))}
                                </Slider>
                                <div className="detail-slider-btn prev">
                                    <img
                                        className="slider-btn-img"
                                        onClick={handleClickPrvBtn}
                                        src={`${PUBLIC_IMG_PATH}/left-arrow.svg`}
                                        alt=""
                                    />
                                </div>
                                <div className="detail-slider-btn next">
                                    <img
                                        className="slider-btn-img"
                                        onClick={handleClickNextBtn}
                                        src={`${PUBLIC_IMG_PATH}/right-arrow.svg`}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="preview-area no-image">
                        <img
                            className="no-image"
                            src={`${PUBLIC_IMG_PATH}/noImg.png`}
                            alt=""
                        />
                        <div className="no-image-text">이미지 준비중</div>
                    </div>
                )}
                <hr className="divider" />
                <div className="detail-area">
                    <div className="project-area">
                        <div className="project-title">
                            {/* {detailArr[index].title} */}
                            STUDIO I'II
                        </div>
                        <div className="project">
                            I'll make anything for you
                        </div>
                    </div>
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
                        {/* <div className="project-info-item">
                            <div className="project-info-label">DESIGNER</div>
                            <div className="project-info-value">
                                {detailArr[index].designer}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
