import React from 'react';
import "./Categories.scss";
import newsIcon from '../../assets/news.svg';


import {category} from "../../data/news";
import CategoriesChip from "../CategoriesChip/CategoriesChip";

const Categories = () => {
    return (<div className={"categories"}>
            <div className="categories__all">
                <div className="categories__all-header">
                    <div className={'categories__all-header-col'}>Колонки</div>
                    <div><span> Всі колонки</span></div>
                </div>
                <div className="categories__all-article">
                    <div className={'categories__all-article-name'}><i className="fa-solid fa-person"></i>Юлія
                        Стахівська
                    </div>
                    <div className={'categories__all-article-job'}>письменниця</div>
                </div>
                <div className="categories__all-article-text">Жінок в часи небезпеки приваблюють сильні чоловіки</div>
                <div className="categories__all-article-date">04 серпня 15:15</div>

                <div className="categories__all-article">
                    <div className={'categories__all-article-name'}><i className="fa-solid fa-person"></i>Юрій
                        Андрухович
                    </div>
                    <div className={'categories__all-article-job'}>письменник</div>
                </div>
                <div className="categories__all-article-text">Штайнмаєр - людина-формула</div>
                <div className="categories__all-article-date">04 серпня 15:15</div>

                <div className="categories__all-article">
                    <div className={'categories__all-article-name'}><i className="fa-solid fa-person"></i>Анна
                        Прокопенко
                    </div>
                    <div className={'categories__all-article-job'}>журналістка</div>
                </div>
                <div className="categories__all-article-text">Щоденник війни. П'ятий тиждень довгого лютого</div>
                <div className="categories__all-article-date">04 серпня 15:15</div>

                <div className="categories__all-article">
                    <div className={'categories__all-article-name'}><i className="fa-solid fa-person"></i>Ірена Карпа
                    </div>
                    <div className={'categories__all-article-job'}>журналістка</div>
                </div>
                <div className="categories__all-article-text">Не пощастило з географією. Небезпечний сусід</div>
                <div className="categories__all-article-date">04 серпня 15:15</div>

                <button className={'all__article-load-btn'}><i className="fa-solid fa-spinner fa-lg"></i>Завантажити
                    ще
                </button>
            </div>
            <div className="categories-politics">
                <div>
                    <div className="categories-politics__flex">
                        <div className="categories-politics-header">
                            <div>Політика</div>
                            <div><span>Всі новини розділу</span></div>
                            <div className="categories-politics__flex-block">
                                <div className="categories-politics__flex-maxblock">
                                    <img className={"categories-politics__flex-maxblock-img"} src={newsIcon} alt=""/>
                                    <div className="categories-politics__flex-maxblock-date">05 серпня 11:00</div>
                                    <div className="categories-politics__flex-maxblock-text">У "Слузі" пояснили, чому в
                                        росії
                                        знову заговорили про переговори з Україною.
                                    </div>
                                </div>
                            </div>
                            <div>
                                {category.map(el => {
                                    return <CategoriesChip {...el}/>
                                })}
                            </div>
                        </div>

                        <div className="categories-politics-news">
                            <div className="categories-politics-news-header">Новини розділу</div>
                            <div className={'fire-icon'}><i className="fa-solid fa-fire"></i>Термінова новина</div>
                            <div className="categories-politics-news-block">
                                <p className="categories-politics-news-date">14:59</p>
                                <div className="categories-politics-news-text">До Європи за захистом. Що означає позов
                                    Ахметова до Європейського суду з прав людини
                                </div>
                            </div>
                            <div className="categories-politics-news-block">
                                <p className="categories-politics-news-date">14:59</p>
                                <div className="categories-politics-news-text">До Європи за захистом. Що означає позов
                                    Ахметова до Європейського суду з прав людини
                                </div>
                            </div>
                            <div className="categories-politics-news-block">
                                <p className="categories-politics-news-date">14:59</p>
                                <div className="categories-politics-news-text">До Європи за захистом. Що означає позов
                                    Ахметова до Європейського суду з прав людини
                                </div>
                            </div>
                            <div className="categories-politics-news-block">
                                <p className="categories-politics-news-date">14:59</p>
                                <div className="categories-politics-news-text">До Європи за захистом. Що означає позов
                                    Ахметова до Європейського суду з прав людини
                                </div>
                            </div>
                            <div className="categories-politics-news-block">
                                <p className="categories-politics-news-date">14:59</p>
                                <div className="categories-politics-news-text">До Європи за захистом. Що означає позов
                                    Ахметова до Європейського суду з прав людини
                                </div>
                            </div>
                            <div className="categories-politics-news-btn">Більше новин <i
                                className="fa-regular fa-circle-right fa-lg"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)

};

export default Categories;