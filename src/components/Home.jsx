import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Footer from './Footer';
import Typewriter from './Typewriter';
import { useSelector } from 'react-redux';

function Home()
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
        document.title = "Home Page"
    }, [])

    return (

        <div>
            {/* Top Announcement */}
            <div>
                <marquee className="marquee" behavior="scroll" scrollamount="20">
                    <p>
                        🚀 Welcome to Nians Gurgaon! &nbsp;
                        💡 Digital Marketing, Technology & Creative Solutions! &nbsp;
                        🤖 AI & Automation Solutions for Modern Businesses! &nbsp;
                        🌐 Website, App Development & E-Commerce Solutions! &nbsp;
                        📍 Sector 48, Gurugram
                    </p>
                </marquee>
            </div>

            {/* Hero Section */}
            <div id="about" class="pd theme2">
                <div class="container">
                    <div class="row align-items-center">

                        <div class="col-lg-6 col-12">

                            <h1 class=" main-heading">
                                WELCOME TO{" "}
                                <span className="ccc">
                                    <Typewriter />
                                </span>
                            </h1>

                            <p class="para my-4">
                                Nians is a digital agency that combines strategy,
                                creativity and technology to help businesses grow,
                                innovate and build powerful digital experiences.
                            </p>

                            <Link to="/signup" className="btn btn2">
                                Get Started
                            </Link>

                            <Link to="/login" className="btn btn1 mx-3">
                                Contact Us
                            </Link>

                        </div>

                        <div class="col-lg-6 col-12 mt-lg-0 ">
                            <img
                                src="assets/images/homeHero.png"
                                class="img-fluid img-main"
                                alt="Nians Digital Solutions"
                            />
                        </div>

                    </div>
                </div>
            </div>


            {/* Services */}
            <div id="services" class="pd gr theme1">
                <div class="container">

                    <h1 class="text-center hd head">
                        Our <span className="ccc">Services</span>
                    </h1>

                    <div class="row mt-5">

                        <div class="col-lg-4 col-md-6 col-12 px-4">

                            <img
                                src="/assets/images/loginIcon.png"
                                class="imgheight"
                                alt="Digital Marketing"
                            />

                            <h3 class="write mt-3">
                                Digital Marketing
                            </h3>

                            <p class="text-gray-600 max-w-xs mt-3">
                                Performance-driven digital marketing solutions
                                including SEO, social media, paid advertising
                                and content marketing.
                            </p>

                        </div>


                        <div class="col-lg-4 col-md-6 col-12 px-4 mt-md-0 mt-5">

                            <img
                                src="/assets/images/feedbackIcon.png"
                                class="imgheight"
                                alt="Technology Solutions"
                            />

                            <h3 class="write mt-3">
                                Technology Solutions
                            </h3>

                            <p class="text-gray-600 max-w-xs mt-3">
                                Modern website and application development,
                                e-commerce platforms, ERP, CRM and customized
                                technology solutions.
                            </p>

                        </div>


                        <div class="col-lg-4 col-md-6 col-12 px-4 mt-lg-0 mt-5 mx-auto">

                            <img
                                src="/assets/images/analysisIcon.png"
                                class="imgheight"
                                alt="AI and Automation"
                            />

                            <h3 class="write mt-3">
                                AI & Automation
                            </h3>

                            <p class="text-gray-600 max-w-xs mt-3">
                                AI-powered solutions, chatbots, marketing
                                automation and intelligent digital experiences
                                designed for modern businesses.
                            </p>

                        </div>

                    </div>
                </div>
            </div>


            {/* CTA */}
            <div class="custom-background">

                <div class="custom-text-center">

                    <h1 class="custom-title">
                        Let's Build Something Amazing!
                    </h1>

                    <h2 class="custom-subtitle">
                        Strategy, Creativity & Technology for Digital Growth
                    </h2>

                    <div class="custom-buttons">

                        <Link
                            to="/login"
                            class="custom-button-start"
                            href="/login"
                        >
                            Get Started
                        </Link>

                        <Link
                            onClick={oncontact}
                            class="custom-button-contact"
                        >
                            Contact Us
                        </Link>

                    </div>

                </div>

            </div>


            {/* About / Solutions */}
            <div id="solution" class="pd theme2">

                <div class="container">

                    <div class="row">

                        <div class="col-lg-6 col-12">

                            <h1 class="hd">
                                Digital Solutions Designed for Business Growth
                            </h1>

                            <ul
                                class="nav nav-pills mb-4 mt-4 nav-fill"
                                id="pills-tab"
                                role="tablist"
                            >

                                <li class="nav-item" role="presentation">
                                    <button
                                        class="nav-link active"
                                        id="pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-home"
                                        aria-selected="true"
                                    >
                                        What We Do
                                    </button>
                                </li>

                                <li class="nav-item" role="presentation">
                                    <button
                                        class="nav-link"
                                        id="pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-profile"
                                        aria-selected="false"
                                    >
                                        Our Approach
                                    </button>
                                </li>

                                <li class="nav-item" role="presentation">
                                    <button
                                        class="nav-link"
                                        id="pills-contact-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-contact"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-contact"
                                        aria-selected="false"
                                    >
                                        Our Impact
                                    </button>
                                </li>

                            </ul>


                            <div class="tab-content" id="pills-tabContent">

                                {/* What We Do */}
                                <div
                                    class="tab-pane fade show active"
                                    id="pills-home"
                                    role="tabpanel"
                                    aria-labelledby="pills-home-tab"
                                    tabindex="0"
                                >

                                    <h3>
                                        Combining strategy, creativity and
                                        technology to create impactful digital
                                        experiences.
                                    </h3>

                                    <p class="para">
                                        Nians helps brands transform their digital
                                        presence through technology, creative
                                        solutions, digital marketing and
                                        intelligent automation.
                                    </p>

                                    <ul class="list-unstyled">
                                        <li>
                                            <span class="fa fa-check"></span>
                                            Digital Marketing Solutions
                                        </li>

                                        <li>
                                            <span class="fa fa-check"></span>
                                            Website & Application Development
                                        </li>

                                        <li>
                                            <span class="fa fa-check"></span>
                                            AI & Automation
                                        </li>
                                    </ul>

                                </div>


                                {/* Our Approach */}
                                <div
                                    class="tab-pane fade"
                                    id="pills-profile"
                                    role="tabpanel"
                                    aria-labelledby="pills-profile-tab"
                                    tabindex="0"
                                >

                                    <h3>
                                        Technology-driven solutions built around
                                        business objectives.
                                    </h3>

                                    <p class="para">
                                        We bring together creative thinking,
                                        technology and marketing expertise to
                                        deliver solutions that help businesses
                                        grow and adapt to the digital world.
                                    </p>

                                    <ul class="list-unstyled">

                                        <li>
                                            <span class="fa fa-check"></span>
                                            Strategy & Consulting
                                        </li>

                                        <li>
                                            <span class="fa fa-check"></span>
                                            Creative Digital Experiences
                                        </li>

                                        <li>
                                            <span class="fa fa-check"></span>
                                            Technology & Automation
                                        </li>

                                    </ul>

                                </div>


                                {/* Our Impact */}
                                <div
                                    class="tab-pane fade"
                                    id="pills-contact"
                                    role="tabpanel"
                                    aria-labelledby="pills-contact-tab"
                                    tabindex="0"
                                >

                                    <h3>
                                        Helping businesses create meaningful
                                        digital experiences.
                                    </h3>

                                    <p class="para">
                                        From digital marketing and creative
                                        services to AI, websites, applications
                                        and automation, Nians delivers integrated
                                        digital solutions for modern businesses.
                                    </p>

                                    <ul class="list-unstyled">

                                        <li>
                                            <span class="fa fa-check"></span>
                                            Experienced Digital Team
                                        </li>

                                        <li>
                                            <span class="fa fa-check"></span>
                                            Technology & Innovation
                                        </li>

                                        <li>
                                            <span class="fa fa-check"></span>
                                            Business-focused Solutions
                                        </li>

                                    </ul>

                                </div>

                            </div>

                        </div>


                        {/* FAQ */}
                        <div class="col-lg-6 col-12 ps-3 mt-lg-0 mt-5">

                            <div class="accordion" id="accordionExample">

                                <div class="accordion-item">

                                    <h2 class="accordion-header">

                                        <button
                                            class="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            What services does Nians provide?

                                            <span class="plus">
                                                <i class="fa-solid fa-circle-plus"></i>
                                            </span>

                                            <span class="minus">
                                                <i class="fa-solid fa-circle-minus"></i>
                                            </span>

                                        </button>

                                    </h2>

                                    <div
                                        id="collapseOne"
                                        class="accordion-collapse collapse show"
                                        data-bs-parent="#accordionExample"
                                    >

                                        <div class="accordion-body">

                                            <p>
                                                Nians provides digital marketing,
                                                technology, creative, strategy,
                                                AI, chatbots, website and app
                                                development, ERP/CRM,
                                                e-commerce and automation
                                                solutions.
                                            </p>

                                        </div>

                                    </div>

                                </div>


                                <div class="accordion-item">

                                    <h2 class="accordion-header">

                                        <button
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            Does Nians provide technology solutions?

                                            <span class="plus">
                                                <i class="fa-solid fa-circle-plus"></i>
                                            </span>

                                            <span class="minus">
                                                <i class="fa-solid fa-circle-minus"></i>
                                            </span>

                                        </button>

                                    </h2>

                                    <div
                                        id="collapseTwo"
                                        class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >

                                        <div class="accordion-body">

                                            <p>
                                                Yes. Nians works on websites,
                                                applications, e-commerce,
                                                ERP/CRM and customized digital
                                                technology solutions.
                                            </p>

                                        </div>

                                    </div>

                                </div>


                                <div class="accordion-item">

                                    <h2 class="accordion-header">

                                        <button
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            Does Nians work with AI?

                                            <span class="plus">
                                                <i class="fa-solid fa-circle-plus"></i>
                                            </span>

                                            <span class="minus">
                                                <i class="fa-solid fa-circle-minus"></i>
                                            </span>

                                        </button>

                                    </h2>

                                    <div
                                        id="collapseThree"
                                        class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >

                                        <div class="accordion-body">

                                            <p>
                                                Nians offers AI, chatbot and
                                                automation capabilities to help
                                                businesses create intelligent
                                                digital experiences and automate
                                                workflows.
                                            </p>

                                        </div>

                                    </div>

                                </div>


                                <div class="accordion-item">

                                    <h2 class="accordion-header">

                                        <button
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"
                                        >
                                            Where is the Nians Gurgaon office?

                                            <span class="plus">
                                                <i class="fa-solid fa-circle-plus"></i>
                                            </span>

                                            <span class="minus">
                                                <i class="fa-solid fa-circle-minus"></i>
                                            </span>

                                        </button>

                                    </h2>

                                    <div
                                        id="collapseFour"
                                        class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >

                                        <div class="accordion-body">

                                            <p>
                                                The Nians Gurgaon office is located
                                                at Welldone Techpark, Sohna Road,
                                                Sector 48, Gurugram, Haryana.
                                            </p>

                                        </div>

                                    </div>

                                </div>


                                <div class="accordion-item">

                                    <h2 class="accordion-header">

                                        <button
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseFive"
                                        >
                                            How can I contact Nians?

                                            <span class="plus">
                                                <i class="fa-solid fa-circle-plus"></i>
                                            </span>

                                            <span class="minus">
                                                <i class="fa-solid fa-circle-minus"></i>
                                            </span>

                                        </button>

                                    </h2>

                                    <div
                                        id="collapseFive"
                                        class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >

                                        <div class="accordion-body">

                                            <p>
                                                You can contact Nians through its
                                                official website or visit its
                                                Gurgaon office in Sector 48,
                                                Gurugram.
                                            </p>

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

export default Home
