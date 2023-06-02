/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

import image_ted from "../images/projects/ted.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Scraping TED Talks' transcript",
    description:
      "Scraping the transcript of TED Talks from www.ted.com/talks and visualizing it using WordCloud.",
    url: "https://github.com/45H15H/Scraping-TED",
    image: image_ted,
  },
  {
    title: "Valorant Sprays as Stickers: Enhance Your WhatsApp Experience",
    description:
      "A unique WhatsApp sticker app that brings the vibrant world of Valorant to your conversations! This app showcases a collection of dynamic stickers inspired by the in-game sprays from Valorant.",
    url: "https://github.com/45H15H/WhatsApp_Sticker_App",
    image: image_ted,
  },
  {
    title: "My Resume Site",
    description:
      "Includes my experience, professional background, skills, and accomplishments.",
    url: "https://ashish-nit-goa.github.io/online-resume/",
    image: image_ted,
  },
  {
    title: "Doja Cat Lyrics Dataset: Unveiling the Verses of a Rising Star",
    description:
      "Immerse yourself in the emotional journey of Doja Cat's music with this sentiment analysis dataset.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
    image: image_ted,
  },
  {
    title: "GUI Automation Showcase",
    description:
      "Streamlining Workflows through Automated User Interfaces. A collection of practical GUI automation projects.",
    url: "",
    image: image_ted,
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease 0s 1 slideInFromLeft"
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <div className="card">
                <img src={project.image} alt={project.title} />
                <div className="card-content">
                  <h3 style={{ fontWeight: "bold", fontSize: "16px", fontFamily: "Monsterrat" }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "16px", fontFamily: "Monsterrat" }}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
