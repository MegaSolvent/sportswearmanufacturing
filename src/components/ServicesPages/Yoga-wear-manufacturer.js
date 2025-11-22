import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FaTshirt, FaCheckCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './style.css';
// carousel images 
import img1 from "../../Images/yoga/yoga1.jpg";
import img2 from "../../Images/yoga/yoga2.jpg";
import img3 from "../../Images/yoga/yoga3.jpg";
import img4 from "../../Images/yoga/Custom-Yoga.jpg";

import bgBack from "../../Images/Sweatsuit/bgback.jpg"
import Yogalabel from "../../Images/yoga/yoga-label.jpg"
import Yogasuit from "../../Images/yoga/Custom-Yoga.jpg";
import Yogawear from "../../Images/yoga/banner.jpg";



const Yogawearmanufacturer = () => {
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

                <div className='yogaapparel' style={slideStyle(Yogawear)}>
                    <div style={overlayStyle}></div>
                    <div style={contentStyle}>
                        <h1 className="fw-bold mb-3 display-5">Custom Yoga Wear Manufacturer</h1>

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
                                src={Yogasuit}
                                alt="Main Textile"
                                className="img-fluid rounded shadow"
                            />


                            <div className='uppersection'>

                                <FaTshirt />
                                <p className="textour">
                                    We create iconic gym clothing that includes the perfect yoga wear for your brand. Our product
                                    line consists of popular and practical yoga clothes that help in exercises, yoga, cardio, and
                                    various fitness activities.    </p>
                            </div>
                        </Col>

                        {/* RIGHT SIDE - CONTENT */}
                        <Col md={6}>
                            <p className="lead">
                                Our expertise in crafting premium-quality yoga clothing makes us a reliable custom yoga wear manufacturer. We combine
                                flexibility, style and comfort with performance fabrics to create products that elevate performance during yoga activities.
                                We cater to sports brands, fitness labels, retailers, and clothing lines by providing them with top-of-the-line yoga wear.
                            </p>
                            <button className='Breathable'>BEGIN NOW</button>

                            <h2 className="besthunting">
                                Custom Yoga Wear Factory for Outstanding Products</h2>


                            <div className="customjeake">
                                <ListGroup>
                                    <ListGroupItem className='custom bg-light' >Yoga Shirts</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Yoga Leggings</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Yoga Pants</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Yoga Bras </ListGroupItem>

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
                        Premium Fabric Options for Your Yoga Clothing
                    </h2>
                    <p className="outdoor">
                        Our <strong>sportswear manufacturing</strong> solutions and premium fabric options make the yoga wear promising for yoga practices.
                        We incorporate high-performance materials like polyester blends, spandex, nylon-elastane blends, cotton, and recycled
                        stretch fabrics,
                        all engineered to add and enhance flexibility, ventilation, comfort, and softness.</p>


                    <button className='Breathable'>Inquire Now</button>
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
                        <h3 className="fw-bold mb-3">Advanced Printing Methods for Your Unique Product Line
                        </h3>
                        <p className='trusted'>
                            We offer advanced printing methods to imprint designs, patterns, colors,
                            and graphics on clothes to give your products a unique look that reflects your brand’s vision.
                        </p>

                        <ul className="list-unstyled mt-3">
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Sublimation Printing


                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Heat Printing

                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />

                                Vinyl Printing
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />

                                Direct to Garment Printing (DTG)
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />

                                Direct to Fabric Printing (DTF)
                            </li>
                        </ul>

                        <button className='Breathable'>Start Now</button>

                    </Col>

                </Row>
            </div>










            {/* end image crousel  */}







            {/* CTA Section */}
            <section className="cta-section bg-light text-white py-5">
                <Container>
                    <Row className="text-center-yoga">
                        <Col lg={8} className="mx-yoga">
                            <h2 className="display-6 fw-bold mb-3">
                                Cut and Sew Manufacturing with Limitless Customization</h2>
                            <p className="yogacloth">
                                We are your trusted wholesale yoga clothing manufacturers that offer precise cut-and-sew manufacturing
                                solutions with unlimited customization options. Our professionals cut the fabric precisely according to your
                                requirements and sew it to give you a final product. We allow you to customize your products the way you want.
                                From fabric and color selection to designs and prints, your ideas become our guideline.  </p>
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
                style={{ backgroundImage: `url(${Yogalabel})` }}
            >
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='Yogawear '>
                                <h1 className="Yoga-title">Private Label Yoga Clothing to Elevate Brand’s Identity </h1>
                                <p className="yoga-desc">
                                    You can build a unique identity for your brand with the help of our private label yoga clothing.
                                    We offer custom labels and tags to give your products a market-ready appearance. Using our customization services,
                                    you can personalize the labels and their placements to make your yoga wear appealing to customers.

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
                            <div className='yogawearss '>
                                <h1 className="last-title">Start and Level Up Your Brand with Our<br/> Custom Manufacturing?</h1>
                                <p className='carefully'>You can start either small or big with our low MOQ of 35 to 50 pieces per design and color. Our fast turnaround time can help you begin your venture faster.
                                    Our sample manufacturing can help you choose the products carefully. Our doorstep delivery can save your time and efforts. </p>
                                <button className='Brand-btn'>

                                    Build Your Own Brand

                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};



export default Yogawearmanufacturer;