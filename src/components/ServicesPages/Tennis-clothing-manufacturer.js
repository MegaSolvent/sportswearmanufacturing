import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FaTshirt, FaCheckCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './style.css';

// carousel images 
import img1 from "../../Images/Tennis/3rd-section.jpg";
import img2 from "../../Images/Tennis/3rd-sectionA.jpg";
import img3 from "../../Images/Tennis/1st-section.jpg";
import img4 from "../../Images/Tennis/3rd-sectionB.jpg";

import bgBack from "../../Images/Sweatsuit/bgback.jpg"
import Tenislabel from "../../Images/Tennis/5th-section.jpg"
import Tenisuit from "../../Images/Tennis/1st-section.jpg";
import Teniswear from "../../Images/Tennis/banner.jpg";



const Tenniscolthingmanufacturer = () => {
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

                <div className='yogaapparel' style={slideStyle(Teniswear)}>
                    <div style={overlayStyle}></div>
                    <div style={contentStyle}>
                        <h1 className="fw-bold mb-3 display-5">Custom Tennis Clothing Manufacturer

                        </h1>

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
                                src={Tenisuit}
                                alt="Main Textile"
                                className="img-fluid rounded shadow"
                            />


                            <div className='uppersection'>

                                <FaTshirt />
                                <p className="textour">
                                    We help tennis clothing brands, teams,
                                    and private labels start their clothing lines and build up a clothing
                                    line that dominates the competitive market.   </p>
                            </div>
                        </Col>

                        {/* RIGHT SIDE - CONTENT */}
                        <Col md={6}>
                            <p className="lead">
                                From custom tennis shorts and shirts to skirts and full uniforms, we offer fully customized products.
                                We offer performance tennis clothing that
                                features flexibility, breathability, and moisture-wicking ability to help players stay cool and active. </p>
                            <button className='Breathable'>BEGIN NOW</button>

                            <h2 className="besthunting">
                                Types of Custom Tennis Apparel We Produce</h2>


                            <div className="customjeake">
                                <ListGroup>
                                    <ListGroupItem className='custom bg-light' >Tennis shorts</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Tennis polos</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Tennis Skirts</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Tennis Hats</ListGroupItem>

                                </ListGroup>

                            </div>

                        </Col>
                    </Row>
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
                                        <img src={img4} className="img-fluid" alt={`slide ${i}`} />


                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>

                    </Col>

                    {/* RIGHT — HEADING + DESCRIPTION + ICON LIST */}
                    <Col md={6} className="mt-4 mt-md-0">
                        <h3 className="fw-bold mb-3">Custom Tennis Apparel Crafted with Popular Materials
                        </h3>
                        <p className='trusted'>
                            Our <strong>custom athletic clothing</strong> includes high-quality tennis apparel crafted using the performance fabrics.
                            We build custom tennis dresses considering the needs of athletes and tennis clothing lines. Each fabric gives products unique
                            abilities like moisture absorbency, mobility, and resistance that help players perform well on the court.
                        </p>

                        <ul className="list-unstyled mt-3">
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Spandex-Polyester Blends


                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Mesh Fabric

                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />

                                Microfibers
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />

                                UV-Protective Fabrics
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />

                                Recycled Performance Fabric
                            </li>
                        </ul>

                        <button className='Breathable'>Start Building Your Product Line Now</button>

                    </Col>

                </Row>
            </div>









            {/* CTA Section */}
            <section className="cta-section bg-light text-white py-5">
                <Container>
                    <Row className="text-center">
                        <Col lg={8} className="mx-auto">
                            <h2 className="display-6 fw-bold mb-3">
                                Make Your Clothes Unique with Advanced Customization Options</h2>
                            <p className="lead mb-4">
                                Our limitless and advanced customization options make us a premium sports clothing manufacturer.
                                From fabric selection and color options to personalized prints and custom sizing, we offer everything you need.
                                You can choose embroidery,
                                washing, dyeing and printing methods to give your tennis apparel aesthetic appeal and practicality.
                            </p>
                            <button className='Breathable'>
                                Customize Your Clothes
                            </button>
                        </Col>
                    </Row>
                </Container>
            </section>



            {/* efficent and privtae label  */}


            <div
                className="hero-section"
                style={{ backgroundImage: `url(${Tenislabel})` }}
            >
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='Tenis '>
                                <h1 className="Tenis-title">Private Labeling Options to Enhance Brand Identity </h1>
                                <p className="Tanis-desc">
                                    As your trusted tennis apparel supplier, we offer end-to-end private labeling options to enhance your brand’s identity. Our products are designed with precision and delivered with custom tags,
                                    labels, and logos of your choosing. We allow you to design your labels according to your brand’s image.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>





            <div
                className="tenis-section"
                style={{ backgroundImage: `url(${bgBack})` }}
            >
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='advanved '>
                                <h1 className="last-title">Your Performance-Driven Underwear Brand Awaits?</h1>
                                <button className='Brand-btn'>

                                    Begin Now

                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};



export default Tenniscolthingmanufacturer;