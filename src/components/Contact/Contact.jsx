import React from 'react'
import Form from 'react-bootstrap';

const Contact = () => {
    return (
        <>
            <div className='breadcrumbs d-flex align-items-center'>
                <div className='container position-relative d-flex flex-column align-items-center'>
                    <h2>Contact Us</h2>
                </div>

            </div>
            <Form>
                <Form.FormGroup className='mb-3' controlId='name'>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type='text' placeholder='Your Name' />
                </Form.FormGroup>
            </Form>
        </>
    )
}

export default Contact