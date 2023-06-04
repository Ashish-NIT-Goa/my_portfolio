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
import "./Portfolio.css";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

// side image is not required
// import image from "../images/design-desk.jpeg";
// const imageAltText = "desktop with books and laptop";

import image_ted from "../images/projects/ted.png";
import image_valorant from "../images/projects/valorant.jpg";
import image_resume from "../images/projects/resume.jpg";
import image_automation from "../images/projects/automation.png";

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
    title: "Valorant Sprays as Stickers",
    description:
      "A unique WhatsApp sticker app that brings the vibrant world of Valorant to your conversations!",
    url: "https://github.com/45H15H/WhatsApp_Sticker_App",
    image: image_valorant,
  },
  {
    title: "My Resume Site",
    description: "Includes my experience, professional background, skills, and accomplishments.",
    url: "https://ashish-nit-goa.github.io/online-resume/",
    image: image_resume,
  },
  {
    title: "Doja Cat Lyrics Dataset",
    description:
      "Immerse yourself in the emotional journey of Doja Cat's music with this sentiment analysis dataset.",
    url: "https://www.kaggle.com/datasets/ashish51ngh/doja-cat-lyrics",
    image: image_ted,
  },
  {
    title: "GUI Automation Showcase",
    description: "A collection of practical GUI automation projects.",
    url: "https://github.com/45H15H/GUI-Automation/",
    image: image_automation,
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        {/* <div style={{ maxWidth: "40%", alignSelf: "center" }}> 
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
        </div> */}
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <div className="card">
                <img src={project.image} alt={project.title} />
                <div className="card-content">
                  <h3 style={{ fontWeight: "bold", fontSize: "16px", fontFamily: "Arial" }}>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  <p style={{ fontSize: "16px", fontFamily: "Arial" }}>{project.description}</p>
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
