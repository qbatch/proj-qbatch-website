import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "../../../components/UiComponent/Container";
import Input from "../../../components/UiComponent/Input";
import { tileData, titleData, trackerLabelData } from '../../../constants/index'
import { ShareYourRequirementsWrapper } from "./style";

const ShareYourRequirements = () => {
  const [className, setClassName] = useState(null);
  const [step, setStep] = useState(0);
  const [stepperText, setStepperText] = useState([]);
  const [userDetails, setUserDetails] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);


  const handleItemClick = (index, item) => {
    setClassName(index);
    setStep(step + 1);
    setStepperText((prev) => [...prev, item?.text]);
  };
  const checkvValidate = (inputEmail) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(inputEmail);

    return isValidEmail;
  }
  const handlePreviousStep = () => {
    setStep(step > 0 ? step - 1 : 0);
    setError(null)
    setStepperText((prev) => {
      return prev.slice(0, -1);
    });
    if(step===0){
      setError(true)
    }
    else{
      setError(false)
    }
  };
  useEffect(() => {
    if (stepperText?.length === 10) { stepperApi() }
  }, [stepperText])
  const stepperApi = async () => {
    fetch("https://cms.qbatch.com/api/requirements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          userDetails,
          typeOfHire: stepperText[1],
          levelOffExpertise: stepperText[2],
          requireTheResource: stepperText[3],
          hireTheDeveloper: stepperText[4],
          projectRequirements: stepperText[5],
          wantToHire: stepperText[6],
          experienceManagingDevelopers: stepperText[7],
          WhatsYourBudget: stepperText[8],
          dedicatedSoftwareDevelopers: stepperText[9],
        }
      }),
    }).then((response) => response.json())
    toast.success("Requirements sent successfully...", {
      position: "top-right",
      autoClose: 5000,
    });
      // .then((data) => console.log(data, "data"))
  }
  return (
    <ShareYourRequirementsWrapper>
      <Container>
        <h2>
          Share your requirements and find the right dev match within 48 hours.
        </h2>
        <p className="heading-label-text">
          Answer 9 quick questions to help us better understand your needs and
          offer personalized recommendations. No sign-up required.
        </p>
        {step === 10 ? (
          <div className="congratulations-overlay-wrapper">
            <h3>Congratulations!</h3>
            <p>
              We’ve received your response and will get to you within 24 hours.
            </p>
            <span>Or you can directly reach us at</span>
            <div className="social-links-wrapper">
              <a href="skype:qbatch?chat" target="_blank">
                <img src="/skype-icon.svg" alt="Skype" />
              </a>
              <a href="https://wa.me/17373772428" target="_blank">
                <img src='/whats-app-icon.svg' alt="WhatsApp" />
              </a>
              <a href="https://www.linkedin.com/company/qbatch/" target="_blank">
                <img src="/linkdin-icon.svg" alt="Skype" />
              </a>
              <a href="https://calendly.com/qbatch/meeting" target="_blank">
                <img src="/calendly-icon.svg" alt="Skype" />
              </a>
            </div>
          </div>
        ) : (
          <div className="stepper-wrapper">
            <div className="stepper-tracker">
              {trackerLabelData.map((item, index) => (
                <div
                  key={index}
                  className={`stepper-tracker-item ${index === step ? "active" : "non-active"
                    }`}
                >
                  <div
                    className={`right-side-content-wrapper ${index === step ? "active" : "non-active"
                      }`}
                  >
                    {step <= index ? (
                      <span>{item.label}</span>
                    ) : (
                      <img src="/check-icon.svg" alt="CheckIcon" />
                    )}
                    <p></p>
                  </div>
                  <div className="title-wrapper">
                    <p>{item.text}</p>
                    <p className="selected-text">{stepperText[index]}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="stepper-content-wrapper">
              {titleData?.map((item, index) =>
                step === index ? <h3 key={index}>{item.text}</h3> : null
              )}
              {step === 8 ? (
                <p className="label-text-wrap">
                  💡 Remote resources are more driven, more productive, and work
                  longer hours than in-house employees. (Source: Harvard
                  Business Review)
                </p>
              ) : null}
              {step === 0 ?
                (
                  <div className="step-form-wrapper">
                    <Input
                      onChange={(e) => {
                        const userName = e.target.value;
                        setUserDetails({ ...userDetails, name: userName?.replace(/[^a-zA-Z]/g, '') });
                      }}
                      value={userDetails.name}
                      placeholder="Full Name"
                      type="text"
                      error={error && !userDetails?.name ? 'Enter your name' : null}
                    />
                    <Input value={userDetails.companyName} error={error && !userDetails?.companyName ? 'Enter your company name' : null} onChange={(e) => setUserDetails({ ...userDetails, companyName: e.target.value })} placeholder="Company Name" type="text" />
                    <Input value={userDetails.email} error={error && !userDetails?.email ? 'Enter your email' : error && !checkvValidate(userDetails?.email) ? 'Please Enter valid email': null} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} placeholder="Email Address" type="email" />
                    <Input value={userDetails.designation} onChange={(e) => setUserDetails({ ...userDetails, designation: e.target.value })} placeholder="Designation" type="text" />
                    <textarea value={userDetails.tellUsAboutYourProject} onChange={(e) => setUserDetails({ ...userDetails, tellUsAboutYourProject: e.target.value })} placeholder="Tell us about your project" type="text" row="3" />

                  </div>
                )
                : (<div className="bars-wrapper">
                  {tileData[step - 1]?.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleItemClick(index, item)}
                      className="bar-item"
                    >
                      <img src="/bar-icon.svg" alt="BarIcon" />
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>)}
              <div className="arrow-wrapper">
                {stepperText.length >= 1 ? (
                  <img
                    onClick={handlePreviousStep}
                    src='/arrow-blue-left.svg'
                    alt="ArrowLeftBlue"
                  />
                ) : (
                  <img
                    src="/arrow-left.svg"
                    onClick={handlePreviousStep}
                    alt="ArrowLeft"
                  />
                )}

                {step === 0 ? <img src='/arrow-right.svg' onClick={() => {
                  const {
                    name,
                    email,
                    companyName,
                  } = userDetails || {}
                  if (name && checkvValidate(email) && email && companyName) {
                    setStepperText([userDetails?.name]);
                    setStep(step + 1);
                  } else {
                    setError(true)
                  }
                }} alt="ArrowRight" /> : <img src='/arrow-right.svg' alt="ArrowRight" />}
              </div>
            </div>
          </div>
        )}
      </Container>
      <ToastContainer />
    </ShareYourRequirementsWrapper>
  );
};

export default ShareYourRequirements;
