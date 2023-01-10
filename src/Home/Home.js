import './Home.css'
import Building from '../Building/Building'
import { backBuilding, frontBuilding } from '../Data/Data'

const Home = () => {
  
  return (
    <div className='studioiwill-Home-root-container'>
      <div className='studioiwill-back'>
        <div className='logo-area'><img className='logo' src='/images/studioiwill-logo.svg' alt='logo' /></div>
        {backBuilding.map((data, index) => <Building height={data.height} number={data.number} title={data.title} date={data.date} status={'back'} index={index}/>)}
      </div>
      <div className='studioiwill-front'>
        {frontBuilding.map((data, index) => <Building height={data.height} number={data.number} title={data.title} date={data.date} status={'front'} index={index}/>)}
      </div>
    </div>
  )
}

export default Home