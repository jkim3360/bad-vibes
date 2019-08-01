/*eslint-disable*/

import React from 'react'
import { Link } from "react-router-dom";
import { Input } from './common';
import './cassette.jpg'

export default function Navbar({ value, onChange, onSubmit }) {
    return (
        <div className="navbar">

            <Link className='song-link' to={{
                pathname: '/',
            }}><img className='cassette'
                src={require('./cassette.jpg')} />
            </Link>

            <br />

            <div className="header">
                <Link className='song-link' to={{
                    pathname: '/',
                }}>
                    <h2 className='title'>
                        <strike>Bad</strike> Vibes</h2>
                </Link>
            </div>

            <form onSubmit={onSubmit}>
                <div className="search">
                    <Input className="search-form"
                        placeholder="Search Artist or Title"
                        onChange={onChange}
                        value={value}
                        name="searchItem" />
                    <button className="search-button">SEARCH</button>
                </div>
            </form>

            <div className='nav-links-container'>
                <Link className='nav-links' to="/">Home</Link>{' '}
            </div>














        </div>
    )
}
