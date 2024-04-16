import React, { useState, useEffect } from "react";
import Container from "../../components/UiComponent/Container";
import BarIcon from "../../../static/bar-icon.svg";
import ArrowLeft from "../../../static/arrow-left.svg";
import ArrowRight from "../../../static/arrow-right.svg";
import ArrowLeftBlue from "../../../static/arrow-blue-left.svg";
import CheckIcon from "../../../static/check-icon.svg";
import Skype from "../../../static/skype-icon.svg";
import whatsApp from "../../../static/whats-app-icon.svg";
import Linkdin from "../../../static/linkdin-icon.svg";
import Calendly from "../../../static/calendly-icon.svg";
import { ShareYourRequirementsWrapper } from "./style";
import Input from "../../components/UiComponent/Input";

const ShareYourRequirements = () => {
  const [className, setClassName] = useState(null);
  const [step, setStep] = useState(0);
  const [stepperText, setStepperText] = useState([]);
  const [userDetails, setUserDetails] = useState('');
  const [error, setError] = useState(false);
  const data = [
    [
      {
        text: "Full-time",
      },
      {
        text: "Part-time",
      },
      {
        text: "On hourly basis",
      },
      {
        text: "Not sure",
      },
    ],
    [
      {
        text: "Junior developer",
      },
      {
        text: "Senior developer",
      },
      {
        text: "Software architect or lead developer",
      },
      {
        text: "CTO or VP of engineering",
      },
    ],
    [
      {
        text: "Less than a week",
      },
      {
        text: "1-4 weeks",
      },
      {
        text: "4 weeks or longer",
      },
      {
        text: "Not sure",
      },
    ],
    [
      {
        text: "Within 48 hrs",
      },
      {
        text: "1-2 weeks",
      },
      {
        text: "1 month",
      },
      {
        text: "1 quarter",
      },
    ],
    [
      {
        text: "I have a rough idea of what I want to build.",
      },
      {
        text: "I have a clear idea of what I want, but I’ve not penned down any specific requirements.",
      },
      {
        text: "I have clearly written requirements or wireframes.",
      },
    ],
    [
      {
        text: "1 dev",
      },
      {
        text: "Small dedicated team",
      },
      {
        text: "Large dedicated team",
      },
      {
        text: "Not sure",
      },
    ],
    [
      {
        text: "I don’t have any experience.",
      },
      {
        text: "I have limited experience.",
      },
      {
        text: "I have good experience in managing teams using Agile and other development methodologies.",
      },
      {
        text: "I’m a VP/ Executive Director/ CTO/ Product Manager. ",
      },
    ],
    [
      {
        text: "$50-100/ hour",
      },
      {
        text: "$100-500/ hours",
      },
      {
        text: "Greater than $500",
      },
      {
        text: "I don’t intend to share.",
      },
    ],
    [
      {
        text: "YES, get me my devs!",
      },
      {
        text: "Nope",
      },
      {
        text: "Not sure. ",
      },
    ],
  ];
  const titleData = [
    {
      text: "Let’s begin the survey ",
    },
    {
      text: "What type of hire are you looking for?",
    },
    {
      text: "What level of expertise do you require?",
    },
    {
      text: "For how long do you require the resource?",
    },
    {
      text: "How urgent do you need to hire the developer?",
    },
    {
      text: "Do you know your product/ project requirements?",
    },
    {
      text: "How many developers do you want to hire?",
    },
    {
      text: "Do you have any experience managing developers?",
    },
    {
      text: "What’s your budget?",
    },
    {
      text: "Are you open to hiring dedicated software developers?",
    },
  ];
  const trackerLabelData = [
    {
      text: "Let’s begin the survey ",
      label: "",
    },
    {
      text: "What type of hire are you looking for?",
      label: "",
    },
    {
      text: "What level of expertise do you require?",
      label: "",
    },
    {
      text: "For how long do you require the resource?",
      label: "",
    },
    {
      text: "How urgent do you need to hire the developer?",
      label: "",
    },
    {
      text: "Do you know your product/ project requirements?",
      label: "",
    },
    {
      text: "How many developers do you want to hire?",
      label: "",
    },
    {
      text: "Do you have any experience managing developers?",
      label: "",
    },
    {
      text: "What’s your budget?",
      label: "",
    },
    {
      text: "Are you open to hiring dedicated software developers?",
      label: "",
    },
  ];

  const handleItemClick = (index, item) => {
    setClassName(index);
    setStep(step + 1);
    setStepperText((prev) => [...prev, item?.text]);
  };
  const checkValidDate = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(inputEmail);

    return isValidEmail;
  }
  const handlePreviousStep = () => {
    setStep(step > 0 ? step - 1 : 0);
    setStepperText((prev) => {
      return prev.slice(0, -1);
    });
  };
  useEffect(() => {
    if (stepperText?.length === 10) { temp() }
  }, [stepperText])
  const temp = async () => {
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
                <img src={Skype} alt="Skype" />
              </a>
              <a href="https://wa.me/17373772428" target="_blank">
                <img src={whatsApp} alt="WhatsApp" />
              </a>
              <a href="https://www.linkedin.com/company/qbatch/" target="_blank">
                <img src={Linkdin} alt="Skype" />
              </a>
              <a href="https://calendly.com/qbatch/meeting" target="_blank">
                <img src={Calendly} alt="Skype" />
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
                      <img src={CheckIcon} alt="CheckIcon" />
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
                        setUserDetails({ ...userDetails, name: userName });
                      }}
                      placeholder="Full Name"
                      type="text"
                      error={error && !userDetails?.name ? 'enter your name' : null}
                    />
                    <Input error={error && !userDetails?.companyName ? 'enter your company name' : null} onChange={(e) => setUserDetails({ ...userDetails, companyName: e.target.value })} placeholder="Company Name" type="text" />
                    <Input error={error && !userDetails?.email ? 'enter your email' : error && !checkValidDate(userDetails?.email) ? 'Please Enter valid email': null} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} placeholder="Email Address" type="email" />
                    <Input onChange={(e) => setUserDetails({ ...userDetails, designation: e.target.value })} placeholder="Designation" type="text" />
                    <textarea onChange={(e) => setUserDetails({ ...userDetails, tellUsAboutYourProject: e.target.value })} placeholder="Tell us about your project" type="text" row="3" />

                  </div>
                )
                : (<div className="bars-wrapper">
                  {data[step - 1]?.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleItemClick(index, item)}
                      className="bar-item"
                    >
                      <img src={BarIcon} alt="BarIcon" />
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>)}
              <div className="arrow-wrapper">
                {stepperText.length >= 1 ? (
                  <img
                    onClick={handlePreviousStep}
                    src={ArrowLeftBlue}
                    alt="ArrowLeftBlue"
                  />
                ) : (
                  <img
                    src={ArrowLeft}
                    onClick={handlePreviousStep}
                    alt="ArrowLeft"
                  />
                )}

                {step === 0 ? <img src={ArrowRight} onClick={() => {
                  const {
                    name,
                    email,
                    companyName,
                    designation,
                    tellUsAboutYourProject
                  } = userDetails || {}
                  if (name && email && companyName && designation && tellUsAboutYourProject) {
                    setStepperText([userDetails?.name]);
                    setStep(step + 1);
                  } else {
                    setError(true)
                  }
                }} alt="ArrowRight" /> : <img src={ArrowRight} alt="ArrowRight" />}
              </div>
            </div>
          </div>
        )}
      </Container>
    </ShareYourRequirementsWrapper>
  );
};

export default ShareYourRequirements;
