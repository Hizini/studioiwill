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

    return (
        <div
            className="building"
            style={{
                height: height + "px",
                zIndex: -height,
                marginRight: marginRight + "px",
            }}
            onClick={() => navigate("/detail", { state: { status, index } })}
        >
            <div className="text-area">
                <div className="number">{number}</div>
                <div className="title">{title}</div>
                <div className="date">{date}</div>
            </div>
            <div className="side" style={{ height: height + 13 + "px" }}>
                <div className="window first" />
                <div className="window second" />
                <div className="window third" />
            </div>
        </div>
    );
}

export default Building;
