import React, { useCallback, useRef, useState, lazy, Suspense } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from "gatsby";
import { toast } from "react-toastify";
import PhoneInput from 'react-phone-input-2'
import emailjs from '@emailjs/browser';
import 'react-phone-input-2/lib/style.css'
import { PhoneNumberUtil } from 'google-libphonenumber';

const ReCAPTCHA = lazy(()=> import('react-google-recaptcha'));

import Input from "../../UiComponent/Input";
import Collapse from "../../UiComponent/Collapse";
import RadioButton from "../../UiComponent/RadioButton";
import CheckBox from "../../UiComponent/CheckBox";
import Button from "../../UiComponent/Button";

const phoneUtil = PhoneNumberUtil.getInstance();

const ContactForm = () => {
  const recaptchaRef = useRef(null);
  const [validated, setValidated] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneValid, setPhoneValid] = useState(true);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [recaptchaCompleted, setRecaptchaCompleted] = useState(false);

  const [serviceSelect, setServiceSelect] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    collaboration: "",
    services: [],
    description: "",
    terms: false,
    promotion: false,
  });

  const toggleCheckbox = useCallback((name) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: !prevFormData[name],
    }));
  }, []);

  const handlePhoneChange = (phoneNumber) => {
    setPhone(phoneNumber);
    setFormData({
      ...formData,
      number: phoneNumber
    });
    try {
      const parsedPhoneNumber = phoneUtil.parse("+" + phoneNumber);
      const isValid = phoneUtil.isValidNumber(parsedPhoneNumber);
      setPhoneValid(isValid);
    } catch (error) {
      setPhoneValid(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    let isValid = true;
  
    if (name === "name") {
      const nameRegex = /^[a-zA-Z\s]*$/;
      isValid = nameRegex.test(value);
    }
    
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (emailRegex.test(formData.email)) {
      setErrorMsg("");
    }

    if (isValid || type === "checkbox") {
      if (type === "checkbox") {
        if (checked) {
          setFormData({ ...formData, services: [...formData.services, value] });
        } else {
          setFormData({
            ...formData,
            services: formData.services.filter((service) => service !== value),
          });
        }
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    }
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const validForm = e.currentTarget;
    if (validForm.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    if (phone.length === 0) {
      setPhoneValid(false);
    }

    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    if (!phoneValid) {
      return;
    }

    if (!recaptchaCompleted) {
      toast.error("Please complete the reCAPTCHA.", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    setErrorMsg("");

    const templateParams = {
      from_name: formData.name,
      from_contact: formData.number,
      from_email: formData.email,
      collaboration: formData.collaboration,
      services: formData.services,
      to_name: "Qbatch",
      message: formData.description
    }

    if (formData.terms === true) {
      try {
        const response = await fetch("https://cms.qbatch.com/api/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: formData }),
        });
        if (response.ok) {
          toast.success("Message sent successfully...", {
            position: "top-right",
            autoClose: 5000,
          });
          emailjs
          .send(
            process.env.GATSBY_EMAIL_SERVICE_ID,
            process.env.GATSBY_EMAIL_TEMPLATE_ID,
            templateParams,
            process.env.GATSBY_EMAIL_PUBLIC_KEY
          )
          .then(
            (result) => {
              console.log('Message sent!', result);
            },
            (error) => {
              console.log('Something went wrong, please try again later', error);
            }
          );
          setValidated(false);
          setFormData({
            name: "",
            number: "",
            email: "",
            collaboration: "",
            services: [],
            description: "",
            terms: false,
            promotion: false,
          });
          setPhone("+1")
          if (recaptchaRef.current) {
            recaptchaRef.current.reset();
          }
          setRecaptchaCompleted(false);
        } else {
          toast.error("Something went wrong", {
            position: "top-right",
            autoClose: 5000,
          });
        }
      } catch (error) {
        console.error("Error", error);
      }
    }
  }, [formData, phoneValid, recaptchaCompleted]);  

  return (
    <Form className="project-form" noValidate validated={validated} onSubmit={handleSubmit}>
      <Input
        placeholder="Full Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleInputChange}
        required={true}
      />
      <PhoneInput
        country={"us"}
        enableSearch={true}
        value={phone}
        placeholder="Contact Number"
        onChange={handlePhoneChange}
        inputProps={{
          required: true,
        }}
        isValid={phoneValid}
      />
      {!phoneValid && (
        <span className="error-msg">Please enter a valid phone number.</span>
      )}
      <Input
        placeholder="Email Address"
        value={formData.email}
        name="email"
        type="email"
        onChange={handleInputChange}
        required={true}
        pattern="/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/"
        isInvalid={errorMsg !== ""}
      />
      {errorMsg && <span className="error-msg">{errorMsg}</span>}
      <Collapse
        title="Select Collaboration Model"
        onClick={() => setOpen(!open)}
        open={open}
        content={
          <div className={!open && modal ? 'add-height' : 'zero-height'}>
            <RadioButton type="radio" label={modal} value={modal} checked={modal} name="collaboration" />
          </div>
        }
      >
        <div className="seperation d-flex justify-content-between"></div>
        {['Time and Material', 'Fixed Scope Product Development', 'Hire Dedicated Development Team'].map(
          (value) => {
            return (
              <div className="collapse-radio">
                <RadioButton
                  key={value}
                  type="radio"
                  label={value}
                  value={value}
                  checked={formData.collaboration === value}
                  name="collaboration"
                  onChange={handleInputChange}
                />
              </div>
            )
          }
        )}
      </Collapse>

      <Collapse
        content={
          <div
            className={!serviceOpen && serviceSelect.length > 0 && serviceSelect ? 'add-height' : 'zero-height'}
          >
            <Row>
              {serviceSelect.slice(0.6).map((value, key) => {
                return (
                  <Col md={6}>
                    <CheckBox
                      key={key}
                      label={value}
                      checked={serviceSelect.includes(value)}
                      value={value}
                      name="collaboration"
                      onChange={(e) =>
                        setServiceSelect(serviceSelect.filter((item) => item !== e.target.value))
                      }
                    />
                  </Col>
                )
              })}
            </Row>
          </div>
        }
        title="Select Service(s)"
        onClick={() => setServiceOpen(!serviceOpen)}
        open={serviceOpen}
      >
        <div className="seperation d-flex justify-content-between"></div>
        <Row>
          {[
            'Design & Development',
            'MVP Development',
            'Mobile App Development',
            'CTO as a Service',
            'Enterprise Software Development',
            'DevOps & Cloud',
            'Mobile Development',
            'Web App Development',
            'E-Commerce Automation Services',
            'Other',
          ]
            .slice(0.6)
            .map((value) => {
              return (
                <Col md={6}>
                  <CheckBox
                    key={value}
                    label={value}
                    checked={formData.services?.includes(value)}
                    value={value}
                    name="services"
                    onChange={handleInputChange}
                  />
                </Col>
              )
            })}
        </Row>
      </Collapse>
      <Input
        as="textarea"
        base="21px"
        name="description"
        height="53px"
        placeholder="Tell us about your project"
        onChange={handleInputChange}
        value={formData.description}
      />
      <div>
        <CheckBox
          margin="-4px"
          height="12px"
          width="12px"
          fontSize="12px"
          base="5px"
          onChange={() => toggleCheckbox('terms')}
          required={true}
          checked={formData.terms}
          label={
            <>
              I understand and agree to the
              <Link className="ms-1 terms-link" to="/terms-and-conditions">
                Terms & Conditions
              </Link>
            </>
          }
          name="terms"
        />
        <CheckBox
          margin="-4px"
          height="12px"
          width="12px"
          fontSize="12px"
          label="I agree to receive marketing and promotion related emails."
          name="promotion"
          base="19px"
          checked={formData.promotion}
          onChange={() => toggleCheckbox('promotion')}
        />
        <div className="d-flex justify-content-between align-items-center footer-wrapper flex-wrap gap-1 mt-3">
            <Suspense fallback={<div>Loading reCAPTCHA...</div>}>
              <ReCAPTCHA
                action="homepage"
                sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
                onChange={() => setRecaptchaCompleted(true)}
                ref={recaptchaRef}
              />
            </Suspense>
          <Button text="Submit" btnType="submit" className="pt-md-0 pt-3" />
        </div>
      </div>
    </Form>
  )
}

export default ContactForm;
