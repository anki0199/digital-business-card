import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSquareTwitter,
  faSquareInstagram,
  faSquareGithub,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faSquareTwitter,
    url: "https://twitter.com/serene0199",
  },
  {
    icon: faSquareFacebook,
    url: "https://www.facebook.com/",
  },
  {
    icon: faSquareInstagram,
    url: "https://www.instagram.com/",
  },
  {
    icon: faSquareGithub,
    url: "https://github.com/anki0199",
  },
];
function Footer() {
  return (
    <div>
      <footer>
        {socials.map(({ url, icon }) => {
          return (
            <a key={url} href={url}>
              <FontAwesomeIcon
                icon={icon}
                size="2x"
                color="#DCDCDC"
                className="marginLeft"
              ></FontAwesomeIcon>
            </a>
          );
        })}
      </footer>
    </div>
  );
}

export default Footer;
