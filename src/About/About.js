import './About.css'
import Nav from '../Nav/Nav'
import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const previewImges = [
  {
    src: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbLLREg%2FbtrbhYLdx4M%2Fw3BWXIjm185YfkGITrU9HK%2Fimg.jpg",
  },
  {
    src: "https://pbs.twimg.com/media/FIbhNioakAAc_V0?format=jpg&name=medium",
  },
  {
    src: "https://pbs.twimg.com/media/FdFxDv2aEAMqRfK?format=jpg&name=small",
  },
  {
    src: "https://pbs.twimg.com/media/Ezq61WWVcAESp7b.jpg",
  },
]

const About = () => {
  const [previewSrc, setPreviewSrc] = useState("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbLLREg%2FbtrbhYLdx4M%2Fw3BWXIjm185YfkGITrU9HK%2Fimg.jpg")

  const slickRef = useRef()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  const handleClickPrvBtn = () => slickRef.current.slickPrev()
  const handleClickNextBtn = () => slickRef.current.slickNext()

  const handleClickPreview = (src) => {
    setPreviewSrc(src)
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false
  }

  return (
    <>
      <Nav />
      <div className='studioiwill-About-root-container'>
        <div className='preview-area'>
          <img className='preview' src={previewSrc} alt='' />
          <div className='preview-slider-area'>
            <div className='preview-slider'>
              <Slider {...settings} ref={slickRef}>
                {
                  previewImges.map((img, i) => <img className='preview-img' onClick={() => handleClickPreview(img.src)} src={img.src} alt='' />)
                }
              </Slider>
              <div className='about-slider-btn prev'><img className='slider-btn-img' onClick={handleClickPrvBtn} src='/images/left-arrow.svg' alt='' /></div>
              <div className='about-slider-btn next'><img className='slider-btn-img' onClick={handleClickNextBtn} src='/images/right-arrow.svg' alt='' /></div>
            </div>
          </div>
        </div>
        <div className='about-area'>
          <div className='about-logo-area'><img className='logo' src='/images/studioiwill-logo2.svg' alt='' /></div>
          <div className='about-text'>I'll make anything for you</div>
          <div className='about-text2'>서울특별시 서대문구 연희로57 2F</div>
          <div className='about-text2'>김희원, 한덕규</div>
        </div>
      </div>
    </>
  )
}

export default About