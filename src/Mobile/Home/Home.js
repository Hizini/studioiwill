import './Home.scss'
import Building from '../../Building/Building'
import { projectData } from '../../Data/Data'

const Home = () => {
  
  return (
    <div className='studioiwill-mobile-home-root-container'>
      {/* {
        projectData.data.map((data, index) => {

          return <Building height={data.height} number={data.number} title={data.title} date={data.date}/>
        })
      } */}
      <Building height={'70vh'} number={'01'} title={'GRAY CITY 신사옥'} date={'2022.09'}/>
    </div>
  )
}

export default Home