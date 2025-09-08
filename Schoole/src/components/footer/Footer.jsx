import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div className='container'>
                    <div className='footer-logo'>
                        <img src='./public/logo.svg' alt='School Logo' />
                    </div>
                    <div className='footer-logo-h1'>
                        <h1>40-mektep</h1>
                    </div>
                    <div className='footer-text'>
                        <p>Providing quality education since 1998.
                            Developing knowledge, creativity, and
                            character.
                        </p>
                    </div>
                    <div className='footer-socials'>
                        <div className='footer-socials-Facebook'>
                            <img src='./public/facebook.svg' alt='Facebook' />
                        </div>
                        <div className='footer-socials-Instagram'>
                            <img src='./public/instagram.svg' alt='Instagram' />
                        </div>
                        <div className='footer-socials-Twitter'>
                            <img src='./public/Twitter.svg' alt='Twitter' />
                        </div>
                        <div className='footer-socials-Quick_Links'>
                            <h2>Quick Links</h2>
                            <div className='footer-socials-Quick_Links_About_Us'>
                                <a href='link'>About Us</a>
                            </div>
                            <div className='footer-socials-Quick_Links_Education'>
                                <a href='link'>Education</a>
                            </div>
                            <div className='footer-socials-Quick_Links_News_Events'>
                                <a href='link'>News & Events</a>
                            </div>
                            <div className='footer-socials-Quick_Links_Support'>
                                <a href='link'>Support</a>
                            </div>
                            <div className='footer-socials-Quick_Links_Rules_Documents'>
                                <a href='link'>Rules & Documents</a>
                            </div>
                        </div>
                        <div className='footer-socials-Contact Us'>
                            <div className='footer-socials-Contact_Us-text'>
                                <h2>Contact Us</h2>
                            </div>
                            <div className='footer-socials-Contact_Us-address'>
                                <img src='./public/Location-icon.svg' alt='Location-icon.svg' />
                            </div>
                            <div className='footer-socials-Contact_Us-address-text'>
                                <p>ул. Школьная 123, Город, Страна</p>
                            </div>
                            <div className='footer-socials-Contact_Us-phone'>
                                <img src='./public/phone icon.svg' alt='phone icon.svg' />
                            </div>
                            <div className='footer-socials-Contact_Us-phone-text'>
                                <p>+1 234 567 890</p>
                            </div>
                            <div className='footer-socials-Contact_Us-email'>
                                <img src='./public/email icon.svg' alt='email icon.svg' />
                            </div>
                            <div className='footer-socials-Contact_Us-email-text'>
                                <p>info@schoolname.edu</p>
                            </div>
                        </div>
                        <div className='footer-socials-Newsletter'>
                            <h2>Newsletter</h2>
                        </div>
                        <div className='footer-socials-Newsletter-text'>
                            <p>Subscribe to our newsletter to receive updates
                                and news.
                            </p>
                        </div>
                        <div className='footer-socials-Newsletter-input'>
                            <input type='email' placeholder='Your email address' />
                        </div>
                        <div className='footer-socials-Newsletter-button'>
                            <button>Subscribe</button>
                        </div>
                        <div className='footer-socials-Copyright'>
                            <p>© 2025 40-mektep. Все права защищены.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
