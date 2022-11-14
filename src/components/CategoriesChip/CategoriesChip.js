import React from 'react';
import "./CategoriesChip.scss"

const CategoriesChip = ({img, date, text}) => {
    return (<div className={'categories-politics'}>
        <div className={'categories-politics__flex-block flex'}>
            <div className="categories-politics__flex-miniblock">
                <img className={"categories-politics__flex-miniblock-img"} src={img}
                     alt=""/>
                <div className="categories-politics__flex-miniblock-date">{date}
                </div>
                <div className="categories-politics__flex-miniblock-text">{text}
                </div>
            </div>
            <div className="categories-politics__flex-miniblock">
                <img className={"categories-politics__flex-miniblock-img"} src={img}
                     alt=""/>
                <div className="categories-politics__flex-miniblock-date">{date}
                </div>
                <div className="categories-politics__flex-miniblock-text">{text}
                </div>
            </div>
        </div>
    </div>);
};

export default CategoriesChip;