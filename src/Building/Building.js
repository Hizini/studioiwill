import "./Building.scss";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";

function Building(props) {
    const [offsetHeight, setOffsetHeight] = useState(0);
    const ref = useRef(null);

    useLayoutEffect(() => {
        if(style.height.includes('%')) {
            style.height = style.height.slice(0, -1) * ref.current.parentElement.offsetHeight / 100
            setOffsetHeight(style.height);
        } else {
            setOffsetHeight(ref.current.offsetHeight - 6); // offsetHegiht - border로 인해 추가된 height
        }
            
    }, []);

    const {
        // 빌딩 정보
        style,
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
            className={`building ${isChecked ? 'checked' : ''}`}
            style={{
                ...style,
                zIndex: Math.floor((10000 - offsetHeight) / 2),
            }}
            onClick={() => goto("/detail", { state: { status, index } })}
            ref={ref}
        >
            <div className="text-area">
                <div className="number">{number}</div>
                <div className="title">{title}</div>
                <div className="date">{date}</div>
            </div>
            <div className={`side ${isChecked ? 'checked' : ''}`} style={{ height: offsetHeight + 13 + "px" }}>
            </div>
        </div>
    );
}

export default Building;
