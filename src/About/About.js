import './About.css'
import Nav from '../Nav/Nav'
import { useLocation, useNavigate } from 'react-router-dom'
import { backBuilding, frontBuilding } from '../Data/Data'

const About = () => {
  const { pathname } = window.location
  const location = useLocation()
  const navigate = useNavigate()
  let status, index, detailArr

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

  return (
    <>
      <Nav />
      <div className='studioiwill-About-root-container'>
        <div className='preview-area'>
          <img className='preview' src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbLLREg%2FbtrbhYLdx4M%2Fw3BWXIjm185YfkGITrU9HK%2Fimg.jpg' alt='' />
        </div>
        {
          pathname === '/about'
            ?
            <div className='about-area'>
              <div className='about-logo-area'><img className='logo' src='/images/studio9will-logo2.svg' alt='' /></div>
              <div className='about-text'>I'll make anything for you</div>
              <div className='about-text2'>서울특별시 서대문구 연희로57 2F</div>
              <div className='about-text2'>김희원, 한덕규</div>
            </div>
            :
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
        }
      </div>
    </>
  )
}

export default About