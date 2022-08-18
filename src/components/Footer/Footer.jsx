import React from 'react'
import './footer.css';

function Footer() {
    return (
        <>
            <footer id='footer' className='footer'>
                <div className='footer-top'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4 col-md-6 footer-contact'>
                                <h3>Cool Place</h3>
                                <p>
                                    Location <br></br>
                                    City <br></br>
                                    State <br></br>
                                    <strong>Phone:</strong> +254 746 088 052<br></br>
                                    <strong>Email:</strong> coolplace@gmail.com<br></br>
                                </p>
                            </div>
                            <div className='col-lg-4 col-md-6 footer-links'>
                                <h4>Layouts</h4>
                                <ul>
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Services</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div className='col-lg-4 col-md-6 footer-newsletter'>
                                <h4>Do You Need Help With Anything?</h4>
                                <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
                                <form action='' method='post'>
                                    <input name='email' /><input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container d-md-flex py-4'>
                    <div className='me-md-auto text-center text-md-start'>
                        <div className='copyright'>
                            &copy;<strong> <span> 2022</span></strong>. Cool Place. Designed By Dennis Matere
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer