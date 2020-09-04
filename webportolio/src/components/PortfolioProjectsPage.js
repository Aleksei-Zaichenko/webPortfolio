import React, { useState } from "react";
import { GoMarkGithub } from "react-icons/go";

//Imports for the style
import "./styles/PortfolioProjectsPage.css";
import spotifySongsSuggester from "./images/spotifySuggester.jpg";
import clocks from "./images/clocks.jpg";
import gameoflive from "./images/GameOfLife.jpg";
import budgetBlocks from "./images/budgetBlocks.jpg";

import { CardGroup, Card, ListGroup } from "react-bootstrap";

function PortfolioProjectsPage() {
  const [projects, setProjects] = useState([
    {
      title: "Spotify Songs Suggester",
      img: spotifySongsSuggester,
      description:
        "This app recommends a user the songs based on the searched ones. This project was created during one of build weeks in Lambda programming bootcamp. \
        When it was time to handle in that app it was not ready even for 50%. \
        I got very interested and passinate about that project and completed as much as I could on my own. Initially I was backend developer for that project.",
      deployedLink:
        "https://build-week-spotify-song-recommender.github.io/front-end/#/home",
      githubRepo: "https://github.com/Build-Week-Spotify-Song-Recommender",
      usedTechnologies: [
        "React",
        "Redux",
        "Material UI",
        "Node",
        "Express",
        "SQL",
        "Knex",
        "Jest",
      ],
    },
    {
      title: "Clocks App",
      img: clocks,
      description:
        "This app recommends a user the songs based on the searched ones. This project was created during one of build weeks in Lambda programming bootcamp. \
        When it was time to handle in that app it was not ready even for 50%. \
        I got very interested and passinate about that project and completed as much as I could on my own. Initially I was backend developer for that project.",
      deployedLink: "https://aleksei-zaichenko.github.io/Clocks/",
      githubRepo: "https://github.com/Aleksei-Zaichenko/Clocks",
      usedTechnologies: ["React", "Moment library"],
    },
    {
      title: "Game Of Live",
      img: gameoflive,
      description:
        "This app recommends a user the songs based on the searched ones. This project was created during one of build weeks in Lambda programming bootcamp. \
        When it was time to handle in that app it was not ready even for 50%. \
        I got very interested and passinate about that project and completed as much as I could on my own. Initially I was backend developer for that project.",
      deployedLink: "https://aleksei-zaichenko.github.io/Game-Of-Life/",
      githubRepo:
        "https://github.com/Aleksei-Zaichenko/Game-Of-Life/tree/master/game-of-life",
      usedTechnologies: ["React"],
    },
    {
      title: "Budget Blocks",
      img: budgetBlocks,
      description:
        "This app recommends a user the songs based on the searched ones. This project was created during one of build weeks in Lambda programming bootcamp. \
        When it was time to handle in that app it was not ready even for 50%. \
        I got very interested and passinate about that project and completed as much as I could on my own. Initially I was backend developer for that project.",
      deployedLink: "https://www.budgetblocks.org/",
      githubRepo: "https://github.com/Lambda-School-Labs/budget-blocks-fe",
      usedTechnologies: ["React"],
    },
  ]);

  return (
    <div id="projects" className="portfolioProjectsPage">
      <h1 style={{ textAlign: "center", margin: "4.5% 0 0" }}>
        Examples of some of my projects
      </h1>
      <CardGroup className="cardGroup">
        {projects.map((project) => (
          <Card bsPrefix="singleCard">
            <Card.Body className="cardBody">
              <Card.Img variant="top" src={project.img} />
              <Card.Title style={{ margin: "3% 0" }}>
                {project.title}
              </Card.Title>
              <a
                style={{ display: "block", margin: "2% 0" }}
                href={project.deployedLink}
              >
                Deployed link
              </a>
              <a href={project.githubRepo}>
                <GoMarkGithub style={{ color: "black" }} /> repository
              </a>
            </Card.Body>
            <Card.Footer className="cardFooter">
              <Card.Text>{project.description}</Card.Text>
              <div className="listOfTechnologies">Technologies used:</div>
              <ListGroup>
                {project.usedTechnologies.map((technology) => (
                  <ListGroup.Item>{technology}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}

export default PortfolioProjectsPage;
