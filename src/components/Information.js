import React from "react";
import profilePic from "../assets/profile2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  }
];
function Information() {
  return (
    <div>
      <img src={profilePic} alt="profile pic"  />
      <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <h4>laurasmith.website</h4>
      <div className="btn-container">
        <button className="email">
        <FontAwesomeIcon icon={socials[0].icon} size="2x" transform="shrink-6 left-4"></FontAwesomeIcon>
          Email
        </button>
        <button className="linkedin">
          <FontAwesomeIcon icon={socials[1].icon} size="2x" transform="shrink-6 left-4"></FontAwesomeIcon>
          Linkedin
        </button>
      </div>
    </div>
  );
}

export default Information;
