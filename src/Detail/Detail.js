import './Detail.css'
import Nav from '../Nav/Nav'
import { useLocation, useNavigate } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'
import { backBuilding, frontBuilding } from '../Data/Data'
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

const Detail = () => {
  const { pathname } = window.location
  const location = useLocation()
  const navigate = useNavigate()
  let status, index, detailArr

  const [previewSrc, setPreviewSrc] = useState('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbLLREg%2FbtrbhYLdx4M%2Fw3BWXIjm185YfkGITrU9HK%2Fimg.jpg')

  const slickRef = useRef()

  useEffect(() => {
    if (pathname === '/detail' && !location.state) return navigate('/')

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  if (pathname === '/detail') {
    if (!location.state) return navigate('/')
    status = location.state.status
    index = location.state.index

    switch (status) {
      case 'back':
        detailArr = backBuilding
        break
      case 'front':
        detailArr = frontBuilding
        break
      default:
        break
    }
  }

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
              <div className='detail-slider-btn prev'><img className='slider-btn-img' onClick={handleClickPrvBtn} src='/images/left-arrow.svg' alt='' /></div>
              <div className='detail-slider-btn next'><img className='slider-btn-img' onClick={handleClickNextBtn} src='/images/right-arrow.svg' alt='' /></div>
            </div>
          </div>
        </div>
        <div className='detail-area'>
          <div className='project-area'>
            <div className='project'>PROJECT</div>
            <div className='project-title'>{detailArr[index].title}</div>
          </div>
          <div className='project-info'>
            <div className='project-info-item'>
              <div className='project-info-label'>DATE</div>
              <div className='project-info-value'>{detailArr[index].date}</div>
            </div>
            <div className='project-info-item'>
              <div className='project-info-label'>LOCATION</div>
              <div className='project-info-value'>{detailArr[index].location}</div>
            </div>
            <div className='project-info-item'>
              <div className='project-info-label'>AREA</div>
              <div className='project-info-value'>{detailArr[index].area}</div>
            </div>
            <div className='project-info-item'>
              <div className='project-info-label'>DESIGNER</div>
              <div className='project-info-value'>{detailArr[index].designer}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail