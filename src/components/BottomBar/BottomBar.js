import React from 'react';
import "./BottomBar.scss";

const BottomBar = () => {
    return (
        <div className="bottomBar">
            <div className="bottomBar__list">
                <div>
                    <i className="fa-solid fa-fire"></i>
                    війна
                </div>
                <div>новини</div>
                <div>політика</div>
                <div>економіка</div>
                <div>суспільство</div>
                <div>погляди</div>
                <div>світ</div>
                <div>
                </div>
            </div>
            <div className="bottomBar-live"><i className="fa-solid fa-podcast"></i>live</div>
        </div>
    );
};

export default BottomBar;