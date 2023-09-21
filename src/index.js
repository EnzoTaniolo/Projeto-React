import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./pages/home";
import GlobalStyle from './globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Home /> <GlobalStyle />
    </>
);