/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/white_keyboard_bg.jpg";

import "./About.css"

const imageAltText = "white keyboard along with a notebook";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a student at the National Institute of Technology Goa. I have a strong passion for learning and constantly seeking new knowledge. As a self-taught Data Analyst, I am fascinated by the power of data and its potential to drive meaningful insights.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Data Analysis",
  "Data Visualization",
  "Exploratory Data Analysis",
  "PostgreSQL",
  "Python",
  "Microsoft Excel"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "In addition to my studies, I have gained practical experience as a freelancer, specializing in web scraping. This allowed me to hone my skills in data extraction and manipulation, working with various web technologies to gather valuable information.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="about-background" src={image} alt={imageAltText} />
      <div className="about-container">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul>
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="about-quote">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
