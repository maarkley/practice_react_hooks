import React from 'react'
import History from './History'
import Navbar from './Navbar'
import HomeHeader from './HomeHeader'
import { Route, Routes } from 'react-router-dom'

const App = () => {

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomeHeader />} />
                <Route path="history" element={<History />}>
                    <Route path=":slug" element={<HomeHeader />}/>
                </Route>
            </Routes>
        </div>
    )

}

export default App