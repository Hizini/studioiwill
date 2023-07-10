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
                            <NavLink className='menu-item' to={'/'}>프로젝트</NavLink>
                            <div className='menu-item' onClick={() => window.location.href = 'mailto:designstudio.iwill@gmail.com'}>연락하다</div>
                            <a className='menu-item' href={'https://instagram.com/design.studio.iwill?igshid=MjEwN2IyYWYwYw=='} target='_blank' rel="noreferrer"><img className='instagram' src='/images/instagram-logo.webp' alt='' /></a>
                        </div>
                    </div>
            }
        </>
    )
}

export default Nav