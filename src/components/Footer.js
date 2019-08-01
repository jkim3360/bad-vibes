/*eslint-disable*/

import React from 'react'
import './images/twitter.png'
import './images/facebook.png'
import './images/instagram.png'

export default function Footer() {
    return (
        <div>
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
                    <li><a href='#'>My Journal</a></li>
                    <li><a href='#'>My Account</a></li>
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
            </div>


            <div className='footer-base'>
                Legal  |  Account Info  |  Company Info  |  Contact
                <a href='#'><img
                        className='social-media'
                        src={require('./images/twitter.png')} />
                </a>
                <a href='#'><img
                        className='social-media'
                        src={require('./images/facebook.png')} />
                </a>
                <a href='#'><img
                        className='social-media'
                        src={require('./images/instagram.png')} />
                </a>
            </div>
        </div>
    )
} 