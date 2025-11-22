import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FaTshirt, FaCheckCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

import './style.css'
// carousel images 
import img1 from "../../Images/Sweatsuit/slide1.jpg";
import img2 from "../../Images/Sweatsuit/slide2.jpg";
import img3 from "../../Images/Sweatsuit/slide3.jpg";
import img4 from "../../Images/Sweatsuit/slide4.jpg";

import bgBack from "../../Images/Sweatsuit/bgback.jpg"
import bgImage from "../../Images/Sweatsuit/Advanced-Printing.jpg"
import Wearsuit from "../../Images/Sweatsuit/Custom-Sweatsuits.jpg";
import Sweatsuit from "../../Images/Sweatsuit/BANNER.jpg";



const SweatsuitManufacturer = () => {
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

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,           // show 2 images on desktop
            slidesToSlide: 1,   // scroll 1 at a time
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };
    return (
        <div className="textile-services-page">

            {/* Hero Section */}

            <section>

                <div className='huntingapparel' style={slideStyle(Sweatsuit)}>
                    <div style={overlayStyle}></div>
                    <div style={contentStyle}>
                        <h1 className="fw-bold mb-3 display-5">Custom Sweatsuits Manufacturer</h1>

                    </div>
                </div>
            </section>




            {/* about section  */}
            <section className="upersectiontop bg-light" >
                <Container responsive>
                    <Row >
                        {/* LEFT SIDE - IMAGES */}
                        <Col md={6} className="position-relative ">
                            <img
                                src={Wearsuit}
                                alt="Main Textile"
                                className="img-fluid rounded shadow"
                            />


                            <div className='uppersection'>

                                <FaTshirt />
                                <p className="textour">
                                    Our reputation extends beyond just jogging suit manufacturers; we are the producers of custom
                                    sweatsuits designed to improve your style and performance. We craft your sweatsuits using modern fabrics like
                                    polyester blends, terry cloth, fleece and other advanced materials to ensure optimal comfort.
                                    Each piece is given a unique color palette and design to reflect your brand’s identity.   </p>
                            </div>
                        </Col>

                        {/* RIGHT SIDE - CONTENT */}
                        <Col md={6}>
                        <p className="lead">
                                Our specialty in crafting the best sweatsuits makes us a reliable sweatsuit and tracksuit manufacturer.
                                We cater to private labels, sports clubs, and brands that want premium-quality sweatsuits.
                                We have got you covered whether you need performance products or loungewear in the best designs.
                            </p>
                        <button className='Breathable'>BEGIN NOW</button>

                            <h2 className="besthunting">
                                Custom Sweatsuits: A Combination of Comfort & Customization</h2>
                            

                            <div className="customjeake">
                                <ListGroup>
                                    <ListGroupItem className='custom bg-light' >Custom Cut-and-Sew</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Custom Printing with Various Options</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Custom Embroidery</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>ROUND NECK T-SHIRT</ListGroupItem>

                                    <ListGroupItem className='printingg bg-light'>Breathable and Flexible Fabric Options</ListGroupItem>
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
                        Private Labeling Solutions
                    </h2>
                    <p className="outdoor">
                        We are more than just a wholesale sweatsuits supplier. We are the manufacturers of custom sports clothing with vast private labeling options. Whether you want a personalized logo printed on the
                        sweatsuits or tags and labels customized according to your brand’s requirements, we have everything you want.
                    </p>


                    <button className='Breathable'>Build Your Own Brand</button>
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
                                        <img src={img2} className="img-fluid" alt={`slide ${i}`} />


                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>

                    </Col>

                    {/* RIGHT — HEADING + DESCRIPTION + ICON LIST */}
                    <Col md={6} className="mt-4 mt-md-0">
                        <h3 className="fw-bold mb-3">Efficient and Reliable Production
                        </h3>
                        <p className='trusted'>
                            We want to become your trusted sweatsuit manufacturers that
                            handle every step, from design ideas and samples to bulk products, with absolute professionalism.
                        </p>

                        <ul className="list-unstyled mt-3">
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Product Designs


                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Sourcing Materials

                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />

                                Sample Production
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />

                                Bulk Production
                            </li>
                        </ul>

                        <button className='Breathable'>BEGIN NOW</button>

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
                                What We Offer to Make Your Brand Whole</h2>
                            <p className="lead mb-4">
                                We believe in making your sweatsuit brand the best among other market giants. Therefore, we offer a wide range of services, including OEM manufacturing,  limitless bulk production,
                                a low MOQ of 35 to 50 pieces, market-competitive prices, free shipment, and doorstep delivery.
                            </p>
                            <button className='Breathable'>
                                Become a Brand with Us
                            </button>
                        </Col>
                    </Row>
                </Container>
            </section>



            {/* efficent and privtae label  */}


            <div
                className="sweat-section"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='sweatsuit '>
                                <h1 className="sweat-title">Advanced Printing Methods for Your to Stand Out</h1>
                                <p className="sweat-desc">
                                    We design products with the most advanced printing methods to help you get unique products exclusive to your brand. We offer heat printing, sublimation printing, vinyl printing, digital printing
                                    DTF (direct-to-film), DTG (direct-to-garment), and more.

                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>





            <div
                className="last-section"
                style={{ backgroundImage: `url(${bgBack})` }}
            >
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='sweatset'>
                                <h1 className="last-title">Ready to Partner with a Trusted Sweatsuit Manufacturer?</h1>
                                <button className='Brand-btn'>
                                    Start Building Your Brand
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};



export default SweatsuitManufacturer;