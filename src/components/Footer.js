/*eslint-disable*/

import React from 'react'
import './images/twitter.png'
import './images/facebook.png'
import './images/instagram.png'
import '../components/cassette.jpg'


export default function Footer() {
    return (
        <div style={{ 'border': `${1}}px solid grey` }}>
            <div className='footer-container'>
                <ul className='footer-list'>
                    <h4>About</h4>
                    <li><a href='#'>About <strike>Bad </strike>Vibes</a></li>
                    <li><a href='#'>Newsletter</a></li>
                    <li><a href='#'>Press</a></li>
                    <li><a href='#'>Careers</a></li>
                    <li><a href='#'>Affiliates</a></li>
                </ul>

                <ul className='footer-list'>
                    <h4>Account</h4>
                    <li><a href='#'>My Account</a></li>
                    <li><a href='#'>Record Collection</a></li>
                    <li><a href='#'>Order Status</a></li>
                    <li><a href='#'>Discounts</a></li>
                    <li><a href='#'>Sell</a></li>
                </ul>

                <ul className='footer-list'>
                    <h4>Support</h4>
                    <li><a href='#'>Online Ordering</a></li>
                    <li><a href='#'>Shipping</a></li>
                    <li><a href='#'>Returns and Exchanges</a></li>
                    <li><a href='#'>Customer Service</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>

                <ul className='footer-list'>
                    <h4>Other</h4>
                    <li><a href='#'>Reverb</a></li>
                    <li><a href='#'>Good Eats</a></li>
                    <li><a href='#'>Guitar Shop</a></li>
                    <li><a href='#'>Mystur Tongue</a></li>
                    <li><a href='#'>Sam Baddy</a></li>
                </ul>
                <div className='footer-logo'>
                    <div>
                        <img className='cassette-footer'
                            src={require('./cassette.jpg')} /></div>
                    <h2 className='footer-logo-text'>
                        <strike>Bad</strike> Vibes</h2>

                </div>
            </div>

            <div className='footer-base'>
                <a href='#'>Legal</a>  |
                <a href='#'>Company Info</a>  |
                <a href='#'>Contact</a>
                <a href='http://facebook.com' target='_blank'><img
                    className='social-media'
                    src={require('./images/facebook.png')} />
                </a>
                <a href='http://instagram.com' target='_blank'><img
                    className='social-media'
                    src={require('./images/instagram.png')} />
                </a>
                <a href='http://twitter.com' target='_blank'><img
                    className='social-media'
                    src={require('./images/twitter.png')} />
                </a>
            </div>
        </div>
    )
} 