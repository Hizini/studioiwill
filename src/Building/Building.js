import './Building.css'
import { useNavigate } from "react-router-dom"


function Building(props) {
    const { height, number, title, date, status, index } = props
    const navigate = useNavigate()

    return (
        <div className='building' style={{ height }} onClick={() => navigate('/detail', { state: { status, index } })}>
            <div className='text-area'>
                <div className='number'>{number}</div>
                <div className='title'>{title}</div>
                <div className='date'>{date}</div>
            </div>
            <div className='side' style={{ height }}>
                <div className='space' />
            </div>
        </div>
    )
}

export default Building