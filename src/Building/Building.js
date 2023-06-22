import "./Building.scss";
import { useNavigate } from "react-router-dom";

function Building(props) {
    const {
        height,
        number,
        title,
        date,
        status,
        index,
        marginRight = 46,
    } = props;
    const navigate = useNavigate();

    const checkedBuildingIndexes = JSON.parse(sessionStorage.getItem('checkedBuildingIndexes')) ?? [];
    const isChecked = checkedBuildingIndexes.includes(index);

    const goto = (url, params) => {
        if(!isChecked) {
            checkedBuildingIndexes.push(index);
            sessionStorage.setItem('checkedBuildingIndexes', JSON.stringify(checkedBuildingIndexes));
        }
        
        navigate(url, params);
    }

    return (
        <div
            className={`building ${isChecked ? 'checked' : ''}`}
            style={{
                height: height + "px",
                zIndex: Math.floor((10000 - height) / 2),
                marginRight: marginRight + "px",
            }}
            onClick={() => goto("/detail", { state: { status, index } })}
        >
            <div className="text-area">
                <div className="number">{number}</div>
                <div className="title">{title}</div>
                <div className="date">{date}</div>
            </div>
            <div className={`side ${isChecked ? 'checked' : ''}`} style={{ height: height + 13 + "px" }}>
                <div className="window first" />
                <div className="window second" />
                <div className="window third" />
            </div>
        </div>
    );
}

export default Building;
