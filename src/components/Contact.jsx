import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import Footer from './Footer';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch, useSelector } from 'react-redux';

function Contact()
{
    const { name, email } = useSelector((state) => state.auth)
    const [message, setmessage] = useState();
    const [loading, setloading] = useState(false);
    const [hcaptcha, sethcaptcha] = useState(false);


    useEffect(() =>
    {
        document.title = "Contact Us";
    }, []);

    function onChange(value) 
    {
        console.log("Captcha value:", value);
        if (value === null || value === "")
        {
            sethcaptcha(false)
        }
        else
        {
            sethcaptcha(true)
        }
    }

    async function contact(e)
    {
        e.preventDefault()
        if (hcaptcha === true)
        {
            try
            {
                setloading(true)
                const cdata = { name, email, message }
                const resp = await axios.post(`${process.env.REACT_APP_APIURL}/api/contact`, cdata)

                if (resp.data.statuscode === 1) 
                {
                    toast.success("Message submitted successfully. We will revert back in 24 hours")
                    canceldb();
                }
                else if (resp.data.statuscode === 0) 
                {
                    toast.warning("Error sending message , try again");
                }
                else 
                {
                    toast.error("Some Problem Occured")
                }
            }
            catch (e)
            {
                toast.error("Error Occured " + e.message)
            }
            finally
            {
                setloading(false)
            }
        }
        else
        {
            toast.error("Captcha Verification failed , try again")
        }
    }

    function canceldb()
    {
        setmessage("")
    }

    return (
        <div>
            <div class="container123 ">
                <div class="grid mt-5 mb-5">
                    <div class="text-content">
                        <div class="header">
                            <h2 class="title">
                                <span>Contact Us</span>
                                <img src="assets/images/line.svg" class="underline" alt="underline"></img>
                            </h2>
                        </div>
                        <p class="description">We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. Your thoughts are important to us, and we're here to assist you with anything you need. Fill out the form below, and we'll get back to you as soon as possible.</p>
                    </div>
                    <div class="form-container2">
                        <div class="form-header">
                            <h1>Send us a message</h1>
                        </div>
                        <form class="form" onSubmit={contact}>
                            <div class="form-group">
                                <label for="username">Username</label>
                                <input type="text" id="username" className='val readonly' value={name} />
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" className='val' disabled value={email} />
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" className='area val' onChange={(e) => setmessage(e.target.value)} required></textarea>
                            </div>

                            <ReCAPTCHA sitekey="6LfERsgrAAAAALuRJGrIb-al3osvxot0jCNfyLgU" onChange={onChange} />

                            {
                                loading ?
                                    <div className="loader-container">
                                        <img src="assets/images/loader.gif" alt="loader" className="loader" />
                                    </div> : <button type="submit">Submit</button>
                            }

                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
