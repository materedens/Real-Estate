import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Icon } from '@iconify/react';
import './header.css';

function Header() {
    return (
        <>
            <Carousel interval={1000} fade>
                <Carousel.Item>
                    <img className='d-block w-100' src='assets/slide-1.jpg' alt='first Slide' />
                    <Carousel.Caption className='carousel-content'>
                        <h3>Welcome to Cool Place Real Estate</h3>
                        <p>Properties for sale.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src='assets/slide-2.jpg' alt='first Slide' />
                    <Carousel.Caption className='carousel-content'>
                        <h3>Real Estate Developers</h3>
                        <p>Show house main space.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src='assets/slide-3.jpg' alt='first Slide' />
                    <Carousel.Caption className='carousel-content'>
                        <h3>Residence</h3>
                        <p>Commercial properties for sale.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* Request quote */}
            <section id='hero' className='hero'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9 text-center text-lg-left'>
                            <h3>We've contracted more than <span>50 Residencial homes</span> in 2 years!</h3>
                            <p>We construct both residential estates and offices.</p>
                        </div>
                        <div className='col-lg-3 hero-btn-container text-center'>
                            <a className='hero-btn align-middle' href='/Header'>Request a Quote</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* SERVICE */}
            <section id='services' className='services'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-12'>
                            <div className='icon-box'>
                                <div className='icon'><Icon icon="emojione:house-with-garden" /></div>
                                <h4 className='title'>Family House</h4>
                                <p className='description'>10 Properties</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <div className='icon-box'>
                                <div className='icon'><Icon icon="clarity:house-line" /></div>
                                <h4 className='title'>House & Villa</h4>
                                <p className='description'>15 Properties</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <div className='icon-box'>
                                <div className='icon'><Icon icon="material-symbols:apartment" /></div>
                                <h4 className='title'>Apartment</h4>
                                <p className='description'>10 Properties</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <div className='icon-box'>
                                <div className='icon'><Icon icon="fluent-emoji-flat:japanese-post-office" /></div>
                                <h4 className='title'>Office & Studio</h4>
                                <p className='description'>10 Properties</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header