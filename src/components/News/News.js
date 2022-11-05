import React from 'react';
import './News.scss';
import newsIcon from '../../assets/news.svg';

const News = () => {
    return (
        <div className={'news'}>
            <div className="all">
                <div className="all__items">
                    <div className="all-title">
                        <p className={'all-title-header'}>Всі новини</p>
                        <div className="all-title-archive"></div>
                    </div>
                    <div className="all__selected">
                        <button className={"all__selected-button active"}>Всі</button>
                        <button className={"all__selected-button"}>Новини</button>
                        <button className={"all__selected-button"}>Статті</button>
                    </div>
                    <div className="all__article">"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>
                    <div className={'camera'}><i className="fa-solid fa-camera"></i>Новина з фото</div>
                    <div className="all__article">"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>
                    <div className="all__article">"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>
                    <div className={'fire-icon'}><i className="fa-solid fa-fire"></i>Термінова новина</div>
                    <div className="all__article">"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>
                    <div className="all__article">"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>
                    <div className="all__article">"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>
                    <div className="all__article">"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>
                    <div className="all__article">"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>
                    <div className="all__article">"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>
                    <div className="all__article">"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>

                    <button className={'all__article-load-btn'}><i className="fa-solid fa-spinner fa-lg"></i>Завантажити
                        ще
                    </button>
                </div>
            </div>
            <div>
                <div className="news__all">
                    <div className={"news__selection-title"}><p>Вибір редакції</p></div>
                    <div className="news__selection">
                        <div className={'news__selection-block'}>
                            <img className={'news__selection-image'} src={newsIcon} alt=""/>
                            <div className="news__selection-data">05 серпня 11:00</div>
                            <p className="news__selection-text">Селезньов розповів, навіщо росіяни спустошують склади
                                боєприпасів у Білорусі.</p>
                        </div>
                        <div className={'news__selection-block'}><img className={'news__selection-image'} src={newsIcon}
                                                                      alt=""/>
                            <div className="news__selection-data">05 серпня 11:00</div>
                            <p className="news__selection-text">Генерал Романенко оцінив бойовий потенціал і
                                спроможності
                                ворога на півдні України.</p>
                        </div>
                        <div className={'news__selection-block'}>
                            <img className={'news__selection-image'} src={newsIcon} alt=""/>
                            <div className="news__selection-data">05 серпня 11:00</div>
                            <p className="news__selection-text">Генерал Романенко оцінив бойовий потенціал і
                                спроможності
                                ворога на півдні України.</p>
                        </div>
                        <div className={'news__selection-block'}><img className={'news__selection-image'} src={newsIcon}
                                                                      alt=""/>
                            <div className="news__selection-data">05 серпня 11:00</div>
                            <p className="news__selection-text">У "Слузі" пояснили, чому в росії знову заговорили про
                                переговори з Україною.
                            </p>
                        </div>
                        <div className={'news__selection-block'}><img className={'news__selection-image'} src={newsIcon}
                                                                      alt=""/>
                            <div className="news__selection-data">05 серпня 11:00</div>
                            <p className="news__selection-text">ТРЦ Ocean Plaza після чуток про закриття оголосив про
                                відновлення роботи.</p>
                        </div>
                        <div className={'news__selection-block'}><img className={'news__selection-image'} src={newsIcon}
                                                                      alt=""/>
                            <div className="news__selection-data">05 серпня 11:00</div>
                            <p className="news__selection-text">Білорусь несподівано вирішила провести військові
                                навчання з
                                Казахстаном: що відомо.</p>
                        </div>
                    </div>
                </div>

                <div className={"regions-header"}>
                    <div className={"regions-title"}>Регіони</div>
                    <div className="regions-subtitle">Всі новини розділу</div>
                </div>
                <div className={"regions"}>
                </div>
                <div className="regions-wrapper">
                    <div className="regions__city">
                        <div className="regions__city-container">
                            <h1 className={'regions__city-header'}>Київ</h1>
                            <div className="regions__city-date">05 серпня</div>
                            <div className={"regions__city-container-item"}>ТРЦ Ocean Plaza після чуток про
                                закриття
                                оголосив про відновлення роботи
                            </div>
                            <div className="regions__city-date">04 серпня</div>
                            <div className={"regions__city-container-item"}>На Київщині загиблого під час
                                окупації
                                чоловіка
                                знайшли у колодязі: його прикмети
                            </div>
                            <div className={"regions__city-container-item"}>КМДА контролюватиме якість
                                підготовки до
                                опалювального сезону
                            </div>
                            <div className={"regions__city-container-item"}>Дружина Зеленського чесно зізналася,
                                чи
                                боїться
                                смерті
                            </div>
                            <div className={"regions__city-container-item"}>ТРЦ Ocean Plaza після чуток про
                                закриття
                                оголосив про відновлення роботи
                            </div>
                            <div className="regions__city-container-btn">Більше новин <i
                                className="fa-regular fa-circle-right fa-lg"></i></div>
                        </div>
                    </div>
                    <div className="regions__city">
                        <div className="regions__city-container">
                            <h1 className={'regions__city-header'}>Київ</h1>
                            <div className="regions__city-date">05 серпня</div>
                            <div className={"regions__city-container-item"}>ТРЦ Ocean Plaza після чуток про
                                закриття
                                оголосив про відновлення роботи
                            </div>
                            <div className={"regions__city-container-item"}>На Київщині загиблого під час
                                окупації
                                чоловіка
                                знайшли у колодязі: його прикмети
                            </div>
                            <div className={"regions__city-container-item"}>КМДА контролюватиме якість
                                підготовки до
                                опалювального сезону
                            </div>
                            <div className={"regions__city-container-item"}>Дружина Зеленського чесно
                                зізналася, чи
                                боїться
                                смерті
                            </div>
                            <div className={"regions__city-container-item"}>ТРЦ Ocean Plaza після чуток про
                                закриття
                                оголосив про відновлення роботи
                            </div>
                            <div className="regions__city-container-btn">Більше новин <i
                                className="fa-regular fa-circle-right fa-lg"></i></div>
                        </div>
                    </div>
                    <div className="regions__city">
                        <div className="regions__city-container">
                            <h1 className={'regions__city-header'}>Київ</h1>
                            <div className="regions__city-date">05 серпня</div>
                            <div className={"regions__city-container-item"}>ТРЦ Ocean Plaza після чуток про
                                закриття
                                оголосив про відновлення роботи
                            </div>
                            <div className={"regions__city-container-item"}>На Київщині загиблого під час
                                окупації
                                чоловіка
                                знайшли у колодязі: його прикмети
                            </div>
                            <div className={"regions__city-container-item"}>КМДА контролюватиме якість
                                підготовки до
                                опалювального сезону
                            </div>
                            <div className={"regions__city-container-item"}>Дружина Зеленського чесно
                                зізналася, чи
                                боїться
                                смерті
                            </div>
                            <div className={"regions__city-container-item"}>ТРЦ Ocean Plaza після чуток про
                                закриття
                                оголосив про відновлення роботи
                            </div>
                            <div className="regions__city-container-btn">Більше новин <i
                                className="fa-regular fa-circle-right  fa-lg"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;