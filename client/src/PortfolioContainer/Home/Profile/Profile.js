import React from "react";
import Typical from "react-typical";
import "./Profile.css";


export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>


                    <a href='https://www.facebook.com/dungeon.higa/'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='https://www.instagram.com/shobhit__dimri/?next=%2F'>
                        <i className='fa fa-twitter-square'></i>
                    </a>
                    <a href='https://www.instagram.com/shobhit__dimri/?next=%2F'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/shobhit-dimri/'>
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    </div>
                </div>
                <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Shobhit</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    1000,
                    "Enthusiastic Dev 😎",
                    2000,
                    "Full-stack Dev 💻",
                    2000,
                    "Java/Golang Dev",
                    2000,
                    "API Developer 🔴",
                    2000,
                    "React/React Native 🌐",
                    2000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>
                <div className='profile-option'>
                        <button className='btn primary-btn'>
                                {" "}
                                Hire me{" "}
                        </button>
                        <a href='Shobhit.pdf' download="shobhit_resume.pdf">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>
    </div>
  )
}