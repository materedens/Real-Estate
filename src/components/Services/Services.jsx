import React from 'react'
import { Icon } from '@iconify/react';
import './services.css';

const Services = () => {
    return (
        <>
            {/* Breadcrumb area */}
            <section className='breadcrumb_area'>
                <div className='overlay bg-parallax'>

                </div>
                <div className='container'>
                    <div className='page-cover text-center'>
                        <h2 className='page-cover-title'>Services</h2>
                        <ol className='breadcrumb'>
                            <li><a href='#home'>Home</a> </li>
                            <li className='active'>Services</li>
                        </ol>
                    </div>
                </div>
            </section>
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