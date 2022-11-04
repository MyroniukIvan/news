import React from 'react';
import './Statistics.scss';
import tanksvg from '../../assets/Helmet.svg';
import artsystems from '../../assets/artsystems.svg';
import planes from '../../assets/planes.svg';
import missiles from '../../assets/Missile.svg';
import helicopters from '../../assets/helicopters.svg';
import bbm from '../../assets/bbm.svg';


const Statistics = () => {
    return (
        <div className={'statistics'}>
            <div className={'statistics-cover'}>131 день війни:</div>
            <div>особовий склад <span>~36 200</span></div>
            <div className={'statistics-block'}><img className={'statistics-icon'} src={tanksvg} alt="tanksvg"/>танки <span>1 589</span></div>
            <div className={'statistics-block'}><img className={'statistics-icon'} src={artsystems} alt="artsystems"/>артсистеми <span>4578</span></div>
            <div className={'statistics-block'}><img className={'statistics-icon'} src={planes} alt="planes"/>літаки <span>220</span></div>
            <div className={'statistics-block'}><img className={'statistics-icon'} src={missiles} alt="missiles"/>РСЗВ <span>246</span></div>
            <div className={'statistics-block'}><img className={'statistics-icon'} src={helicopters} alt="helicopters"/>гелікоптери <span>190</span>
            </div>
            <div className={'statistics-block'}><img className={'statistics-icon'} src={bbm} alt="bbm"/>ББМ <span>4578</span></div>
        </div>
    );
};

export default Statistics;