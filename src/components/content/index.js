import React, { useState } from "react";
import { Segment, Card, Container, Image, Icon } from "semantic-ui-react";
import about from "./about";
import education from "./education";
import profile from "../../assets/profile.JPG";
import experience from "./experience";
import projects from "./projects";

const GetContent = (props) => {
  const mode = props.mode;

  var content = [];

  switch (mode) {
    case "About":
      content = about;
      break;
    case "Education":
      content = education;
      break;
    case "Experience":
      content = experience;
      break;
    case "Projects":
      content = projects;
      break;
  }

  const splitStrings = (string) => {
    console.log(string);
    return string.split("\n").map((item, i) => {
      return <p key={i}>{item}</p>;
    });
  };

  return (
    <Container centered style={{ marginTop: "10px"}} textAlign="left">
      {content.map((item, i) => (
        <Card centered fluid>
          <Card.Content>
            {item.image && (
              <Image floated="right" size="mini" src={item.image} />
            )}
            <Card.Header>{item.header}</Card.Header>

            {item.meta && <Card.Meta>{item.meta}</Card.Meta>}
            <Card.Description>
              {splitStrings(item.description)}
            </Card.Description>
          </Card.Content>
          {item.date && <Card.Content extra>{item.date}</Card.Content>}
          {item.winner && (
            <Card.Content>
              <a>
                <Icon name="star" size="large" color="yellow" />
              </a>
              <a href={item.devpost} target="_blank">
                {item.winner}
              </a>
            </Card.Content>
          )}
          {item.external || item.github ? (
            <Card.Content>
              {item.external && (
                <a>
                  <Icon
                    name="external"
                    size="large"
                    onClick={() => window.open(item.external)}
                  />
                </a>
              )}

              {item.github && (
                <a>
                  <Icon
                    name="github"
                    size="large"
                    onClick={() => window.open(item.github)}
                  />
                </a>
              )}
            </Card.Content>
          ) : null}
        </Card>
      ))}
    </Container>
  );
};

export default GetContent;
