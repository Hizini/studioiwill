import "./About.scss";
import Nav from "../Nav/Nav";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const previewImges = [
    { src: "/images/about/001.jpg" },
    { src: "/images/about/002.jpg" },
    { src: "/images/about/003.jpg" },
    { src: "/images/about/004.jpg" },
    { src: "/images/about/005.jpg" },
    { src: "/images/about/006.gif" },
    { src: "/images/about/007.jpg" },
    { src: "/images/about/008.jpg" },
    { src: "/images/about/009.jpg" },
    { src: "/images/about/010.jpg" },
    { src: "/images/about/011.jpg" },
];

const About = () => {
    const [previewSrc, setPreviewSrc] = useState(
        "/images/about/001.jpg"
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
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                }
            },
        ]
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
                                    src="/images/left-arrow.svg"
                                    alt=""
                                />
                            </div>
                            <div className="about-slider-btn next">
                                <img
                                    className="slider-btn-img"
                                    onClick={handleClickNextBtn}
                                    src="/images/right-arrow.svg"
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
                            src="/images/studioiwill-logo2.svg"
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
