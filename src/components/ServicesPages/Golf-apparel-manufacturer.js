import { Container, Row, Col,  Carousel } from 'react-bootstrap';
import { FaTshirt, FaCheckCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

import './style.css'
// carousel images 
import img1 from "../../Images//Golf/Private Label Golf Apparel Factory for Your Brand Identity..jpg";
import img2 from "../../Images/Golf/Private Label Golf Apparel Factory for Your Brand Identity.jpg";
import img3 from "../../Images/Golf/Private Label Golf Apparel Factory for Your Brand Identity0.jpg";
import img4 from "../../Images/Golf/golf-apparel4.png";

import bgBack from "../../Images/Sweatsuit/bgback.jpg"
import bgImage from "../../Images/Golf/Golf-Polo-Shirt-Manufacturer-with-Promising-Customer-Services.jpg"
import Golfwear from "../../Images/Golf/1st-section.jpg";
import Golfsuit from "../../Images/Golf/bannner.jpg";



const Golfapparelmanufacturer = () => {
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

                <div className='huntingapparel' style={slideStyle(Golfsuit)}>
                    <div style={overlayStyle}></div>
                    <div style={contentStyle}>
                        <h1 className="fw-bold mb-3 display-5">Golf Apparel Manufacturer</h1>

                    </div>
                </div>
            </section>




            {/* 2 section  */}
            <section className="upersectiontop bg-light" >
                <Container>
                    <Row >
                        <Col md={6} className="position-relative ">
                            <img src={Golfwear} alt="Main Textile" className="img-fluid rounded shadow" />
                            <div className='uppersection'>
                                <FaTshirt />
                                <p className="textour">
                                    We offer end-to-end solutions ranging from fabric sourcing and stitching to complete bulk golf wear manufacturing.
                                    Our excellent production ensures that every product reflects your brand’s style and performance values.
                                </p>
                            </div>
                        </Col>

                        {/* RIGHT SIDE - CONTENT */}
                        <Col md={6}>
                            <p className="lead">
                                Sportswear manufacturing solutions for premium quality golf clothing to cater to global brands, businesses,
                                players, and golf clubs.
                                We produce high-performance, custom golf products using modern materials and efficient production methods.
                            </p>
                            <button className='Breathable'>BEGIN NOW</button>
                            <h2 className="besthunting"> Custom Golf Uniforms: Excellence in Every Garment</h2>
                            <div className="customjeake">
                                <ListGroup>
                                    <ListGroupItem className='custom bg-light' >Golf polo shirts and shorts.</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Golf trousers and pants.</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Golf jackets and windbreakers</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Golf vests and rainwear.</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Golf hoodies and pullovers.</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Golf skirts and skorts.</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Golf hoodies and pullovers.</ListGroupItem>
                                </ListGroup>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>



            {/* 3 section  */}

            <section
                className="hero-section d-flex align-items-center text-center bg-light">
                <Container>
                    <p className="outdoor">
                        We offer wholesale golf polos for our retailers that cater to golfers with a wide
                        variety of golf essentials. Our high-quality products ensure that your brand
                        becomes an admired entity among your customers with the help of our manufacturing
                        capabilities.
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
                                        <img src={img4} className="img-fluid" alt={`slide ${i}`} />


                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>

                    </Col>

                    {/* RIGHT — HEADING + DESCRIPTION + ICON LIST */}
                    <Col md={6} className="mt-4 mt-md-0">
                        <h3 className="fw-bold mb-3">Unlimited Customization Options
                        </h3>
                        <p className='trusted'>
                            We offer a wide range of customization options for you to personalize your own clothing.
                        </p>

                        <ul className="list-unstyled mt-3">
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom Embroidery


                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom Printing

                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />

                                Custom Cut-and-Sew
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />

                                Fabric Washing
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />

                                Fabric Dyeing
                            </li>
                        </ul>

                        <button className='Breathable'>BEGIN NOW</button>

                    </Col>

                </Row>
            </div>







            {/* 4 CTA Section */}
            <section className="cta-section bg-light text-white py-5">
                <Container>
                    <Row className="text-center">
                        <Col lg={12} className="mx-auto">
                            <h2 className="display-6 fw-bold mb-3">
                                Private Label Golf Apparel Factory for <br /> Your Brand’s Identity</h2>
                            <p className="lead mb-4">
                                Start and expand your clothing line with our private labeling services. We offer tags and labels that showcase your brand’s vision. Our customized logos, colors, materials, and trims make your products market-ready. We allow you to fully
                                customize any labels from hang tags to heat-printed tags and use them to form an identity in the industry.  </p>
                            <button className='Breathable'>
                                Become a Brand with Us
                            </button>
                        </Col>
                    </Row>
                </Container>
            </section>



            {/*5 golf and privtae label  */}


            <div
                className="hero-section"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='sublimation '>
                                <h1 className="Golf-Polo">Golf Polo Shirt Manufacturer with Promising <br/>Customer Services</h1>
                                <p className="Golf-desc">
                                    We are committed to quality and sustainability. We provide our customers with the best services possible. From sampling and prototyping to quality inspection and dispatching the order, we take care of every little detail. Our low MOQ of 35 to 50 pieces per color and design allows you to start a brand with a minimum risk. Moreover,
                                    our bulk order discount and flexible payment methods make your journey to becoming a market giant easier.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>




            {/* 6 section  */}
            <div
                className="last-section"
                style={{ backgroundImage: `url(${bgBack})` }}
            >
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='golfapp '>
                                <h1 className="last-title">Ready to Launch and Elevate Your<br /> Golf Clothing Brand?</h1>
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



export default Golfapparelmanufacturer;