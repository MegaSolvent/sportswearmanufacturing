import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Card, Button, Badge } from 'react-bootstrap';
import { Telephone, Envelope, Calendar, Chat, ArrowRight } from 'react-bootstrap-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faTags, faUserShield, faCreditCard } from '@fortawesome/free-solid-svg-icons';

// Import local blog images
import blog1 from '../../Images/Homeimages/Private-label.jpg';
import blog2 from '../../Images/Homeimages/cyliung.jpg';
import blog3 from '../../Images/Homeimages/gym-costume.jpg';
import './style.css';

import rightImage from "../../Images/highqulity.jpg";
// image crousel
import carousel1 from '../../Images/Homeimages/jacket.jpg';
import carousel2 from '../../Images/Homeimages/polo.jpg';
import carousel3 from '../../Images/Homeimages/fishing-costume.jpg';
import carousel4 from '../../Images/Homeimages/cyliung.jpg';
import carousel5 from '../../Images/Homeimages/gym-costume.jpg';
import carousel6 from '../../Images/Homeimages/polo.jpg';
import carousel7 from '../../Images/Homeimages/fishing-costume.jpg';
import carousel8 from '../../Images/Homeimages/cyliung.jpg';


// PRODUCT IMAGES 
import product1 from '../../Images/Homeimages/jacket.jpg';
import product2 from '../../Images/Homeimages/polo.jpg';
import product3 from '../../Images/Homeimages/fishing-costume.jpg';
import product4 from '../../Images/Homeimages/cyliung.jpg';
// Import your images
import image1 from '../../Images/Homeimages/1st.jpg';
import image2 from '../../Images/Homeimages/1st.jpg';
import image3 from '../../Images/Homeimages/1st.jpg';
import leftimg from '../../Images/Homeimages/2nd.jpg';

function Home(){

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Use imported images directly
    const getCurrentImage = () => {
        const images = [image1, image2, image3];
        return images[currentImageIndex];
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 2 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleButtonClick = () => {
        alert('Button clicked!');
    };

    const products = [
        {
            id: 1,
            image: product1, // Use imported image
            title: 'Jackets',
            // price: '$99.99'
        },
        {
            id: 2,
            image: product2, // Use imported image
            title: 'Polo',
            // price: '$199.99'
        },
        {
            id: 3,
            image: product3, // Use imported image
            title: 'Fishing',
            // price: '$79.99'
        },
        {
            id: 4,
            image: product4, // Use imported image
            title: 'GYM',
            // price: '$129.99'
        }
    ];



    const [activeIndex, setActiveIndex] = useState(0);

    // Local images array
    const images = [
        carousel1,
        carousel2,
        carousel3,
        carousel4,
        carousel5,
        carousel6,
        carousel7,
        carousel8,


    ];

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Auto rotate continuously
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    // contact form 

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        agree: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    // blog section 

    const blogPosts = [
        {
            id: 1,
            image: blog1,
            category: "Technology",
            title: "The Future of Web Development in 2024",
            date: "December 15, 2024",
            comments: 12,
            excerpt: "Discover the latest trends and technologies shaping the future of web development and how they will impact your business."
        },
        {
            id: 2,
            image: blog2,
            category: "Design",
            title: "Minimalist Design Principles for Modern Websites",
            date: "December 12, 2024",
            comments: 8,
            excerpt: "Learn how minimalist design can improve user experience and create more effective digital products."
        },
        {
            id: 3,
            image: blog3,
            category: "Business",
            title: "How to Grow Your Online Business in 2024",
            date: "December 8, 2024",
            comments: 15,
            excerpt: "Essential strategies and tips to scale your online business and reach new customers in the coming year."
        }
    ];

    return (
        <>



            <Container fluid>
                <div class="row">
                    <div className="col-md-6 col-lg-6 col-xl-6">
                        <div className='herosection'>
                            <h1 className="main-heading">
                                SPORTWEAR MANUFACTURING
                            </h1>
                            <div className='sportcloth'>
                                <div class="row">
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <img src={leftimg} width={300} height={350} alt={`Slide ${currentImageIndex + 1}`}
                                            className="leftsideimg"
                                        />
                                    </div>
                                    <div class="col">
                                        <p className="description">
                                            Our professional sportswear manufacturing solutions blend technology, comfort, and style to deliver
                                            high-quality custom apparel, empowering sports clothing brands, teams, and athletes across the world.
                                        </p>
                                        <p className="description-bottom">
                                            Our products are created for performance, endurance and movement. From sports apparel and team
                                            uniforms to fitness
                                            clothing, Sportswear Manufacturing offers solutions to help brands dominate in the market.
                                        </p>
                                        <button
                                            className="Home-btn"
                                            onClick={handleButtonClick}
                                        >
                                            Get Started Today
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div className="image-carousel">
                            <img
                                src={getCurrentImage()}
                                alt={`Slide ${currentImageIndex + 1}`}
                                className="carousel-image"
                            />
                        </div>
                    </div>
                </div>

                <lurem>
                    <div class="marquee-wrap" aria-label="Scrolling text" role="marquee" tabindex="0">
                        <div class="marquee">
                            Lorem ipsum   Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </div>
                    </div>
                </lurem>





            </Container>



            {/* images crousels sections  */}

            <Container fluid className="  align-items-center justify-content-center bg-light">

                {/* Desktop - 4 Images */}
                <div className="d-none d-xxl-block">
                    <div className="d-flex gap-4">
                        {[0, 1, 2, 3].map((offset) => (
                            <img
                                key={offset}
                                src={images[(activeIndex + offset) % images.length]}
                                alt={`Slide ${offset + 1}`}
                                className="rounded shadow transition-all"
                                style={{
                                    width: '360px',
                                    height: '400px',
                                    objectFit: 'cover',
                                    opacity: offset === 0 ? 1 : 0.7,
                                    transform: offset === 0 ? 'scale(1.05)' : 'scale(0.95)'
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Tablet - 2 Images */}
                <div className="d-none d-md-block d-xxl-none">
                    <div className="d-flex gap-5">
                        {[0, 1].map((offset) => (
                            <img
                                key={offset}
                                src={images[(activeIndex + offset) % images.length]}
                                alt={`Slide ${offset + 1}`}
                                className="rounded shadow transition-all"
                                style={{
                                    width: '280px',
                                    height: '350px',
                                    objectFit: 'cover',
                                    opacity: offset === 0 ? 1 : 0.7,
                                    transform: offset === 0 ? 'scale(1.05)' : 'scale(0.95)'
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile - 1 Image */}
                <div className="d-block d-md-none">
                    <img
                        src={images[activeIndex]}
                        alt={`Slide ${activeIndex + 1}`}
                        className="rounded shadow transition-all"
                        style={{
                            width: '300px',
                            height: '400px',
                            objectFit: 'cover'
                        }}
                    />
                </div>

                <style>
                    {`.transition-all { transition: all 0.5s ease-in-out; }`}
                </style>
            </Container>


            {/* About us section 2 colum  */}


            <div className="container">
                <div className="row align-items-center min-vh-100">

                    {/* Left Column - Content */}
                    <div className="col-12 col-lg-6">
                        <div className="p-4 p-lg-5">
                            <h1 className="display-4 fw-bold text-dark mb-4">
                                High-Quality Men's & Women's Sportswear Manufacturer
                            </h1>
                            <p className="Trust-wear">
                                Trust us as your athletic wear manufacturers to avail complete end-to-end
                                production services, including design, customization, and packaging, under one roof. From premium quality training wear to custom golf apparel, football kits and basketball
                                uniforms for men and women; we manufacture everything you desire.
                            </p>
                            <div className="d-flex gap-3">
                                <button className="Home-btn">
                                    BEGIN NOW
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="col-12 col-lg-6">
                        <div className="p-3">
                            <img
                                src={rightImage}
                                alt="Description"
                                className="img-fluid rounded shadow"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>

                        <div className='counter'>
                            <div className='row'>
                                <div className='collection'>

                                    <div className='col'>
                                        <h2>Collection</h2>

                                        <h6>200+</h6>
                                        <p className="lead-collection">
                                            Explore our vast collection.
                                        </p>
                                    </div>
                                </div>
                                <div className='brands'>
                                    <div className='col'>
                                        <h2>BRANDS</h2>
                                        <h6>100+</h6>
                                        <p className="lead-Brand">
                                            Explore our vast collection.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* icone list  */}


            <Container className="my-5">
                <Row className="g-4">
                    {/* Column 1 - FAST DELIVERY */}
                    <Col lg={3} md={6} className="text-center">
                        <div className="icon-item p-4">
                            <FontAwesomeIcon icon={faShippingFast} className="icon-feature mb-3" size="2x" />
                            <h5 className="secure">FAST DELIVERY</h5>
                        </div>
                    </Col>

                    {/* Column 2 - BEST PRICES */}
                    <Col lg={3} md={6} className="text-center">
                        <div className="icon-item p-4">
                            <FontAwesomeIcon icon={faTags} className="icon-feature mb-3" size="2x" />
                            <h5 className="secure">BEST PRICES</h5>
                        </div>
                    </Col>

                    {/* Column 3 - BUYER PROTECTION */}
                    <Col lg={3} md={6} className="text-center">
                        <div className="icon-item p-4">
                            <FontAwesomeIcon icon={faUserShield} className="icon-feature mb-3" size="2x" />
                            <h5 className="secure">BUYER PROTECTION</h5>
                        </div>
                    </Col>

                    {/* Column 4 - SECURE PAYMENT */}
                    <Col lg={3} md={6} className="text-center">
                        <div className="icon-item p-4">
                            <FontAwesomeIcon icon={faCreditCard} className="icon-feature mb-3" size="2x" />
                            <h5 className="secure">SECURE PAYMENT</h5>

                        </div>
                    </Col>
                </Row>
            </Container>




            {/* backround images section */}

            <Container fluid className="background-overlay-section">
                <Row className="g-0"> {/* g-0 removes gutters for full-width images */}
                    {/* Left Column */}
                    <Col lg={6} className="image-column">
                        <div className="background-image left-image" >
                            <div className="image-overlay">
                                <div className="overlay-content text-center">
                                    <h2 className="overlay-title ">
                                        Private label Activewear<br /> Manufacturer:
                                        Production Solutions
                                    </h2>
                                    <p className="overlay-description ">
                                        As a private label <strong>activewear manufacturer</strong>, we offer
                                        apparel that resonates with modern fitness and sports demands. With the help
                                        of our effective <strong>cut & sew garment production</strong> and private labeling services,
                                        our products feature premium qualities and tags that enhance your brand’s identity.
                                        making us one of the most reliable manufacturers of sportswear in the industry.
                                    </p>
                                    <Button variant="light" size="lg" className="Explore-btn">
                                        EXPLORE CATALOG
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Right Column */}
                    <Col lg={6} className="image-column">
                        <div className="background-image right-image">
                            <div className="image-overlay">
                                <div className="overlay-content text-center">
                                    <h2 className="overlay-title ">Custom Sportswear Production <br />  Company Offers Premium Fabrics</h2>
                                    <p className="overlay-description ">
                                        Being a trusted sportswear supplier in the industry, we focus on
                                        innovations and advancements in clothing through fabric excellence. Our
                                        athletic and fitness clothing is crafted with premium materials like
                                        moisture-wicking polyester, flexible spandex, breathable mesh,
                                        and more to provide you with optimal durability and comfort.
                                    </p>
                                    <Button variant="light" size="lg" className="Explore-btn">
                                        EXPLORE CATALOG
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>



            {/* FEATURED PRODUCTS  */}

            <Container className="my-5">
                {/* Section Title */}
                <div className="text-center mb-5">
                    <h2 className="section-title text-center fw-bold">
                        Customization And Printing for Custom Fitness & Sportswear...
                    </h2>
                    <p className="text-muted text-center">
                        You need a sports and fitness
                        clothing manufacturer that can customize products to help
                        your brand stand out in the market. We can be your trusted choice to
                        bring your designs to life with advanced customization and printing methods.
                        We offer limitless personalization options along with cutting-edge sublimation
                        printing for vibrant full-color graphics, heat printing for detailed logos,
                        screen printing for durable designs, embroidery
                        for textured detailing, and much more.</p>

                    <button
                        className="Home-btn"
                        onClick={handleButtonClick}
                    >
                        Learn More About Customization
                    </button>
                </div>

                {/* Products Grid */}
                <Row className="g-4">
                    {products.map((product) => (
                        <Col lg={3} md={6} key={product.id}>
                            <Card className="product-card h-100 border-0 shadow-sm">
                                <div className="card-image-container">
                                    <Card.Img
                                        variant="top"
                                        src={product.image}
                                        className="product-image"
                                        alt={product.title}
                                    />
                                </div>
                                <Card.Body className="text-center d-flex flex-column">
                                    <Card.Title className="product-title fw-bold mb-2">
                                        {product.title}
                                    </Card.Title>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* View All Button */}
                <div className="text-center mt-5">
                    <Button variant="outline-primary" size="lg" className="Home-btn">
                        VIEW ALL ITEMS
                    </Button>
                </div>

            </Container>


            <Container>





                <Container className="my-5 py-5">
                    <Row className="g-5 align-items-start">
                        {/* Left Column - Contact Form */}
                        <Col lg={6}>
                            <div className="form-section">
                                <h2 className="form-title mb-4">Get In Touch</h2>
                                <p className="form-subtitle text-muted mb-4">
                                    Feel Free to get in touch! We're here to help and answer any questions you might have.
                                </p>

                                <Form onSubmit={handleSubmit}>
                                    {/* Name Field */}
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-semibold">Name *</Form.Label>
                                        <div className="input-with-icon">
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Enter your full name"
                                                required
                                                className="py-2 px-4"
                                            />
                                        </div>
                                    </Form.Group>

                                    {/* Email Field */}
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-semibold">Email Address *</Form.Label>
                                        <div className="input-with-icon">
                                            <Envelope className="input-icon" />
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter your email address"
                                                required
                                                className="py-2 px-4"
                                            />
                                        </div>
                                    </Form.Group>

                                    {/* Message Field */}
                                    <Form.Group className="mb-4">
                                        <Form.Label className="fw-semibold">How can we help you?</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={5}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your inquiry or project..."
                                            className="py-2 px-3"
                                        />
                                    </Form.Group>

                                    {/* Checkbox */}
                                    <Form.Group className="mb-4">
                                        <Form.Check
                                            type="checkbox"
                                            name="agree"
                                            checked={formData.agree}
                                            onChange={handleChange}
                                            label="I agree that my data will be collected and stored according to the privacy policy"
                                            required
                                            className="agree-checkbox"
                                        />
                                    </Form.Group>

                                    {/* Submit Button */}

                                    <Button variant="outline-primary" type="submit" className="Home-btn">
                                        GET IN TOUCH <ArrowRight className="ms-2" />
                                    </Button>
                                </Form>
                            </div>
                        </Col>

                        {/* Right Column - Contact Information */}
                        <Col lg={6}>
                            <div className="contact-info-section">
                                <p className="contact-title ">Custom Sportswear Built for Performance and Designed for Endurance</p>

                                <p className="contact-description "> WellCome </p>
                                <p className="contact-description">
                                    Our efficient performance features enhance compression support, ventilation,
                                    and quick-drying—helping athletes perform their best in every condition.
                                </p>
                                <Button className='Home-btn'>Get Your Production Started</Button>

                                {/* Phone Number */}
                                <Card className="contact-card mb-4 border-0 shadow-sm">
                                    <Card.Body className="p-4">
                                        <div className="d-flex align-items-center">
                                            <div className="contact-icon-wrapper me-4">

                                                <Telephone className="contact-icon" size={24} />
                                            </div>
                                            <div>
                                                <h5 className="fw-bold mb-1">Phone Number</h5>
                                                <p className="text-muted mb-1">Call us directly for immediate assistance</p>
                                                <p className="contact-detail fw-semibold mb-0">+1 (555) 123-4567</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>

                            </div>
                        </Col>
                    </Row>
                </Container>


            </Container>

            {/* block section  */}


            <Container className="my-5 py-5">
                {/* Section Header */}
                <Row className="mb-5">
                    <Col lg={8}>
                        <div className="section-header">
                            <Badge bg="primary" className="section-badge mb-3">Our Posts</Badge>
                            <h2 className="section-title mb-3">Latest Articles</h2>
                            <p className="section-description text-muted">
                                Stay updated with our latest insights, tips, and news about technology,
                                design, and business growth. Discover valuable content to help you succeed.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} className="text-lg-end">
                        <Button variant="outline-primary" size="lg" className="Home-btn">
                            View All Articles <ArrowRight className="ms-2" />
                        </Button>
                    </Col>
                </Row>

                {/* Blog Posts Grid */}
                <Row className="g-4">
                    {blogPosts.map((post) => (
                        <Col lg={4} md={6} key={post.id}>
                            <Card className="blog-card h-100 border-0 shadow-sm">
                                {/* Blog Image */}
                                <div className="blog-image-container">
                                    <Card.Img
                                        variant="top"
                                        src={post.image}
                                        className="blog-image"
                                        alt={post.title}
                                    />
                                    {/* Category Badge */}
                                    <Badge bg="light" text="dark" className="category-badge">
                                        {post.category}
                                    </Badge>
                                </div>

                                <Card.Body className="p-4 d-flex flex-column">
                                    {/* Blog Title */}
                                    <Card.Title className="blog-title mb-3">
                                        {post.title}
                                    </Card.Title>

                                    {/* Blog Excerpt */}
                                    <Card.Text className="blog-excerpt text-muted mb-4 flex-grow-1">
                                        {post.excerpt}
                                    </Card.Text>

                                    {/* Blog Meta - Date and Comments */}
                                    <div className="blog-meta d-flex justify-content-between align-items-center">
                                        <div className="date-info d-flex align-items-center">
                                            <Calendar size={16} className="text-primary me-2" />
                                            <small className="text-muted">{post.date}</small>
                                        </div>
                                        <div className="comments-info d-flex align-items-center">
                                            <Chat size={16} className="text-primary me-2" />
                                            <small className="text-muted">{post.comments} comments</small>
                                        </div>
                                    </div>

                                    {/* Read More Button */}
                                    <Button variant="link" className="read-more-btn p-0 mt-3 text-decoration-none">
                                        Read More <ArrowRight className="ms-1" size={14} />
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>


        </>
    );

};

export default Home;