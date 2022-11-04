import React from 'react';
import './NewsChip.scss';

const NewsChip = ({img, text}) => {
    return (
        <div className="card">
            <div className="card__block active">
                <img className={"card__block-img"} src={img} alt=""/>
                <div className={'card__text'}>{text}
                </div>
            </div>
        </div>
    );
};

export default NewsChip;
