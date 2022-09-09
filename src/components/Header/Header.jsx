import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Icon } from '@iconify/react';
import sell from '../images/slide-4.jpg';
import sells from '../images/slide-9.jpg';
import sale from '../images/slide-10.jpg';
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
                    <img className='d-block w-100' src='assets/slide-2.jpg' alt='Second Slide' />
                    <Carousel.Caption className='carousel-content'>
                        <h3>Real Estate Developers</h3>
                        <p>Show house main space.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src='assets/slide-3.jpg' alt='Third Slide' />
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
                            <h3>We've contracted more than <span>50 Residential homes</span> in 2 years!</h3>
                            <p>We construct both residential estates and offices.</p>
                        </div>
                        <div className='col-lg-3 hero-btn-container text-center'>
                            <a className='hero-btn align-middle' href='/Header'>Request a Quote</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* SERVICE */}
            <section className='services'>
                <div className='container'>
                    <h1 className='text-center'>Our Featured Properties</h1>
                    <br />
                    <div className='row'>
                        <div className='col-lg-4 col-md-12'>
                            <div className='feature-wrap'>
                                <img className='img-fluid' src={sell} alt='Cool Place' />
                                <div className='feature-links'>
                                    <a href='#home' className='feature-lightbox' title='XL'><Icon icon="bx:plus" /></a>
                                    <a href='#home' title='More Details'><Icon icon="bx:link" /></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12'>
                            <div className='feature-wrap'>
                                <img className='img-fluid' src={sells} alt='Cool Place' />
                                <div className='feature-links'>
                                    <a href='#home' className='feature-lightbox' title='XL'><Icon icon="bx:plus" /></a>
                                    <a href='#home' title='More Details'><Icon icon="bx:link" /></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12'>
                            <div className='feature-wrap'>
                                <img className='img-fluid' src={sale} alt='Cool Place' />
                                <div className='feature-links'>
                                    <a href='#home' className='feature-lightbox' title='XL'><Icon icon="bx:plus" /></a>
                                    <a href='#home' title='More Details'><Icon icon="bx:link" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header