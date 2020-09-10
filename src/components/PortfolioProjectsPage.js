import React, { useState } from "react";
import { GoMarkGithub } from "react-icons/go";

//Imports for the style
import "./styles/PortfolioProjectsPage.css";

//imports for the images
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
        I got very interested and passionate about that project and completed as much as I could on my own. Initially I was backend developer for that project.",
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
        "I created Clocks app for practicing my React skill and I always wanted to have Clocks app",
      deployedLink: "https://aleksei-zaichenko.github.io/Clocks/",
      githubRepo: "https://github.com/Aleksei-Zaichenko/Clocks",
      usedTechnologies: ["React", "Moment library"],
    },
    {
      title: "Game Of Live",
      img: gameoflive,
      description:
        "Game of Live is a cellular automaton devised by the British mathematician John Horton Conway in 1970. \
        It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.\
        I was assigned to create that game during Computer sceince unit in Lambda Bootcamp.",
      deployedLink: "https://aleksei-zaichenko.github.io/Game-Of-Life/",
      githubRepo:
        "https://github.com/Aleksei-Zaichenko/Game-Of-Life/tree/master/game-of-life",
      usedTechnologies: ["React"],
    },
    {
      title: "Budget Blocks",
      img: budgetBlocks,
      description:
        "Budget Blocks was a two months project designed for us (Lambda students) to practice everything we learned for the four months period.\
        Every student was assigned a random team as well as a project. All projects were previouslly developed by the prior Lambda students. Our goal was\
        to introduce new features, improve existed features and components, find and fix as many bugs as possible. The team consisted of twelve members: one UX/UI designer,\
        four Data Science developers, five Full Stack Web developers, one IOS devepoler (part of his app was depended on our back-end APIs) and one coordinator (Team Lead).\
        Before our team, the project did not use any\
        data analysis and collection, when we started to plan what we had to get done, one of our biggest concerns was 'How do we introduce Data Science in here'.\
        To solve that we had to work and collaborate closely with Data Science, so that they would get what they needed for their algorithm and we (web developers)\
        would get back the result. During that project I experienced how difficult it is to work in a team, coordinate, collaborate and to get a MVP done by a due date.\
        Our web team experienced problems with github commits, branches, pull requests and unclear API documentations (In our minds it was unclear because none of us knew how to read them properly).\
        These two months gave me a sense and understanding what it will feel like in the real world environment.",
      deployedLink: "https://www.budgetblocks.org/",
      githubRepo: "https://github.com/Lambda-School-Labs/budget-blocks-fe",
      usedTechnologies: [
        "React",
        "Redux",
        "Node",
        "Express",
        "PostgreSql",
        "Knex",
        "Jest",
        "Okta - third party service",
        "Plaid API",
      ],
    },
  ]);

  return (
    <div id="projects" className="portfolioProjectsPage">
      <h3 style={{ textAlign: "center", margin: "4.5% 0 0" }}>
        Examples of some of my projects
      </h3>
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
                target="_blank"
              >
                Deployed link
              </a>
              <a href={project.githubRepo} target="_blank">
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
