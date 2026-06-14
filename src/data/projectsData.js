// src/data/projectsData.js

import Festival1 from "../assets/graphics/Festival1.png";
import Festival2 from "../assets/graphics/Festival2.png";
import gym from "../assets/graphics/gym.png";
import Design1 from "../assets/graphics/Design1.png";
import newoffer from "../assets/graphics/newoffer.png";
import startup from "../assets/graphics/startup.png";
import markeeting from "../assets/graphics/markeeting.png";


export const projectsData = {
  graphics: [
    {
      id: 1,
      title: "Festival Creative Design",
      image: Festival1,
    },
    {
      id: 2,
      title: "Product Promotion Design",
      image: Festival2,
    },
    {
      id: 3,
      title: "Instagram Post Design",
      image: Design1,
    },

      {
      id: 4,
      title: "Instagram Post Design",
      image: gym,
    },
       {
      id: 5,
      title: "Instagram Post Design",
      image: newoffer,
    },
    {
      id: 6,
      title: "Instagram Post Design",
      image: startup,
    },
    {
      id: 7,
      title: "Instagram Post Design",
      image: markeeting,
    }
  ],

  social: [
    {
      id: 1,
      title: "Instagram Growth Project",
      image: "/portfolio/social/s1.jpg",
    },
    {
      id: 2,
      title: "Content Management",
      image: "/portfolio/social/s2.jpg",
    },
    {
      id: 3,
      title: "Business Branding",
      image: "/portfolio/social/s3.jpg",
    },
  ],

  reels: [
    {
      id: 1,
      title: "Real Estate Reel",
      video: "/portfolio/reels/r1.mp4",
    },
    {
      id: 2,
      title: "Restaurant Reel",
      video: "/portfolio/reels/r2.mp4",
    },
    {
      id: 3,
      title: "Marketing Reel",
      video: "/portfolio/reels/r3.mp4",
    },
  ],

  websites: [
    {
      id: 1,
      title: "Business Website",
      image: "/portfolio/websites/w1.jpg",
      description: "Responsive business website built with React.",
      link: "https://yourwebsite.com",
    },
    {
      id: 2,
      title: "Portfolio Website",
      image: "/portfolio/websites/w2.jpg",
      description: "Modern portfolio website for a personal brand.",
      link: "https://yourwebsite.com",
    },
  ],
};