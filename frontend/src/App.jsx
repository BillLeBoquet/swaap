import React from 'react';
import './App.css';
import './components/Header';
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {

    return (
        <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page" id="kt-wrapper" >
            <Header />
            <Body />
        </div>
    )
};


export default App;
