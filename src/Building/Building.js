import './Building.css'

function Building(props) {
    const { height, number, title, date } = props
    return (
        <div className='building' style={{ height }}>
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