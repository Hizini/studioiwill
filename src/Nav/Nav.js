import './Nav.scss'
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    const { setShowDetail } = props;

    return (
        <>
            {
                setShowDetail
                    ? <div className='nav-logo-area-in-detail' onClick={() => setShowDetail(false)}><img className='logo' src='/images/studioiwill-small-logo.png' alt='' /></div>
                    : <div className='nav-container'>
                        <NavLink to={'/'} className='nav-logo-area'><img className='logo' src='/images/studioiwill-small-logo.png' alt='' /></NavLink>
                        <div className='menu-area'>
                            <NavLink to={'/about'} className='menu-item'>~에 대한</NavLink>
                            <NavLink className='menu-item'>프로젝트</NavLink>
                            <NavLink className='menu-item'>연락하다</NavLink>
                            <NavLink className='menu-item'><img className='instagram' src='/images/instagram-logo.webp' alt='' /></NavLink>
                        </div>
                    </div>
            }
        </>
    )
}

export default Nav