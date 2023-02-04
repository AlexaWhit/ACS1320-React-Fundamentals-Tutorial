/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import logo from './logo.svg';
import './Title.css';

function Title() {
    return (
        <>
        <div className="Title">
            <h1>SFPOPOS</h1>
        </div><div className="Title-Subtitle">
                <h2>San Franciscos Privately Owned Public Spaces</h2>
                <img src={logo} />
            </div>
        </>
    )
}

export default Title