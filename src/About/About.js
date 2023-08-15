import "./About.scss";
import Nav from "../Nav/Nav";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PUBLIC_IMG_PATH } from '../js/util';

const previewImges = [
    { src: `${PUBLIC_IMG_PATH}/project0/001.jpg` },
    { src: `${PUBLIC_IMG_PATH}/project0/002.jpg` },
    { src: `${PUBLIC_IMG_PATH}/project0/003.jpg` },
    { src: `${PUBLIC_IMG_PATH}/project0/004.jpg` },
    { src: `${PUBLIC_IMG_PATH}/project0/005.jpg` },
    { src: `${PUBLIC_IMG_PATH}/project0/006.gif` },
    { src: `${PUBLIC_IMG_PATH}/project0/007.jpg` },
    { src: `${PUBLIC_IMG_PATH}/project0/008.jpg` },
    { src: `${PUBLIC_IMG_PATH}/project0/009.jpg` },
    { src: `${PUBLIC_IMG_PATH}/project0/010.jpg` },
    { src: `${PUBLIC_IMG_PATH}/project0/011.jpg` },
];

const About = () => {
    const [previewSrc, setPreviewSrc] = useState(
        `${PUBLIC_IMG_PATH}/project0/001.jpg`
    );

    const slickRef = useRef();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const handleClickPrvBtn = () => slickRef.current.slickPrev();
    const handleClickNextBtn = () => slickRef.current.slickNext();

    const handleClickPreview = (src) => {
        setPreviewSrc(src);
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
		slidesToShow: 1,
		variableWidth: true,
        slidesToScroll: 1,
        arrows: false,
        // responsive: [
		// 	{
        //         breakpoint: 1920,
        //         settings: {
        //           slidesToShow: 5,
        //         }
        //     },
		// 	{
        //         breakpoint: 1536,
        //         settings: {
        //           slidesToShow: 4,
        //         }
        //     },
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //           slidesToShow: 3,
        //         }
        //     },
        //     {
        //         breakpoint: 800,
        //         settings: {
        //           slidesToShow: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //           slidesToShow: 1,
        //         }
        //     },
        // ]
    };

    return (
        <>
            <Nav />
            <div className="studioiwill-About-root-container">
                <div className="preview-area">
                    <img className="preview" src={previewSrc} alt="" />
                    <div className="preview-slider-area">
                        <div className="preview-slider">
                            <Slider {...settings} ref={slickRef}>
                                {previewImges.map((img, i) => (
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
                            <div className="about-slider-btn prev">
                                <img
                                    className="slider-btn-img"
                                    onClick={handleClickPrvBtn}
                                    src={`${PUBLIC_IMG_PATH}/left-arrow.svg`}
                                    alt=""
                                />
                            </div>
                            <div className="about-slider-btn next">
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
                <div className="about-area">
                    <div className="about-logo-area">
                        <img
                            className="logo"
                            src={`${PUBLIC_IMG_PATH}/studioiwill-logo2.svg`}
                            alt=""
                        />
                    </div>
                    <div className="about-text">I'll make anything for you</div>
                    <div className="about-text2">
                        서울특별시 서대문구 연희로57 2F
                    </div>
                    <div className="about-text2">김희원, 한덕규</div>
                </div>
            </div>
        </>
    );
};

export default About;
