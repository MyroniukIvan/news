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
                    <div className="all-selected">
                        <button>Всі</button>
                        <button>Новини</button>
                        <button>Статті</button>
                    </div>
                    <div className="all__article"><p className={"all__article-time"}>14:59</p>"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>

                    <div className="all__article"><p className={"all__article-time"}>14:59</p>"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>
                    <div className="all__article"><p className={"all__article-time"}>14:59</p>"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>
                    <div className="all__article"><p className={"all__article-time"}>14:59</p>"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>
                    <div className="all__article"><p className={"all__article-time"}>14:59</p>"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>
                    <div className="all__article"><p className={"all__article-time"}>14:59</p>"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>
                    <div className="all__article"><p className={"all__article-time"}>14:59</p>"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>
                    <div className="all__article"><p className={"all__article-time"}>14:59</p>"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>
                    <div className="all__article"><p className={"all__article-time"}>14:59</p>"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>
                    <div className="all__article"><p className={"all__article-time"}>14:59</p>"Відбудова України — завдання усього
                        світу": промова Зеленського на
                        конференції в Лугано
                    </div>
                </div>
            </div>
            <div>
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
                        <p className="news__selection-text">Генерал Романенко оцінив бойовий потенціал і спроможності
                            ворога на півдні України.</p>
                    </div>
                    <div className={'news__selection-block'}>
                        <img className={'news__selection-image'} src={newsIcon} alt=""/>
                        <div className="news__selection-data">05 серпня 11:00</div>
                        <p className="news__selection-text">Генерал Романенко оцінив бойовий потенціал і спроможності
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
                        <p className="news__selection-text">Білорусь несподівано вирішила провести військові навчання з
                            Казахстаном: що відомо.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;