import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import searchImages from './api';

const root = ReactDOM.createRoot(document.getElementById('root'));
searchImages();
root.render(
    <App />
);


