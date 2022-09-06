import React from 'react'
import './about.css';
import back from '../images/Background.png';

const About = () => {
    return (
        <>
            {/* Breadcrumb area */}
            <section className='breadcrumb_area'>
                <div className='overlay bg-parallax'>

                </div>
                <div className='container'>
                    <div className='page-cover text-center'>
                        <h2 className='page-cover-title'>About Us</h2>
                        <ol className='breadcrumb'>
                            <li><a href='#home'>Home</a> </li>
                            <li className='active'>About Us</li>
                        </ol>
                    </div>
                </div>
            </section>
            {/* About area */}
            <section className='about section_gap'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 d-flex align-items-center'>
                            <div className='about_content'>
                                <h2 className='title'>About Us</h2>
                                <p> We construct both residential estates and offices.
                                    We construct both residential estates and offices.
                                    We construct both residential estates and offices.
                                    We construct both residential estates and offices.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <img className='img-fluid' src={back} alt='Cool Place' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About