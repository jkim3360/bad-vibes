/*eslint-disable*/
import React from 'react'
import { Route } from "react-router-dom";
import { Parallax } from 'react-parallax';
import { Input } from './common';
import Charts from './Charts'
import Footer from './Footer'
import SearchResultsList from './SearchResultsList';
import SongPage from './SongPage';
import './images/vinyl.jpg'
import './images/cassette-pic.jpg'
import './images/boom-box.jpg'
import './images/earphones.jpg'


export default function MainPage(props) {
    const backgroundStyle = {
        width: '100%',
        opacity: 1
    }
    return (
        <div>
            <Parallax bgImageStyle={backgroundStyle}
                blur={0}
                bgImage={require('./images/boom-box.jpg')}
                strength={700}>
                <Charts />
                <div className='image-container'>
                    <div className="overlay">
                        <div className="text">

                            <div style={{
                                'letterSpacing': `${3}px`,
                                'margin-bottom': 20
                            }}>
                                <p style={{
                                    'fontSize': `${60}px`,
                                    'fontFamily': 'lato', 'fontWeight': 300
                                }}>
                                    Welcome to <strike>Bad</strike> Vibes.</p>
                            </div>

                            <br />

                            <form onSubmit={props.onSubmit} style={{
                                'width': `${700}px`,
                                'padding-left': `${140}px`
                            }}>
                                <div className="search2" style={{ 'margin': `${0}px` }}>
                                    <Input
                                        placeholder="Search Artist or Title"
                                        onChange={props.onChange}
                                        value={props.value}
                                        name="searchItem" />
                                    <button className="search-button2">Go</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Parallax>

            <Route path='/:song_id'
                component={(props) =>
                    <SongPage {...props} />} />

            <div className='main-page-container'><h1>Test</h1></div>
            <Parallax bgImageStyle={backgroundStyle}
                blur={0}
                strength={400}>
                <div className='body-top'>
                    <div className='news-feed-header'><h1 style={{
                        'fontFamily': 'raleway',
                        'fontSize': 20,
                        'marginTop': 0,
                        'background': "#000000",
                        'width': `${50}%`,
                        'color': 'white',
                        'textAlign': 'center',

                    }}>Top Stories</h1><div style={{
                        'color': 'white',
                        'fontWeight': 'bold',
                    }}>|</div><h1
                        style={{
                            'fontFamily': 'raleway',
                            'fontSize': 20,
                            'marginTop': 0,
                            'background': "#000000",
                            'width': `${50}%`,
                            'color': 'white',
                            'textAlign': 'center',
                        }}>Track List</h1></div>
                    <div className='news-charts'>
                        <div className='news'>
                            {props.news ? props.news.map(item => {
                                const { title, url, urlToImage } = item
                                return (
                                    <div key={urlToImage}>
                                        <div className='news-item-container'>
                                            <div className='news-img-container'>
                                                <div className='news-img'><a href={url}
                                                    target="_blank">
                                                    <img className='news-img'
                                                        src={urlToImage} /></a>
                                                </div>
                                            </div>
                                            <span className='headline'>
                                                <div className='headline-container'><a href={url} target="_blank">
                                                    <p style={{ 'textAlign': 'left' }}
                                                        key={url}>{title}</p>
                                                </a></div>
                                            </span>
                                        </div>
                                    </div>
                                )
                            }) : null}
                        </div>
                        <div></div>

                        <Charts >
                            <SearchResultsList searchResults={props.searchResults} />
                        </Charts>

                    </div>
                </div></Parallax>

            <div className='body-bottom'>
                <Footer />
            </div>

        </div>
    )
}


