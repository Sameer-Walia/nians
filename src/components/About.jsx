import React, { useEffect } from 'react'
import Footer from './Footer'

function About()
{

    useEffect(() =>
    {
        document.title = "About US";
    }, []);

    return (
        <div>

            <div class="custom-text-center1 custom-margin-bottom1">
                <h2 class="custom-heading1">
                    <span class="custom-heading-span1">
                        <span class="custom-primary-text1">
                            About Nians Digital Solutions
                        </span>
                        <img
                            src="assets/images/line.svg"
                            class="custom-image1"
                            alt="underline"
                        />
                    </span>
                </h2>

                <p class="custom-description1 px-5">
                    Nians is a digital solutions company based in Sector 48, Gurugram,
                    providing technology, digital marketing, creative, AI and automation
                    solutions to help businesses build, grow and transform their digital
                    presence.
                </p>
            </div>


            <div class="container">
                <div class="custom-grid2">

                    {/* Digital Solutions */}
                    <div class="custom-card2">

                        <h3 class="custom-heading2">
                            Our Digital Solutions
                        </h3>

                        <ul class="custom-list2">

                            <li>
                                <span class="custom-highlight2">
                                    Digital Marketing:
                                </span>
                                SEO, social media marketing, paid advertising,
                                content marketing and performance-driven campaigns.
                            </li>

                            <li>
                                <span class="custom-highlight2">
                                    Website Development:
                                </span>
                                Modern, responsive and business-focused websites
                                designed to deliver better digital experiences.
                            </li>

                            <li>
                                <span class="custom-highlight2">
                                    Application Development:
                                </span>
                                Customized web and application solutions for
                                different business requirements.
                            </li>

                            <li>
                                <span class="custom-highlight2">
                                    E-Commerce Solutions:
                                </span>
                                Scalable e-commerce platforms with modern features,
                                secure APIs and user-friendly interfaces.
                            </li>

                            <li>
                                <span class="custom-highlight2">
                                    AI & Automation:
                                </span>
                                AI-powered applications, chatbots and automation
                                solutions to improve productivity and workflows.
                            </li>

                        </ul>

                    </div>


                    {/* Technology Expertise */}
                    <div class="custom-card2">

                        <h3 class="custom-heading2">
                            Technology & Expertise
                        </h3>

                        <ul class="custom-list2">

                            <li>
                                <span class="custom-highlight2">
                                    Web Technologies:
                                </span>
                                Modern frontend and backend technologies for
                                scalable digital applications.
                            </li>

                            <li>
                                <span class="custom-highlight2">
                                    Full Stack Development:
                                </span>
                                End-to-end development covering frontend,
                                backend, databases and REST APIs.
                            </li>

                            <li>
                                <span class="custom-highlight2">
                                    AI & Machine Learning:
                                </span>
                                Intelligent solutions using AI, machine learning,
                                chatbots and data-driven technologies.
                            </li>

                            <li>
                                <span class="custom-highlight2">
                                    Cloud & Deployment:
                                </span>
                                Deployment and hosting solutions for reliable
                                and scalable applications.
                            </li>

                            <li>
                                <span class="custom-highlight2">
                                    Business Solutions:
                                </span>
                                Customized ERP, CRM, automation and technology
                                solutions aligned with business objectives.
                            </li>

                        </ul>

                    </div>

                </div>
            </div>


            {/* Products / Expertise */}
            <div id="products">

                <div class="container">

                    <h1 class="hd text-center col-lg-8 col-md-10 mx-auto mt-5">
                        Technology, Creativity & Innovation for Digital Growth
                    </h1>

                    <div class="row pt-5 mb-5">

                        <div class="col-lg-4 col-md-6 col-12">

                            <div class="pro rounded pr1 theme2">

                                <span
                                    class="fa fa-bullhorn"
                                    aria-hidden="true"
                                ></span>

                                <h3>
                                    Digital Marketing
                                </h3>

                                <p class="para">
                                    Build a stronger online presence through SEO,
                                    social media, content marketing and performance
                                    marketing solutions.
                                </p>

                                <a href="">
                                    Read More
                                </a>

                            </div>

                        </div>


                        <div class="col-lg-4 col-md-6 col-12 mt-md-0 mt-5">

                            <div class="pro rounded pr2 theme2">

                                <span
                                    class="fa fa-code"
                                    aria-hidden="true"
                                ></span>

                                <h3>
                                    Technology Solutions
                                </h3>

                                <p class="para">
                                    Develop modern websites, web applications,
                                    e-commerce platforms and customized software
                                    solutions.
                                </p>

                                <a href="">
                                    Read More
                                </a>

                            </div>

                        </div>


                        <div class="col-lg-4 col-md-6 col-12 mt-lg-0 mt-5 mx-auto">

                            <div class="pro rounded pr3 theme2">

                                <span
                                    class="fa fa-robot"
                                    aria-hidden="true"
                                ></span>

                                <h3>
                                    AI & Automation
                                </h3>

                                <p class="para">
                                    Use AI, intelligent automation and chatbot
                                    technologies to create smarter and more efficient
                                    digital experiences.
                                </p>

                                <a href="">
                                    Read More
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* How It Works */}
            <div id="services" class="pd gr theme1 mt-5">

                <div class="container">

                    <h1 class="text-center hd head">
                        How It <span className="ccc">Works</span>
                    </h1>

                    <div class="row mt-5">

                        {/* Step 1 */}
                        <div class="col-lg-4 col-md-6 col-12 px-4">

                            <img
                                src="/assets/images/loginIcon.png"
                                class="imgheight"
                                alt="Consultation"
                            />

                            <h3 class="write mt-3">
                                Step 1: Understand
                            </h3>

                            <p class="text-gray-600 max-w-xs mt-3">
                                We understand your business requirements, goals,
                                challenges and digital needs to identify the right
                                solution.
                            </p>

                        </div>


                        {/* Step 2 */}
                        <div class="col-lg-4 col-md-6 col-12 px-4 mt-md-0 mt-5">

                            <img
                                src="/assets/images/feedbackIcon.png"
                                class="imgheight"
                                alt="Development"
                            />

                            <h3 class="write mt-3">
                                Step 2: Build
                            </h3>

                            <p class="text-gray-600 max-w-xs mt-3">
                                Our team combines creativity and technology to develop
                                websites, applications, marketing solutions and
                                AI-powered digital experiences.
                            </p>

                        </div>


                        {/* Step 3 */}
                        <div class="col-lg-4 col-md-6 col-12 px-4 mt-lg-0 mt-5 mx-auto">

                            <img
                                src="/assets/images/analysisIcon.png"
                                class="imgheight"
                                alt="Growth and Analytics"
                            />

                            <h3 class="write mt-3">
                                Step 3: Grow
                            </h3>

                            <p class="text-gray-600 max-w-xs mt-3">
                                We analyze performance, optimize solutions and use
                                technology and automation to support continuous
                                business growth.
                            </p>

                        </div>

                    </div>

                </div>

            </div>


            <Footer />

        </div>


    )

}

export default About
