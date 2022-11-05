import React from 'react';
import "./VideoSection.scss";


const VideoSection = () => {
    return (
        <div>
            <div className="video__header">
                <div className="video__header-title">Відео</div>
                <div className="video__subtitle">Більше новин</div>
            </div>
            <div className="video">
                {/*MAIN BLOCK*/}

                <div className={"video-main-container"}>
                    <div className="video__block">
                        <iframe className={'video__main'} width={640} height={360}
                                src="https://www.youtube.com/embed/6dBKNDQDd28" title="HIGHLIGHTS |
                USYK vs. JOSHUA 2\" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture" allowFullScreen/>
                        <div className="video-block-header-main">
                            <div className="video__block-date">05 серпня 11:00</div>
                            <div className="video__block-title">"Це не Джошуа": Усик розповів, кого вважає своїм
                                головним
                                суперником
                            </div>
                        </div>
                    </div>
                </div>

                <div className="video__container">
                    {/*Container*/}
                    <div className="video__block">
                        <iframe className={'video__video'} width={304} height={171}
                                src="https://www.youtube.com/embed/RwXSd1dph5s"
                                title="USYK vs. JOSHUA 2 | Promo" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>

                        <div className="video__block-header">
                            <div className="video__block-date">05 серпня 11:00</div>
                            <div className="video__block-title">"Це не Джошуа": Усик розповів, кого вважає своїм
                                головним
                                суперником
                            </div>
                        </div>
                    </div>

                    <div className="video__block">
                        <iframe className={'video__video'} width={304} height={171}
                                src="https://www.youtube.com/embed/RwXSd1dph5s" title="HIGHLIGHTS |
                USYK vs. JOSHUA 2\" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture" allowFullScreen/>

                        <div className="video__block-header">
                            <div className="video__block-date">05 серпня 11:00</div>
                            <div className="video__block-title">"Це не Джошуа": Усик розповів, кого вважає своїм
                                головним
                                суперником
                            </div>
                        </div>
                    </div>
                    <div className="video__block">
                        <iframe className={'video__video'} width={304} height={171}
                                src="https://www.youtube.com/embed/RwXSd1dph5s" title="HIGHLIGHTS |
                USYK vs. JOSHUA 2\" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture" allowFullScreen/>

                        <div className="video__block-header">
                            <div className="video__block-date">05 серпня 11:00</div>
                            <div className="video__block-title">"Це не Джошуа": Усик розповів, кого вважає своїм
                                головним
                                суперником
                            </div>
                        </div>
                    </div>

                    <div className="video__block">
                        <iframe className={'video__video'} width={304} height={171}
                                src="https://www.youtube.com/embed/RwXSd1dph5s" title="HIGHLIGHTS |
                USYK vs. JOSHUA 2\" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture" allowFullScreen/>

                        <div className="video__block-header">
                            <div className="video__block-date">05 серпня 11:00</div>
                            <div className="video__block-title">"Це не Джошуа": Усик розповів, кого вважає своїм
                                головним
                                суперником
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;