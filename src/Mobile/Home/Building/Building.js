import "./Building.scss";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";

function Building(props) {
    const {
        // 빌딩 정보
        style,
        number,
        title,
        date,
        status,
        index,
        sub,
    } = props;
    const [offsetHeight, setOffsetHeight] = useState(0);
    const ref = useRef(null);
	const navigate = useNavigate();

    useLayoutEffect(() => {
        if (ref.current.style.height.includes("%")) {
            style.height =
                (style.height.slice(0, -1) *
                    ref.current.parentElement.offsetHeight) /
                100;
            setOffsetHeight(style.height);
        } else {
            setOffsetHeight(ref.current.offsetHeight - 6); // offsetHegiht - border로 인해 추가된 height
        }
    }, [style]);

    const checkedBuildingIndexes =
        JSON.parse(sessionStorage.getItem("checkedBuildingIndexes")) ?? [];
    const isChecked = checkedBuildingIndexes.includes(number);

    const goto = (url, params) => {
        if (!isChecked) {
            checkedBuildingIndexes.push(number);
            sessionStorage.setItem(
                "checkedBuildingIndexes",
                JSON.stringify(checkedBuildingIndexes)
            );
        }
        navigate(url, params);
    };

    return (
        <div
            className={`m-building ${isChecked ? "checked" : ""}`}
            style={{
                ...style,
                zIndex: Math.floor((10000 - offsetHeight) / 2),
            }}
            onClick={() => goto("/detail", { state: { status, index } })}
            ref={ref}
        >
            <div className="text-area">
                {index + 1}
                <div className="sub">{sub}</div>
                <div className="title">{title}</div>
            </div>
            <div
                className={`side ${isChecked ? "checked" : ""}`}
                style={{ height: offsetHeight + 13 + "px" }}
            ></div>
        </div>
    );
}

export default Building;
