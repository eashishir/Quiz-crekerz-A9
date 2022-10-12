import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistic = () => {
    const statistics = useLoaderData();
    const statisticAll = statistics.data;
    console.log(statisticAll)
    const data = [
        { name: statisticAll[0].name, value: statisticAll[0].total },
        { name: statisticAll[1].name, value: statisticAll[1].total },
        { name: statisticAll[2].name, value: statisticAll[2].total },
        { name: statisticAll[3].name, value: statisticAll[3].total },
    ];
    return (
        <div className="text-center m-5">

            <LineChart width={500} height={400} data={data}
            >
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
            <div className='text-center text-danger'>
                <h1>Quiz Statistic</h1>

            </div>
            <hr />
        </div>
    );
};

export default Statistic;