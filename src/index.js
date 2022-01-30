import React from 'react';
import { render } from 'react-dom';
import './styles/style.scss';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

const AppWrapper = () => {
        return (
        <BrowserRouter>
                <App />
        </BrowserRouter>
        )
        
}

render(
        <AppWrapper />
       , document.getElementById('root'));

