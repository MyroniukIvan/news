import React, {useMemo, useState} from 'react';
import "./HeroSection.scss";

import NewsChip from "../NewsChip/NewsChip";
import {news} from '../../data/news';
import _ from "lodash";

const HeroSection = () => {
    const [count, setCount] = useState(1);

    const chunks = useMemo(() => {
        return _.chunk(news, 4)
    }, [])

    const increase = () => {
        if (count < (chunks.length)) {
            setCount(count => count + 1)
        }
    }

    const decrease = () => {
        if (count > 1) {
            setCount(count => count - 1)
        }
    }


    return (<div id={'background'} style={{
            backgroundImage: `url(${chunks[count - 1][0].img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            backgroundPosition: "50% 25%",
        }}>
            <div className={'hero'}>
                <div className="hero-text">{chunks[count - 1][0].text}
                </div>
                <div className="carousel">
                    <div className="carousel__controls">
                        <div className={'carousel__btn-prev'}><i onClick={decrease}
                                                                 className="fa-solid fa-circle-chevron-left fa-xl"></i>
                        </div>
                        <div>{count} / {chunks.length}</div>
                        <div className={'carousel__btn-next'}><i onClick={increase}
                                                                 className="fa-solid fa-circle-chevron-right fa-xl"></i>
                        </div>
                    </div>
                </div>
                <div className={'cards'}>
                    {chunks[count - 1].map(el => {
                        return <NewsChip {...el}/>
                    })}
                </div>
            </div>
        </div>);
};

export default HeroSection;