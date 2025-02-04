import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import Home from './Home/Home'
import About from './About/About'
import Detail from './Detail/Detail'
import MobileHome from './Mobile/Home/Home'
import MobileDetail from './Mobile/Detail/Detail'

const App = () => {
  return (
    isMobile
    ?
    <Routes>
      <Route path="/" element={<MobileHome />} />
      <Route path="/home" element={<MobileHome />} />
      <Route path="/detail" element={<MobileDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    :
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App