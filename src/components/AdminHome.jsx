import React, {  useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Footer from './Footer';
import Typewriter from './Typewriter';
import { useSelector } from 'react-redux';

function AdminHome()
{

    const { isLoggedIn } = useSelector((state) => state.auth)

    const navigate = useNavigate();

    function oncontact(e)
    {
        e.preventDefault()
        if (isLoggedIn === false)
        {
            toast.info("Please login to Contact ");
            navigate("/login");
        }
        else
        {
            navigate("/contact")
        }
    }

    useEffect(() =>
    {
        document.title = "Admin Home";
    }, []);

    function handleTabClick(tabname)
    {
        localStorage.setItem("tabLink", tabname)
    }

    function admin(e)
    {
        e.preventDefault()
        if (isLoggedIn === false)
        {
            toast.info("Please login to access adminpanel");
            navigate("/login");
        }
        else
        {
            navigate("/adminuser")
        }
    }



    return (
        <div>
            <div>
                <marquee className="marquee" behavior="scroll" scrollamount="20" >
                    <p>
                        📊 Welcome to the Feedback Portal for Educational Institutions! &nbsp; 💡 Empowering Teachers Through Actionable Feedback! &nbsp; 📋 Analyze Teacher Performance with In-Depth Feedback Reports! &nbsp; ⏱️ Real-Time Feedback Analysis for Continuous Improvement!
                    </p>
                </marquee>
            </div>

            <div id="about" class="pd theme2">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-12 ">
                            <h1 class="mt-4 hd main-heading">WELCOME TO <span className='ccc'><Typewriter /></span></h1>

                            <p class="para my-4">"Empowering education with student feedback. Analyze and improve teacher performance to enhance learning experiences."</p>

                            <Link to="/signup" className="btn btn2 ">Register</Link>
                            <Link to="/login" className="btn btn1 mx-3">Login</Link>

                        </div>
                        <div class="col-lg-6 col-12 mt-lg-0 mt-5">
                            <img src="assets/images/homeHero.png" class="img-fluid img-main " />
                        </div>
                    </div>
                </div>
            </div>

            <div id="services" class="pd gr theme1">
                <div class="container">
                    <h1 class="text-center hd head ">How It <span className='ccc'>Works</span></h1>
                    <div class="row mt-5">

                        <div class="col-lg-4 col-md-6 col-12 px-4">
                            <img src="/assets/images/loginIcon.png" class="imgheight" alt="Login Icon" />
                            <h3 class="write mt-3">Step 1: Login</h3>
                            <p class="text-gray-600 max-w-xs mt-3">Students login using their roll number and OTP sent to their email or phone.</p>
                        </div>

                        <div class="col-lg-4 col-md-6 col-12 px-4 mt-md-0 mt-5">
                            <img src="/assets/images/feedbackIcon.png" class="imgheight" alt="Login Icon" />
                            <h3 class="write mt-3">Step 2: Submit Feedback</h3>
                            <p class="text-gray-600 max-w-xs mt-3">Choose the subject and teacher, and provide feedback on the various parameters.</p>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12 px-4 mt-lg-0 mt-5 mx-auto">
                            <img src="/assets/images/analysisIcon.png" class="imgheight" alt="Login Icon" />
                            <h3 class=" write mt-3">Step 3: Analyze Results</h3>
                            <p class="text-gray-600 max-w-xs mt-3">Admins can view and analyze the feedback, generating suggestions for improvement.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="custom-background">
                <div class="custom-text-center">
                    <h1 class="custom-title ">Write Your Feedback Now!</h1>
                    <h2 class="custom-subtitle">Empowering Teachers Through Actionable Feedback!</h2>
                    <div class="custom-buttons">
                        <Link to="/login" class="custom-button-start" href="/login">Get started now</Link>
                        <Link onClick={oncontact} class="custom-button-contact" >Contact Us</Link>
                        <Link
                            onClick={(e) =>
                            {
                                handleTabClick("user");
                                admin(e);  // Call the admin function
                            }}
                            className="custom-button-admin"
                        >
                            Access Admin Panel
                        </Link>
                    </div>
                </div>
            </div>

            <div id="solution" class="pd theme2" >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-12">
                            <h1 class="hd">Need a Beter Work? We are here to IT Solution with 30 years of experience</h1>
                            <ul class="nav nav-pills mb-4 mt-4 nav-fill" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">What we do</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Our Mission</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Social impact</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                    <h3>To believe that the smart looking website is the first impression all over.</h3>
                                    <p class="para">This Our History to a tendency to believe that the smart looking website is the first impression. Lorem dolor sit amet, elit!</p>
                                    <ul class="list-unstyled">
                                        <li><span class="fa fa-check"></span>Leading private equity firms</li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                                    <h3>This Our History to a tendency to believe that the smart looking website is the first impression.</h3>
                                    <p class="para">Lorem ipsum dolor sit amet, elit. Id ab commodi impedit magnam sint voluptates. Minima velit expedita maiores, sit at in!</p>
                                    <ul class="list-unstyled">
                                        <li><span class="fa fa-check"></span>Helping Nonprofit organizations</li>
                                        <li><span class="fa fa-check"></span>   Leading private equity firms</li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                                    <h3>This Our History to a tendency to believe thes that smart looking website is the first impression.</h3>
                                    <p class="para"> Lorem ipsum dolor sit amet, elit. Id ab commodi impedit magnam sint voluptates. Minima velit expedita maiores, sit at in!!</p>
                                    <ul class="list-unstyled">
                                        <li><span class="fa fa-check"></span> Always Fast and friendly support</li>
                                        <li><span class="fa fa-check"></span> Experienced Professional Team</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-12 ps-3 mt-lg-0 mt-5">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            How much does a static website cost?
                                            <span class="plus"><i class="fa-solid fa-circle-plus"></i></span>
                                            <span class="minus"><i class="fa-solid fa-circle-minus"></i></span>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos vero quis quas eius distinctio nostrum voluptas numquam? Dolores dolor magni obcaecati iusto tempora esse rem at repellat vero beatae!</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How to choose a best web template?
                                            <span class="plus"><i class="fa-solid fa-circle-plus"></i></span>
                                            <span class="minus"><i class="fa-solid fa-circle-minus"></i></span>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos vero quis quas eius distinctio nostrum voluptas numquam? Dolores dolor magni obcaecati iusto tempora esse rem at repellat vero beatae!</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            How to download a template?
                                            <span class="plus"><i class="fa-solid fa-circle-plus"></i></span>
                                            <span class="minus"><i class="fa-solid fa-circle-minus"></i></span>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos vero quis quas eius distinctio nostrum voluptas numquam? Dolores dolor magni obcaecati iusto tempora esse rem at repellat vero beatae!</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            Why should i choose a free website?
                                            <span class="plus"><i class="fa-solid fa-circle-plus"></i></span>
                                            <span class="minus"><i class="fa-solid fa-circle-minus"></i></span>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos vero quis quas eius distinctio nostrum voluptas numquam? Dolores dolor magni obcaecati iusto tempora esse rem at repellat vero beatae!</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                            Why should i choose a free website?
                                            <span class="plus"><i class="fa-solid fa-circle-plus"></i></span>
                                            <span class="minus"><i class="fa-solid fa-circle-minus"></i></span>
                                        </button>
                                    </h2>
                                    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos vero quis quas eius distinctio nostrum voluptas numquam? Dolores dolor magni obcaecati iusto tempora esse rem at repellat vero beatae!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AdminHome
