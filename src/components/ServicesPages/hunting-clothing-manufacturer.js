import React from 'react';
import { Container, Row, Col, CardImg, Button, Carousel } from 'react-bootstrap';
import { FaTshirt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './style.css'
// carousel images 
import Img1 from "../../Images/Homeimages/polo.jpg";
import Img2 from "../../Images/Homeimages/cycling.jpg";
import Img3 from "../../Images/Homeimages/tennis.jpg";

import Gym from "../../Images/Homeimages/jacket.jpg";
import wear from "../../Images/Homeimages/gym-costume.jpg";
import Private from "../../Images/Homeimages/cyliung.jpg";
import Sweat from "../../Images/hunting/hunting1.png";
import short from "../../Images/hunting/hunting2.png";
import hunting from "../../Images/hunting/hunting3.png";



const HuntingClothingManufacturer = () => {

    const images = [Img1, Img2, Img3];
    // Common style for each slide
    const slideStyle = (image) => ({
        height: "60vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        marginTop: "8rem",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        transition: "background-image 1s ease-in-out",
    });

    // Overlay style
    const overlayStyle = {
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 1,
    };

    // Text container style
    const contentStyle = {
        position: "relative",
        zIndex: 2,
        maxWidth: "800px",
        padding: "0 15px",
    };

    const buttonStyle = {
        marginTop: "20px",
        backgroundColor: "#ff6600",
        color: "#fff",
        border: "none",
        padding: "12px 30px",
        borderRadius: "30px",
        fontSize: "16px",
        fontWeight: "600",
        cursor: "pointer",
    };
    return (
        <div className="textile-services-page">
            {/* Hero Section */}

            <section>
                <Carousel fade controls={false} indicators={false} interval={3000}>
                    {/* Slide 1 */}
                    <Carousel.Item>
                        <div className='huntingapparel' style={slideStyle(short)}>
                            <div style={overlayStyle}></div>
                            <div style={contentStyle}>
                                <h1 className="fw-bold mb-3 display-5">Hunting Apparel Manufacturer</h1>
                                <p className="lead">
                                    As your reliable camouflage clothing manufacturer, we specialize in
                                    crafting premium hunting apparel for amazing outdoor performance.
                                     Our products are designed for unpredictable weather and rugged terrains.
                                      We cater to hunting brands, sports clothing lines, retailers,
                                    and big and small apparel businesses with the best hunting gear.
                                </p>
                                <button className='Eqval-btn'>Get Started Today</button>
                            </div>
                        </div>
                    </Carousel.Item>

                    {/* Slide 2 */}
                    <Carousel.Item>
                        <div style={slideStyle(Sweat)}>
                            <div style={overlayStyle}></div>
                            <div style={contentStyle}>
                                <h2 className="fw-bold mb-3 display-5">Hunting Apparel Manufacturer</h2>
                                <p className="lead">
                                    As your reliable camouflage clothing manufacturer, we specialize in
                                    crafting premium hunting apparel for amazing outdoor performance. Our products are designed for unpredictable weather and rugged terrains. We cater to hunting brands, sports clothing lines, retailers,
                                    and big and small apparel businesses with the best hunting gear.
                                </p>
                                <button className='Eqval-btn'>Get Started Today</button>
                            </div>
                        </div>
                    </Carousel.Item>

                    {/* Slide 3 */}
                    <Carousel.Item>
                        <div style={slideStyle(hunting)}>
                            <div style={overlayStyle}></div>
                            <div style={contentStyle}>
                                <h2 className="fw-bold mb-3 display-5">Hunting Apparel Manufacturer</h2>
                                <p className="lead">
                                    As your reliable camouflage clothing manufacturer, we specialize in
                                    crafting premium hunting apparel for amazing outdoor performance. Our products are designed for unpredictable weather and rugged terrains. We cater to hunting brands, sports clothing lines, retailers,
                                    and big and small apparel businesses with the best hunting gear.
                                </p>
                                <button className='Eqval-btn'>Get Started Today</button>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>




            {/* about section  */}
            <section className="py-5 bg-light">
                <Container>
                    <Row className="align-items-center">
                        {/* LEFT SIDE - IMAGES */}
                        <Col md={6} className="position-relative ">
                            <img
                                src={wear}
                                alt="Main Textile"
                                className="img-fluid rounded shadow"
                            />


                            <div className='uppersection'>

                                <FaTshirt />
                                <p className="textour">
                                    Custom hunting clothing manufacturers can help you start your own clothing
                                    line with the finest,
                                    durable, and iconic products at affordable prices. </p>
                            </div>
                        </Col>

                        {/* RIGHT SIDE - CONTENT */}
                        <Col md={6}>
                            <h2 className="besthunting">
                                The Best Hunting Wear <br /> You Need</h2>
                            <p className="text-muted mb-4">
                                Our custom hunting gear is tailored to provide comfort and
                                stealth to hunters who like outdoor adventures and amazing hunting
                                experiences. Our vast variety of products gives you an edge in the competitive market for having perfectly engineered hunting apparel.
                            </p>

                            <div className="customjeake">
                                <ListGroup>
                                    <ListGroupItem>Custom Jackets</ListGroupItem>
                                    <ListGroupItem>Custom Camouflage Gear</ListGroupItem>
                                    <ListGroupItem>Custom Vests</ListGroupItem>
                                    <ListGroupItem>Custom Pants</ListGroupItem>
                                    <ListGroupItem>Custom Bibs</ListGroupItem>
                                </ListGroup>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>



            {/* hero section  */}

            <section
                className="hero-section d-flex align-items-center text-center text-white"
                style={{
                    backgroundImage:
                        "url('https://via.placeholder.com/1920x700?text=Textile+Hero+Background')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "50vh", // full height
                }}
            >
                <Container>
                    <h2 className="Customhunting">
                        Custom Hunting Clothing for Your Brand
                    </h2>
                    <p className="outdoor">
                        As an outdoor clothing manufacturer, we understand your brand requires custom hunting clothing that resonates with your brand’s vision and market needs. Our limitless customization options help you choose personalized designs, unique features, fabrics, and different sizes. Combining
                        all the custom traits will give you unique and market-ready hunting gear.
                    </p>
                    
                    <button className='Eqval-btn'>Start Your Hunting Clothing Brand</button>
                </Container>
            </section>


            {/* image carousel section */}


            <Container fluid className="py-5">
                <Row className="align-items-center">

                    {/* LEFT SIDE — IMAGE CAROUSEL */}
                    <Col lg={6} md={6} sm={12} className="mb-4" height={400}>
                        <Carousel indicators={false} prevIcon={<span className="carousel-control-prev-icon" />} nextIcon={<span className="carousel-control-next-icon" />}>
                            <Carousel.Item>
                                <img src={Img1} className="d-block w-100 h-50" alt="Slide 1" />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src={Img2} className="d-block w-100 h-50" alt="Slide 2" />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src={Img3} className="d-block w-100 h-50" alt="Slide 2" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                    {/* RIGHT SIDE — TEXT CONTENT */}
                    <Col lg={6} md={6} sm={12}>
                        <div className='cutandsew'>
                            <h1 className="mb-3">Cut and Sew Expertise and Superior Craftsmanship</h1>
                            <p className="mb-3">
                                As leading sports apparel manufacturers, we offer top-of-the-line craftsmanship using our cut-and-sew expertise and performance
                                materials that make the products breathable, durable, and weather resistant.
                            </p>

                            <ul style={{ lineHeight: "2" }}>
                                <li>Tailored Design</li>
                                <li>Custom Sizing</li>
                                <li>Precise Shaping</li>
                                <li>Perfect Construction</li>
                            </ul>
                            <Button className='Eqval-btn'>Request a Quote</Button>

                        </div>
                    </Col>
                </Row>
            </Container>


            {/* private labeling  */}

            <Container >
                <Row className="align-items-center">



                    {/* Left SIDE — TEXT CONTENT */}
                    <Col lg={6} md={6} sm={12}>
                        <div className='privatelabling'>
                            <h2 className="mb-3">Private Labeling for Your Hunting Apparel</h2>
                            <p className="mb-3">
                                Our private labeling options are a key to a remarkable brand’s identification. We offer custom labels and tags that you can personalize yourself. We allow you to give us an idea of the design and placement of tags along with their sizes. Our private labeling
                                solutions will give your products recognition in the competitive market.
                            </p>


                            <Button className='Eqval-btn'>Get Started Today</Button>

                        </div>
                    </Col>

                    {/* Right SIDE — IMAGE CAROUSEL */}
                    <Col lg={6} md={6} sm={12} className="mb-4" >
                        <div className='privatelabeling' >
                            <CardImg top width="100%" className='pvtlimitimge' src={Private}
                                alt="Card image cap" />


                        </div>
                    </Col>
                </Row>
            </Container>




            {/* CTA Section */}
            <section className="cta-section bg-dark text-white py-5">
                <Container>
                    <Row className="text-center">
                        <Col lg={8} className="mx-auto">
                            <h2 className="display-6 fw-bold mb-3">Ready to Become a Brand with the Top Hunting Apparel Manufacturer?</h2>
                            <p className="lead mb-4">
                                Contact us today to discuss your requirements and get a customized solution
                                for your textile needs.
                            </p>
                            <Button variant="primary"  className='Eqval-btn'>
                                Request Consultation
                            </Button>
                            <Button className='Eqval-btn' variant="outline-light" >
                                Get Quote
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>


            <Container >
                <Row className="align-items-center">

                    {/* LEFT SIDE — IMAGE CAROUSEL */}
                    <Col lg={6} md={6} sm={12} className="mb-4" >
                        <div className='privatelabeling' >
                            <CardImg top width="100%" className='pvtlimitimge' src={Gym}
                                alt="Card image cap" />


                        </div>
                    </Col>

                    {/* RIGHT SIDE — TEXT CONTENT */}
                    <Col lg={6} md={6} sm={12}>
                        <div className='wearebest'>
                            <h2 className="mb-3">We Are the Best Option for You</h2>
                            <p className="mb-3">
                                Our customer services as a hunting clothing manufacturer are the best. We help you start either big or small with our low MOQ of 35 to 50 pieces. Our sample manufacturing helps you choose the products properly. We offer the fastest turnaround time to help you
                                become a brand sooner. We offer doorstep delivery to save you from any hassles.
                            </p>


                            <Button className='Eqval-btn'>Launch Your Own Clothing Brand</Button>

                        </div>
                    </Col>


                </Row>
            </Container>

            {/* Stats Section */}
            <section className="stats-section py-5 bg-white">
                <Container>
                    <Row className="text-center">
                        <Col md={3} className="mb-4">
                            <div className="stat-item">
                                <h3 className="display-4 fw-bold text-primary mb-2">25+</h3>
                                <p className="text-muted fw-semibold">Years Experience</p>
                            </div>
                        </Col>
                        <Col md={3} className="mb-4">
                            <div className="stat-item">
                                <h3 className="display-4 fw-bold text-success mb-2">500+</h3>
                                <p className="text-muted fw-semibold">Happy Clients</p>
                            </div>
                        </Col>
                        <Col md={3} className="mb-4">
                            <div className="stat-item">
                                <h3 className="display-4 fw-bold text-warning mb-2">10M+</h3>
                                <p className="text-muted fw-semibold">Meters Produced</p>
                            </div>
                        </Col>
                        <Col md={3} className="mb-4">
                            <div className="stat-item">
                                <h3 className="display-4 fw-bold text-info mb-2">50+</h3>
                                <p className="text-muted fw-semibold">Countries Served</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};



export default HuntingClothingManufacturer;