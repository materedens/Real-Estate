import React, { useState } from 'react'
import { Carousel, Modal } from 'react-bootstrap'
import { Icon } from '@iconify/react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import sell from '../images/slide-4.jpg';
import sells from '../images/slide-1.jpg';
import sale from '../images/slide-10.jpg';
import './header.css';


function Header() {
    // Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // Lightbox 
    const [open, setOpen] = useState(false);

    return (
        <>
            <Carousel interval={1500} fade>
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
                                    <a onClick={handleShow} title='Preview'><Icon icon="bx:plus" /></a>
                                    <a onClick={() => setOpen(true)} title='More Details'><Icon icon="bx:link" /></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12'>
                            <div className='feature-wrap'>
                                <img className='img-fluid' src={sells} alt='Cool Place' />
                                <div className='feature-links'>
                                    <a onClick={handleShow} title='Preview'><Icon icon="bx:plus" /></a>
                                    <a onClick={() => setOpen(true)} title='More Details'><Icon icon="bx:link" /></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12'>
                            <div className='feature-wrap'>
                                <img className='img-fluid' src={sale} alt='Cool Place' />
                                <div className='feature-links'>
                                    <a onClick={handleShow} title='Preview'><Icon icon="bx:plus" /></a>
                                    <a onClick={() => setOpen(true)} title='More Details'><Icon icon="bx:link" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal size='xl' aria-labelledby='contained-modal-title-vcenter'
                    centered show={show} onHide={handleShow}
                    dialogClassName="modal-90w" >
                    <Modal.Header onClick={handleClose} closeButton>
                        <Modal.Title>Features</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='col-lg-12 col-md-12'>
                            <div className='feature-wrap'>
                                <img className='img-fluid' src={sells} alt='Cool Place' />
                            </div>
                        </div><hr />
                        <h2>Cool Place</h2>
                        <p> We construct both residential estates and offices.</p>

                    </Modal.Body>
                </Modal>
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={[
                        { src: "./assets/slide-1.jpg", title: "Office Features", description: "We construct both residential estates and offices.", width: 2000, height: 700 },
                        { src: "./assets/slide-4.jpg", title: "Office Features", description: "Office Features Description " },
                        { src: "./assets/slide-5.jpg", title: "Office Features", description: "Office Features Description " },
                        { src: "./assets/slide-6.jpg", title: "Office Features", description: "Office Features Description " },
                        { src: "./assets/slide-7.jpg", title: "Office Features", description: "Office Features Description " },
                        { src: "./assets/slide-8.jpg", title: "Office Features", description: "Office Features Description " },
                        { src: "./assets/slide-9.jpg", title: "Office Features", description: "Office Features Description " },
                        { src: "./assets/slide-10.jpg", title: "Office Features", description: "Office Features Description " },
                    ]}
                    plugins={[Captions]}
                />
            </section>
        </>
    )
}

export default Header
