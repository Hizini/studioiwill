import './About.css'
import Nav from '../Nav/Nav'

const About = () => {
  const { pathname } = window.location
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
              <div className='about-text2'>김희원 , 한덕규</div>
            </div>
            :
            <div className='detail-area'>
              <div className='project-area'>
                <div className='project'>PROJECT</div>
                <div className='project-title'>GRAY CITY 신사옥</div>
              </div>
              <div className='project-info'>
                <div className='project-info-item'>
                  <div className='project-info-label'>DATE</div>
                  <div className='project-info-value'>2022년 9월</div>
                </div>
                <div className='project-info-item'>
                  <div className='project-info-label'>LOCATION</div>
                  <div className='project-info-value'>서울시 송파구 방이동 168 - 5</div>
                </div>
                <div className='project-info-item'>
                  <div className='project-info-label'>AREA</div>
                  <div className='project-info-value'>826m² (52.84PY)</div>
                </div>
                <div className='project-info-item'>
                  <div className='project-info-label'>DESIGNER</div>
                  <div className='project-info-value'>김희원 , 한덕규</div>
                </div>
              </div>
            </div>
        }
      </div>
    </>
  )
}

export default About