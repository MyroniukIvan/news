import React from 'react';
import './StatisticsItem.scss'

const StatisticItem = ({icon, title, quantity}) => {

    return (<>
            <div className={'statistics-block'}><img className={'statistics-icon'} src={icon} alt={title}/>{title.length > 10 ? `${title.slice(0,8) + "..." }`: title}
                <span>{quantity}</span>
            </div>
        </>)
}

export default StatisticItem;