import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
        {skill:"Golang",ratingPercentage:75},
        {skill:"Core-Java",ratingPercentage:80},
        {skill:"Python",ratingPercentage:80},
        {skill:"ReactJS",ratingPercentage:20},
        {skill:"HTML", ratingPercentage:80},
        {skill:"Linux", ratingPercentage:80},
        {skill:"Web-Development",ratingPercentage:75},
        {skill:"Backend-Development",ratingPercentage:80},
        {skill:"OOPS",ratingPercentage:80},
        {skill:"SQL",ratingPercentage:80},
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration : {fromDate:"2021",toDate:"2022"},
      description:
      "A personal portfolio to display all my professional details & project at one place.",
      subHeading:"Technologies Used:React JS,Bootstrap"
  },
  {
      title: "Booking Website",
      duration : {fromDate:"2021",toDate:"2022"},
      description:
      "Hotel Website where you can Book-rooms for specific date with admin functionality available.",
      subHeading:"Fullstack Technology:Golang,PostgreSQL,Bootstrap,chi-router"
  },
  {
      title: "Flask API",
      duration : {fromDate:"2021",toDate:"2022"},
      description:
      "REST API created in Flask following using CRUD methodology with authorization and security functionality.",
      subHeading:"Backend Technology:Flask,JSON,JWT Authentication"
  },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
     <ResumeHeading
            heading={"Bipin Tripathi Kumaon Institute of Technology,Uttarakhand"}
            subHeading={"Bachelors in Technology (B.Tech)"}
            fromDate={"2017"}
            toDate={"2021"}
            />
            <ResumeHeading
            heading={"Delhi Public School,Dehradun"}
            subHeading={"Higher secondary education"}
            fromDate={"2014"}
            toDate={"2016"}
            />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
      <ResumeHeading
            heading={"Tata Consultancy Service(TCS)"}
            subHeading={"System Engineer"}
            fromDate={"2021"}
            toDate={"present"}
            />
            <div className='experience-description'>
                <span className='resume-description-text'>
                    Currently working as a Backend Developer in a 5G Research & Development FullStack Project
                </span>
            </div>

            <div className='experience-description'>
                <span className='resume-description-text'>
               - Working at RAN side developing the feature related to various GNB making API with knoweledge of 3GPP documentation
                 Implemented class1 procedure messages RAN to AMF with fully dynamic and optimized datastructure
                </span>
                <br/>
                <span className='resume-description-text'>
                - Developed logging functionality (using gin.context) with better error handling to send API via function from RAN to CORE and providing output response from CORE at Frontend of Tool.{" "}
                </span>
                <br/>
                <span className='resume-description-text'>
                - Implemented HTTP2 feature at the middleware of the RAN to provide secure transfer of request and also worked on estaballishing SCTP connection b/w different servers
                 </span>
                <br/>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Reading Novels"
        description="Apart from being a tech enthusiast and a code writer, i also love to read novels and self-improvement books."
      />
      <ResumeHeading
        heading="Watching WebSeries & Anime"
        description="In my leisure time I love to watch Anime and webseries "
      />
      <ResumeHeading
        heading="Cooking"
        description="I like to cook and experiment with different variety of foods that soothe my taste and I find it a relaxing and fun-loving activity "
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
