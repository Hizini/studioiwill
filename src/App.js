import './App.css'
import Building from './Building/Building'

function App() {
  return (
    <div className='studioiwill-root-container'>
      <div className='studioiwill-back'>
        <Building height={'563px'} number={'01'} title={'GRAY CITY 신사옥'} date={2022.09} />
        <Building height={'788px'} number={'01'} title={'Ducker'} date={2022.06} />
        <Building height={'640px'} number={'01'} title={'GRAY CITY 신사옥'} date={2022.09} />
        <Building height={'916px'} number={'01'} title={'GRAY CITY 신사옥'} date={2022.09} />
        <Building height={'507px'} number={'01'} title={'GRAY CITY 신사옥'} date={2022.09} />
      </div>
      <div className='studioiwill-front'>
        <Building height={'380px'} number={'01'} title={'GRAY CITY 신사옥'} date={2022.09} />
        <Building height={'473px'} number={'01'} title={'Ducker'} date={2022.06} />
      </div>
    </div>
  )
}

export default App