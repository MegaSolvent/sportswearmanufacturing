



import React, { useState } from 'react';
import { Container, Row, Col,Dropdown } from 'react-bootstrap';
import './style.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaComments } from 'react-icons/fa';
import Logo from "../../Images/logo.jpg";

 function Header(){



  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
    
     
    
    
    <header className="header">


 <div className='top=header' style={{ backgroundColor: '#5458f7', color: 'white', padding: '8px 0', fontSize: '15px' }}>
        <Container>
          <Row className='align-items-center'>
            {/* Left Side: Email, Phone, Chat Icon */}
            <Col className='d-flex align-items-center'>
              <span className='me-3'>📧 info@yourcompany.com</span>
              <span className='me-3'>📞 +92 300 000 0000</span>
              <span className='d-flex align-items-center'><FaComments /> Chat</span>
            </Col>


            {/* Right Side: Social Icons */}
            <Col className='d-flex justify-content-end gap-3'>
              <a href='#' style={{ color: 'white' }}><FaFacebookF /></a>
              <a href='#' style={{ color: 'white' }}><FaTwitter /></a>
              <a href='#' style={{ color: 'white' }}><FaInstagram /></a>
              <a href='#' style={{ color: 'white' }}><FaLinkedinIn /></a>
            </Col>
          </Row>
        </Container>
      </div>



      <div className="container-fluid">
        <div className="row">
          <div className='col-2'>
            <div className="logo">
              <a href="/" className="logo-link">
                <img src={Logo} width={250} height={100} alt="" />
              </a>
            </div>


          </div>
          <div className='col-8'>
            {/* Navigation Menu */}
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={closeMenu}>
                    Home
                  </a>
                </li>
                 
<Dropdown>
        <Dropdown.Toggle className='dropdownmenu'>
                    Services
                  
        </Dropdown.Toggle>
      

        <Dropdown.Menu>

          <Dropdown.Item href="#tennisclothingmanufacturer">Tennis Clothing Manufacturer</Dropdown.Item>
          <Dropdown.Divider />

          <Dropdown.Item href="#golfapparelmanufacturer">Golf Apparel Manufacturer</Dropdown.Item>
          <Dropdown.Divider />
       
          <Dropdown.Item href="#sweatsuitmanufacturer">Sweat Suit Manufacturer</Dropdown.Item>
          <Dropdown.Divider />

          <Dropdown.Item href="#gymclothingmanufacturer">Gym Clothing Manufacturer</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#Cyclingclothingmanufacturers">Cycling Clothing Manufacturers</Dropdown.Item>
          <Dropdown.Divider />

          <Dropdown.Item href="#Yogawearmanufacturer">Yoga Wear Manufacturer</Dropdown.Item>
          <Dropdown.Divider />

        </Dropdown.Menu>

      </Dropdown>



                
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={closeMenu}>
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={closeMenu}>
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={closeMenu}>
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={closeMenu}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='col-2'>
            {/* CTA Button */}
            <div className="header-actions">
              <button className="Eqval-btn">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

          </div>

        </div>
      </div>






    </header>
    </>
  );
};
export default Header;
