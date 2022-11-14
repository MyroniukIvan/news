import React from 'react';
import './Statistics.scss';
import {useFetch} from "../../services/useFetch";
import StatisticItem from "../StatisticsItem/StatisticItem";



const Statistics = () => {
    const {
        data, loading, error,
    } = useFetch('https://russianwarship.rip/api/v1/terms/en');

    const {
        data: data2, loading: loading2, error: error2,
    } = useFetch('https://russianwarship.rip/api/v1/statistics/latest');
    console.log(data2)
    if (!data || !data2) return <h1> LOADING...</h1>;
    if (loading || loading2) return <h1> LOADING...</h1>;
    if (error || error2) console.log('error');



    return (<div className={'statistics'}>
        <div className={'statistics-cover'}>
            {data2?.data?.day} день війни
        </div>

        {Object.keys(data?.data).slice(0,10).map(key => {
            console.log(data?.data)
            return <StatisticItem key={key.key}
                                  quantity={data2?.data?.stats[key]}
                                  title={data?.data[key]?.title}
                                  icon={data?.data[key]?.icon}
            />
        })}
    </div>);
};

export default Statistics;