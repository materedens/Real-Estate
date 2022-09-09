import React from 'react'
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import './contact.css';

const Contact = () => {
    const {
        register, handleSubmit, formState: { errors },
        reset,
        trigger,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    return (
        <>
            {/* Breadcrumb area */}
            <section className='breadcrumb_area'>
                <div className='overlay bg-parallax'>

                </div>
                <div className='container'>
                    <div className='page-cover text-center'>
                        <h2 className='page-cover-title'>Contact Us</h2>
                    </div>
                </div>
            </section>
            <section className='contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8'>

                            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                                <h4>We are always happy to serve you. Kindly talk to us about property.</h4>
                                <br />
                                <div className='row'>
                                    <div className='col form-group'>
                                        <label className="col-form-label">Name:</label>
                                        <input type='text' name='name' className={`form-control ${errors.name && "invalid"}`}
                                            {...register("name", { required: "Name is Required" })}
                                            onKeyUp={() => {
                                                trigger("name");
                                            }} />
                                        {errors.name && (
                                            <small className="text-danger">{errors.name.message}</small>
                                        )}
                                    </div>
                                    <div className='col form-group'>
                                        <label className="col-form-label">Email:</label>
                                        <input type='text' name='email' className={`form-control ${errors.email && "invalid"}`}
                                            {...register("email", {
                                                required: "Email is Required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address",
                                                }
                                            })}
                                            onKeyUp={() => {
                                                trigger("email");
                                            }} />
                                        {errors.name && (
                                            <small className="text-danger">{errors.email.message}</small>
                                        )}
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label className="col-form-label">Subject:</label>
                                    <input type='text' name='subject' className={`form-control ${errors.subject && "invalid"}`}
                                        {...register("subject", { required: "Subject is Required" })}
                                        onKeyUp={() => {
                                            trigger("subject");
                                        }} />
                                    {errors.name && (
                                        <small className="text-danger">{errors.subject.message}</small>
                                    )}
                                </div>
                                <div className='form-group'>
                                    <label className="col-form-label">Message:</label>
                                    <textarea type='text' name='message' className={`form-control ${errors.message && "invalid"}`}
                                        {...register("message", {
                                            required: "Message is Required",
                                            minLength: {
                                                value: 10,
                                                message: "Minimum Required length is 10",
                                            },
                                            maxLength: {
                                                value: 50,
                                                message: "Maximum allowed length is 100 ",
                                            }
                                        })}
                                        onKeyUp={() => {
                                            trigger("message");
                                        }} />
                                    {errors.name && (
                                        <small className="text-danger">{errors.message.message}</small>
                                    )}
                                </div>
                                <div className='text-center'>
                                    <button type='submit'>Sent Message</button>
                                </div>
                            </form>
                        </div>
                        <div className='col-lg-4'>
                            <div className='info-box mb-4'>
                                <h3>For Inquiries Contact:</h3>
                                <Icon className='icon' icon="bx:phone-call" />
                                {/* <h3>Call Us</h3> */}
                                <p>+254 725 000 000</p><br />
                                <Icon className='icon' icon="bx:envelope" />
                                {/* <h3>Email Us</h3> */}
                                <p>coolplace@info.com</p>
                            </div><br />
                            <div className='info-box mb-4'>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact