import React from 'react';
import ReactDOM from 'react-dom/client';
//import Home from "./pages/home";
import Users from "./pages/users";
import GlobalStyle from './styles/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Users /> <GlobalStyle />
    </>
);