import React from 'react'
import { Icon } from '@iconify/react';
import './services.css';

const Services = () => {
    return (
        <>
            <div className='breadcrumbs d-flex align-items-center'>
                <div className='container position-relative d-flex flex-column align-items-center'>
                    <h2>Services</h2>

                </div>
            </div>
            <section className='services'>
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

export default Services