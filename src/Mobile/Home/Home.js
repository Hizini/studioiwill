import React, { useState } from "react";
import "./Home.scss";
import Building from "./Building/Building";
import { projectData } from "../../Data/Data";
import { Drawer } from "@material-ui/core";

const Home = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const handleClickMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };
    const bodyHeight =
        Math.max(
            ...projectData.data.map((v) =>
                Number(v.mobile_style.height.slice(0, -2))
            )
        ) + 13;
    return (
        <div className="studioiwill-mobile-home-root-container">
            <div className="mobile-home-header">
                <img
                    className="logo"
                    src="/images/studioiwill-logo.svg"
                    alt="logo"
                />
                <img
                    className="menu"
                    src="/images/menu.webp"
                    alt="menu"
                    onClick={handleClickMenu}
                />
            </div>
            <div className="mobile-home-body" style={{ height: bodyHeight }}>
                {projectData.data.map((data, index) => (
                    <Building
                        style={data.mobile_style}
                        number={data.number}
                        title={data.title}
                        date={data.date}
                        index={index}
                        key={index}
                    />
                ))}
            </div>
            <Drawer
                anchor="right"
                open={isOpenMenu}
                onClose={handleClickMenu}
                onOpen={handleClickMenu}
				style={{ zIndex: 9999 }}
            >
                <div>hihi</div>
            </Drawer>
        </div>
    );
};

export default Home;
