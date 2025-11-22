import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FaTshirt, FaCheckCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import '../ServicesPages/Css/yoga.css'
import './style.css';
// carousel images 
import img1 from "../../Images/Gym/Private-Label.jpg";
import img2 from "../../Images/Gym/Private-Label1.jpg";
import img3 from "../../Images/Gym/Private-Label2.jpg";
import img4 from "../../Images/Gym/Gym-Appare.jpg";

import bgBack from "../../Images/Sweatsuit/bgback.jpg"
import Gymlabel from "../../Images/Gym/The-Printing-Solutions-You-Need-for-Your-Gym-Wear-Brand.jpg"
import Gymsuit from "../../Images/Gym/Gym-Appare.jpg";
import Gymwear from "../../Images/Gym/banner.jpg";



const Gymclothingmanufacturer = () => {
    // Common style for each slide
    const slideStyle = (image) => ({
        height: "400px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: "relative",
        display: "flex",
        marginTop: "138px",
        alignItems: "center",
        justifyContent: "start",
        textAlign: "left",
        color: "white",
        transition: "background-image 1s ease-in-out",
    });

    // Overlay style
    const overlayStyle = {
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0,0,0,24%)",
        zIndex: 1,
    };

    // Text container style
    const contentStyle = {
        position: "relative",
        zIndex: 2,
        maxWidth: "800px",
        padding: "0 15px",
    };

    const images = [img1, img2, img3, img4];

  
    return (
        <div className="textile-services-page">

            {/* Hero Section */}

            <section>

                <div className='yogaapparel' style={slideStyle(Gymwear)}>
                    <div style={overlayStyle}></div>
                    <div style={contentStyle}>
                        <h1 className="fw-bold mb-3 display-5">Gym Clothing Manufacturer</h1>

                    </div>
                </div>
            </section>




            {/* about section  */}
            <section className="upersectiontop bg-light" >
                <Container>
                    <Row >
                        {/* LEFT SIDE - IMAGES */}
                        <Col md={6} className="position-relative ">
                            <img
                                src={Gymsuit}
                                alt="Main Textile"
                                className="img-fluid rounded shadow"
                            />


                            <div className='uppersection'>

                                <FaTshirt />
                                <p className="textour">
                                    Your product selection becomes easy with our gym apparel wholesale range that includes versatile
                                    fitness wear for men and women. We specialize in designing gym wear with technical
                                    precision and contemporary aesthetics, making them ideal for intense workouts and casual wear.    </p>
                            </div>
                        </Col>

                        {/* RIGHT SIDE - CONTENT */}
                        <Col md={6}>
                            <p className="lead">
                                Partner with a leading gym wear manufacturer for the iconic workout clothes for your clothing line.
                                Launch and level up your brand with our custom fitness apparel developed uniquely according to your requirements.
                            </p>
                            <button className='Breathable'>BEGIN NOW</button>

                            <h2 className="besthunting">
                                Gym Apparel Manufacturers to Elevate Your Product line</h2>


                            <div className="customjeake">
                                <ListGroup>
                                    <ListGroupItem className='custom bg-light' >T-shirts</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'> Leggings</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Sports Bras</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Hoodies </ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Joggers </ListGroupItem>


                                </ListGroup>

                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>



            {/* hero section  */}

            <section
                className="hero-section d-flex align-items-center text-center bg-light"

            >
                <Container>
                    <h2 className="Customhunting">
                        As your reliable athletic & workout clothing manufacturer, we offer a full range of services from sampling and prototyping to bulk production and quality control.
                    </h2>



                    <button className='Breathable'>Customize Your Clothes</button>
                </Container>
            </section>


            {/* image carousel section */}
            <div className="container carouselsec">
                <Row className="align-items-center">

                    {/* LEFT — IMAGE CAROUSEL */}
                    <Col md={6} className="carousel-wrapper position-relative">



                        <Carousel id="slider1" indicators={false} interval={2000}>
                            {images.map((img, i, ii) => (
                                <Carousel.Item key={i}>
                                    <div className="carousel-images">
                                        <img src={img} className="img-fluid" alt={`slide ${i}`} />
                                        <img src={img3} className="img-fluid" alt={`slide ${i}`} />


                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>

                    </Col>

                    {/* RIGHT — HEADING + DESCRIPTION + ICON LIST */}
                    <Col md={6} className="mt-4 mt-md-0">
                        <h3 className="fw-bold mb-3">Private Label Fitness Apparel Manufacturing
                        </h3>
                        <p className='trusted'>
                            We take pride in being reliable <strong>sports clothing manufacturers</strong>
                            to offer the best private label fitness apparel to ensure your products reflect your brand’s identity.
                        </p>

                        <ul className="list-unstyled mt-3">
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom Logo


                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Personalized Tags

                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />

                                Color Flexibility and Fabric Diversity.
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />

                                Custom Labeling and Designs
                            </li>
                        </ul>

                        <button className='Breathable'>Get Your Sample</button>

                    </Col>

                </Row>
            </div>










            {/* end image crousel  */}







            {/* CTA Section */}
            <section className="cta-section bg-light text-white py-5">
                <Container>
                    <Row className="text-center">
                        <Col lg={8} className="mx-auto">
                            <h2 className="display-6 fw-bold mb-3">
                                Start Your Gym Clothing Brand with Us</h2>
                            <p className="lead mb-4">
                                Partner with a reliable workout clothes supplier because we believe in innovations,
                                performance and practicality. Reveal your design ideas and we will create the finest gym clothes for you.
                            </p>
                            <button className='Breathable'>
                                Customize Your Products
                            </button>
                        </Col>
                    </Row>
                </Container>
            </section>



            {/* efficent and privtae label  */}


            <div
                className="hero-section"
                style={{ backgroundImage: `url(${Gymlabel})` }}
            >
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='Gymwear '>
                                <h1 className="Gym-Polo">The Printing Solutions You Need for Your<br/> Gym Wear Brand </h1>
                                <p className="Gym-desc">
                                    As your trusted activewear manufacturer, we deliver vibrant appearance, precision,
                                    and durability with our printing solutions. Our printing methods include cut-and-sew,
                                    sublimation, heat printing, embroidery, washing, dyeing, and more.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>





            <div
                className="yoga-section"
                style={{ backgroundImage: `url(${bgBack})` }}
            >
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='last-gym '>
                                <h1 className="last-title">Choose us for advanced performance fabrics, fast turnaround time,
                                    flexible payment methods, bulk order discounts, and low MOQ options to make your brand stronger.</h1>
                                <button className='Brand-btn'>

                                    Build Your Brand Now

                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};



export default Gymclothingmanufacturer;