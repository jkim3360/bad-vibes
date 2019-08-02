/*eslint-disable*/
import React from 'react'
import { Route } from "react-router-dom";
import { Parallax } from 'react-parallax';
import Charts from './Charts'
import Footer from './Footer'
import Navbar from './Navbar'
import SearchResultsList from './SearchResultsList';
import SongPage from './SongPage';
import './images/vinyl.jpg'
import './images/cassette-pic.jpg'
import './images/boom-box.jpg'
import './images/earphones.jpg'


export default function MainPage(props) {
    const backgroundStyle = {
        width: `${1440}px`,
        height: `${940}px`,
        opacity: 1
    }
    return (
        <div>
            <Parallax bgImageStyle={backgroundStyle}
                blur={0}
                bgImage={require('./images/boom-box.jpg')}
                strength={750}>
                <Navbar value={props.value}
                    onSubmit={props.onSubmit}
                    onChange={props.onChange} />
                <div className='image-container'>
                    <div className="overlay">
                        <div className="text">

                            <div style={{
                                'letterSpacing': `${3}px`
                            }}>
                                <p style={{
                                    'fontSize': `${60}px`,
                                    'fontFamily': 'lato', 'fontWeight': 300
                                }}>
                                    Welcome to <strike>Bad</strike> Vibes.
                                    <p style={{
                                        'fontSize': `${15}px`,
                                    }}>Discover music.</p>
                                </p>
                            </div>
                            <br />
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
                        'fontWeight': 'bold',
                        'marginTop': 0,
                        'background': '#ffdb00',
                        'height': `${25}px`,
                        'width': `${49}%`,
                        'color': 'black',
                        'textAlign': 'center',
                    }}>Top Stories</h1><div style={{
                        'color': 'black',
                        'fontWeight': 'bold',
                        'width': `${4}px`
                    }}></div><h1
                        style={{
                            'fontFamily': 'raleway',
                            'fontSize': 20,
                            'marginTop': 0,
                            'background': "#ffdb00",
                            'height': `${25}px`,
                            'width': `${50}%`,
                            'color': 'black',
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
                                                    <p style={{ 'textAlign': 'left', 'fontWeight': 'bold' }}
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


