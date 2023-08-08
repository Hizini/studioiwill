import React, { useState } from "react";
import "./Home.scss";
import Building from "./Building/Building";
import { projectData } from "../../Data/Data";
import { Drawer } from "@material-ui/core";
import { PUBLIC_IMG_PATH } from '../../js/util';

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
                    src={`${PUBLIC_IMG_PATH}/studioiwill-logo.svg`}
                    alt="logo"
                />
                <img
                    className="menu"
                    src={`${PUBLIC_IMG_PATH}/menu.webp`}
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
                PaperProps={{
                    style: {
                        width: "80vw",
                    },
                }}
            >
                <div className="mobile-menu-root-container">
                    <div className="close" onClick={handleClickMenu}>
                        <img src={`${PUBLIC_IMG_PATH}/close.svg`} alt="close" />
                    </div>
                    <div className="logo">
                        <img src={`${PUBLIC_IMG_PATH}/studioiwill-logo.svg`} alt="logo" />
                    </div>
                    <div className="border" />
                    <div className="menu-area">
                        <div className="menu-item">에 대한</div>
                        <div className="menu-item">프로젝트</div>
                        <div className="menu-item">연락하다</div>
                    </div>
                    <div className="menu-footer">
                        <div className="footer-logo-area">
                            <img
                                className="footer-logo"
                                src={`${PUBLIC_IMG_PATH}/studioiwill-logo3.svg`}
                                alt="logo"
                            />
                            <img
                                className="footer-instagram"
                                src={`${PUBLIC_IMG_PATH}/instagram-logo.webp`}
                                alt=""
                            />
                        </div>
                        <div className="footer-info">
                            서울특별시 서대문구 연희로57 2F<br/>김희원 , 한덕규
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default Home;
