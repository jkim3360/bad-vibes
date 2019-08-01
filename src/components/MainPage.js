/*eslint-disable*/
import React from 'react'
import { Parallax } from 'react-parallax';
import Charts from './Charts'
import SearchResultsList from './SearchResultsList';
import Home from './Home'
import Footer from './Footer'
import './images/vinyl.jpg'
import './images/cassette-pic.jpg'
import './images/boom-box.jpg'
import './images/apple-badge.svg'
import './images/earphones.jpg'


export default function MainPage(props) {
    const backgroundStyle = {
        width: '100%',
        opacity: 0.4
    }
    return (
        <div >
            <Parallax bgImageStyle={backgroundStyle}
                blur={0}
                // bgImage={require('./images/lights.png')}
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
                    
                    }}>Top Stories</h1><h1
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
                                console.log(item.source.id)
                                return (
                                    <div>
                                        <div className='news-item-container'>
                                            <div className='news-img-container'>
                                                <div className='news-img'><a href={url}><img className='news-img'
                                                    src={urlToImage} /></a>
                                                </div>
                                            </div>
                                            <span className='headline'>
                                                <div className='headline-container'><a href={url}>
                                                    <p classname="headline-text"
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

            <Parallax bgImageStyle={backgroundStyle}
                blur={0}
                bgImage={require('./images/concert.jpg')}
                strength={400}>
                <Charts />
                <div className='image-container'>
                    <img className='images' src={require('./images/boom-box.jpg')} />
                    <div class="overlay">
    <div class="text">Hello World</div>
  </div>
                    <img className='images' src={require('./images/vinyl.jpg')} />
                    <img className='images' src={require('./images/cassette-pic.jpg')} />
                </div>
            </Parallax>

            <div className='body-bottom'>
                <Footer />
            </div>

        </div>
    )
}


