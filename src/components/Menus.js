import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const createPersonLinks = (name, githubLink, linkedinLink) => [
  {
    name: "Github ",
    link: githubLink,
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    name: "Linkedin ",
    link: linkedinLink,
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
];

export const OUSSAMA = createPersonLinks(
  "oussama",
  "https://github.com/0m3ga13",
  "https://www.linkedin.com/in/oussama13/",
);
export const ZOHIR = createPersonLinks(
  "zohir",
  "https://github.com/Zohir-kk",
  "https://www.linkedin.com/in/zohir-kioukiou-130741229/",
);
export const LAID = createPersonLinks(
  "laid",
  "https://github.com/LaidBengli",
  "https://www.linkedin.com/in/laid-benglia-452013199/",
);
export const HADIA = createPersonLinks(
  "hadia",
  "https://github.com/liliumorion",
  "https://www.linkedin.com/in/hadia-djadallah/",
);
export const SARAH = createPersonLinks(
  "sarah",
  "https://github.com/SaraBegache",
  "https://www.linkedin.com/in/sara-begache/",
);
