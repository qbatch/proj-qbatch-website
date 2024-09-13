import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from 'gatsby';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button";
import { discoverQbatchMenu, footerServicesItems, industrieshMenu, footerContactData, footerBottomMenu, footerSocialLinks } from "../../../constants";

import FooterWrapper from "./style";

const Index = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({ email: '' });
  const [subscribedEmails, setSubscribedEmails] = useState([]);

  const fetchSubscribedEmails = async () => {
    try {
      const response = await axios.get("https://cms.qbatch.com/api/subscribeds");
      setSubscribedEmails(response.data);
    } catch (error) {
      console.error("Error fetching subscribed emails:", error);
    }
  };

  useEffect(() => {
    fetchSubscribedEmails();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (formData.email === '') {
      setErrorMsg('Please Enter Email Address');
      return;
    }

    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    const emailExists = subscribedEmails?.data?.some(item => item.attributes.email === formData.email);
    if (emailExists) {
      setErrorMsg("Email is already subscribed.");
      return;
    }

    try {
      const response = await fetch("https://cms.qbatch.com/api/subscribeds", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });
      if (response.ok) {
        toast.success("Subscribed Successfully...", {
          position: "top-right",
          autoClose: 5000,
        });
        setFormData({
          email: '',
        });
        setErrorMsg('');
        fetchSubscribedEmails();
      } else {
        toast.error("Something went wrong", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <FooterWrapper>
      {/* <div className="newsletter-section"> */}
        {/* <Container> */}
          {/* <Row className="align-items-center"> */}
            {/* <Col lg={6}>
              <div className="stories-inbox">
                <img src='/inbox-icon.svg' alt="inbox" loading="lazy" width={186} height={120} />
              </div>
            </Col> */}
           
          {/* </Row> */}
        {/* </Container> */}
      {/* </div> */}
      <div className="footer-section">
        <Container>
          <Row>
            <Col lg={2} xs={12}>
              <div className="footer-menu">
                <h4 className="text-h5">Discover Qbatch</h4>
                <ul>
                  {discoverQbatchMenu.map((menu, ind) => (
                    <li key={ind}>
                      <Link to={menu.to}>{menu.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={3} xs={12} className="d-none d-sm-block">
              <div className="footer-menu">
                <h4 className="text-h5">Services</h4>
                <ul>
                  {footerServicesItems.map((menu, ind) => (
                    <li key={ind}>
                      <Link to={menu.to}>{menu.menu}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={3} xs={12} className="d-none d-sm-block">
              <div className="footer-menu">
                <h4 className="text-h5">Industries</h4>
                <ul>
                  {industrieshMenu.map((menu, ind) => (
                    <li key={ind}>
                      {menu.name === 'EdTech' ?
                       <Link to={menu.to}>{menu.name}</Link>
                       :
                       menu.name
                      }
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={4} xs={12}>
              <div className="footer-contact">
                  <h4 className="text-h5">Contact Us</h4>
                {footerContactData.map((data, ind) => (
                  <div key={ind}>
                    {data.icon && <img src={data.icon} alt="contact" width="16px" height="16px" />}
                    {data.link ? (
                      <a href={data.link} target="_blank" rel="noopener noreferrer" className={!data.icon && 'address'}>
                        {data.title} {data.flag && <img src={data.flag} alt="flag" className="address-flag" loading="lazy" />}
                      </a>
                    ) : (
                      <span className={!data.icon && 'address'}>
                        {data.title} {data.flag && <img src={data.flag} alt="flag" className="address-flag" loading="lazy" />}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <Row>
              <Col lg={12}>
              <div className="position-relative footer-last-sc">
                <h3>Get top stories delivered to your inbox </h3>
                <div className="footer-email">
                  <div className="email-input">
                    <img src="/user-email-icon.svg" alt="email" loading="lazy" width={20} height={20} />
                    <input type="email" value={formData.email} name="email" placeholder="Email Address" onChange={handleInputChange} />
                  </div>
                  <Button text='Subscribe' className="secondary-btn" onClick={handleSubmit} />
                </div>
                <span className="error-msg">{errorMsg}</span>
              </div>
            </Col>
            </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="social-section">
        <Container>
          <div className="d-flex align-items-center flex-wrap manage-contant">
            <div className="footer-menu footer-menu-bottom">
              <ul>
                {footerBottomMenu.map((menu, ind) => (
                  <li key={ind} className="mb-0">
                    <Link to={menu.to}> {menu.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reserved-rights">
              <span>© Copyright 2024 Qbatch</span>
            </div>
            <div className="d-flex align-items-center gap-3 flex-wrap follow-section">
              {footerSocialLinks?.map((item, ind) => (
                <a href={item.to} target="_blank" rel="noreferrer">
                  <div key={ind}>
                    <img src={item.img} alt={item.img} width="24px" height="24px" loading="lazy" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <ToastContainer />
    </FooterWrapper>
  )
};

export default Index;
