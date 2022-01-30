import React from 'react';
import axios from 'axios';
import HistoryItem from './HistoryItem';
import { Outlet } from 'react-router-dom';

const { useState, useEffect } = React;



const History = () => {

    const [historyList, setHistoryList] = useState([]);

    useEffect(() => {
        fetchLaunches().then(response => {
            console.log('response: ', response)
            setHistoryList(response.data)
        });
    }, [])
    console.log('history list: ', historyList)
    return (
        <div className="history-wrapper">
            <div className="history-items">
                {historyList.map((item, key) => {
                    return <HistoryItem key={key} item={item} />
                })}
            </div>
            <Outlet />
        </div>
    )
}

function fetchLaunches() {
    return axios.get('https://api.spacexdata.com/v3/launches', {
        params: {
            limit: 15
        }
    })
}

function fetchHistory() {
    return axios.get('https://api.spacexdata.com/v3/history')
}


export default History