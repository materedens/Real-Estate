import React from 'react'
// import Form from 'react-bootstrap';
import { Grid, Paper, TextField, Button, TextareaAutosize } from '@mui/material';
const Contact = () => {
    const paperStyle = { padding: '30px 20px', width: 1300, margin: "50px auto", backgroundColor: '#fff' }
    const textfieldStyle = { margin: '5px', padding: '5px' }
    const buttonStyle = { padding: '10px', margin: '10px', backgroundColor: '#f03c02' }
    const textareaStyle = { width: 1250, margin: 10, padding: 5, backgroundColor: '#fff' }

    return (
        <>
            {/* Breadcrumb area */}
            <section className='breadcrumb_area'>
                <div className='overlay bg-parallax'>

                </div>
                <div className='container'>
                    <div className='page-cover text-center'>
                        <h2 className='page-cover-title'>Contact Us</h2>
                        <ol className='breadcrumb'>
                            <li><a href='#home'>Home</a> </li>
                            <li className='active'>Contact Us</li>
                        </ol>
                    </div>
                </div>
            </section>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <form>
                        <TextField label='Your Name' placeholder='Your Name' fullWidth required style={textfieldStyle} />
                        <TextField label='Your Email' placeholder='Your Email' fullWidth required style={textfieldStyle} />
                        <TextField label='Subject' placeholder='Subject' fullWidth required style={textfieldStyle} />
                        <TextareaAutosize label='Message' placeholder='Message' minRows={5} maxRows={5} style={textareaStyle} required fullWidth />
                        <Button type='submit' variant='contained' color='primary' style={buttonStyle}>Send Message</Button>
                    </form>
                </Paper>

            </Grid>
        </>
    )
}

export default Contact