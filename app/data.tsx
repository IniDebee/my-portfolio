"use client";
//  icons
import {
  FiYoutube,
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiTwitter,
  FiCode,
  FiFigma,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "../public/images/brands/freelancer.png";
import UpworkBrandIcon from "../public/images/brands/upwork.png";
import FiverBrandIcon from "../public/images/brands/fiverr.png";
import BehanceBrandIcon from "../public/images/brands/behance.png";
import DribbbleBrandIcon from "../public/images/brands/dribbble.png";

// projects images
import Project1 from "../public/images/projects/blog-app.jpg";
import Project2 from "../public/images/projects/dht-website.jpg";
import Project3 from "../public/images/projects/titiekundayo.jpg";
import Project4 from "../public/images/projects/calculator.jpg";
import Project5 from "../public/images/projects/currency-converter.jpg";
import Project6 from "../public/images/projects/weather-app.jpg";
import Project7 from "../public/images/projects/qr-code-generator.jpg";
import Project8 from "../public/images/projects/dht-brandstyleguide.jpg";
import Project9 from "../public/images/projects/carousels.jpg";
// import Project10 from "../public/images/projects/p6.webp";

// skills images
import SkillImg1 from "../public/images/skills/html5.png";
import SkillImg2 from "../public/images/skills/css3.png";
import SkillImg3 from "../public/images/skills/js.png";
import SkillImg4 from "../public/images/skills/reactjs.png";
import SkillImg5 from "../public/images/skills/nextjs.png";
import SkillImg6 from "../public/images/skills/nodejs.png";
import SkillImg7 from "../public/images/skills/git.png";
import SkillImg8 from "../public/images/skills/figma.png";
// import SkillImg9 from "../public/images/skills/figma.png";
// import SkillImg10 from "../public/images/skills/figma.png";
// import SkillImg11 from "../public/images/skills/figma.png";
// import SkillImg12 from "../public/images/skills/figma.png";

// testimonial images
import TestiImage1 from "../public/images/testimonials/testimonial-1.webp";
import TestiImage2 from "../public/images/testimonials/testimonial-2.webp";
import TestiImage3 from "../public/images/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "testimonials",
    href: "testimonials",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/mwlite/in/inioluwa-titilayo-17a373160",
  },
  {
    icon: <FiTwitter />,
    href: "https://twitter.com/Ini_Debee?t=PTAjnAc-DU0s6LnHHSOhXA&s=09",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/IniDebee",
  },
  {
    icon: <FiDribbble />,
    href: "https://dribbble.com/ini_debee",
  },
];
// companies
export const brands = [
  {
    img: UpworkBrandIcon,
    href: "https://www.upwork.com/freelancers/~01714667c9bd7c0d6b",
  },
  {
    img: BehanceBrandIcon,
    href: "https://www.behance.net/inioluwadebbie2",
  },
  {
    img: DribbbleBrandIcon,
    href: "https://dribbble.com/ini_debee",
  },
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Full Stack Blog App",
    category: "Web Development",
    href: "https://inidebee-fullstackblogapp.vercel.app/",
  },
  {
    id: "2",
    image: Project2,
    name: "DHT Website",
    category: "Web Development",
    href: "",
  },
  {
    id: "3",
    image: Project3,
    name: "Titi Ekundayo Website",
    category: "Web Development",
    href: "https://titiekundayo-qzgezaf61-abegwhosendme-gmailcom.vercel.app/books",
  },
  {
    id: "4",
    image: Project4,
    name: "Simple Calculator",
    category: "Web Development",
    href: "https://inidebee-calculator.netlify.app/",
  },
  {
    id: "5",
    image: Project5,
    name: "Currency Converter",
    category: "Web Development",
    href: "https://inidebee-currencyconverter.netlify.app/",
  },
  {
    id: "6",
    image: Project6,
    name: "Weather App",
    category: "Web Development",
    href: "https://inidebee-weatherapp.netlify.app/",
  },
  {
    id: "7",
    image: Project7,
    name: "QR Code Generator",
    category: "Web Development",
    href: "https://inidebee-qrcodegenerator.netlify.app/",
  },
  {
    id: "8",
    image: Project8,
    name: "DHT Brand Style Guide",
    category: "UI/UX Design",
    href: "https://www.figma.com/file/BVcjhbAu6kyE1TAaEb65z5/DHT-Brand-Style-Guide?type=design&t=Ym2RTy3jAIwVs5Q9-6",
  },
  {
    id: "9",
    image: Project9,
    name: "Xpandreach Carousels",
    category: "Graphics Design",
    href: "https://www.behance.net/gallery/152668251/Tips-for-starting-a-career-in-tech",
  },
];

// projects
export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "Web Development",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "Graphics Design",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiFigma />,
    name: "UI/UX Design",
    description:
      "I create unique and beautiful web and product designs, custom for your business.",
  },
  {
    icon: <FiCode />,
    name: "Web Development",
    description:
      "Focused on quality, I build cutting-edge, pixel-perfect, beautiful web interfaces for your business.",
  },
  {
    icon: <FiPenTool />,
    name: "Graphics Design",
    description:
      "We tell people your brand story and promote it through graphics design deliverables.",
  },
  //   {
  //     icon: <FiTag />,
  //     name: "SEO",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  //   },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at inioluwadeborah2@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Lagos, Nigeria",
    description: "Serving clients worldwide",
  },
];
