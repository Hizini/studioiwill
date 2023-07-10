import "./Building.scss";
import { useNavigate } from "react-router-dom";

function Building(props) {
    const {
        // 빌딩 정보
        style,
        height = Number(style.height.slice(0, -2)),
        number,
        title,
        date,
        status,
        index,
        // 빌딩 클릭 이벤트
        showBuildingDetail
    } = props;
    const navigate = useNavigate();


    const checkedBuildingIndexes = JSON.parse(sessionStorage.getItem('checkedBuildingIndexes')) ?? [];
    const isChecked = checkedBuildingIndexes.includes(index);

    const goto = (url, params) => {
        if(!isChecked) {
            checkedBuildingIndexes.push(index);
            sessionStorage.setItem('checkedBuildingIndexes', JSON.stringify(checkedBuildingIndexes));
        }
        
        showBuildingDetail(params);
        // navigate(url, params);
    }

    return (
        <div
            className={`m-building ${isChecked ? 'checked' : ''}`}
            style={{
                ...style,
                zIndex: Math.floor((10000 - height) / 2),
            }}
            onClick={() => goto("/detail", { state: { status, index } })}
        >
            <div className="text-area">
                <div className="number">{number}</div>
                <div className="title">{title}</div>
                <div className="date">{date}</div>
            </div>
            <div className={`side ${isChecked ? 'checked' : ''}`} style={{ height: height + 13 + "px" }}>
            </div>
        </div>
    );
}

export default Building;
