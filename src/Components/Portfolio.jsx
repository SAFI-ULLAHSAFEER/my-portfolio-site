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
import image from "../images/cloud1.jpg";

const imageAltText = "I am giving Cloud Computing workshop to other students";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "How to host a Static Website on AMAZON SIMPLE STORAGE SERVICE (S3 BUCKET)🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain How to host a Static Website on S3 BUCKET.",
    url: "https://dev.to/safi-ullah/how-to-host-a-static-website-on-s3-3421",
  },
  {
    title: "Comprhensive Guide to Amazon Simple Storage Service (S3)",
    description:
      "Some Key Features of AWS S3 and types of AWS S3.What financial effects come with utilizing AWS S3?",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Video About Top 3 AI  Tech influencer for Micrsoft Learn Student Ambassador program",
    description: "In this Video I have shared my Top 3 AI tech Influencers",
    url: "https://youtu.be/fKepaLvFZgg?si=Dou0bcCu2m7iXvBX",
  },
  {
    title: "Introduction to  Amazon Simple Storage Service (S3)",
    description:
      " Video to explain What is AWS Simple Storage Service?.How it works?Benfits of S3.",
    url: "https://youtu.be/2IaGGMzamJU",
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
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
