import React from 'react';

import './App.css';
import './components/Header';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import UserDetails from "./components/UserDetails";

const App = () => {
    return (
        <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page"  >
            <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt-wrapper">
                <div>
                    <Header />
                    <Body />
                    <UserDetails />
                </div>
                <Footer />
            </div>
        </div>
    )
};

export default App;
