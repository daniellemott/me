import React, { Component } from "react";

// eslint-disable-next-line no-unused-vars
import { Carousel, ReactBootstrapStyle } from "react-bootstrap";
import { Container } from "./styled";
import ImgMediaCard from "../Card/Card.js";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./arrows.css";

//TODO add actual images
const ImgList = ["1", "2", "3"];

export class HorizontalSliderContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0
    };
  }

  handleSelect(selectedIndex) {
    this.setState({
      index: selectedIndex
    });
  }

  render() {
    const { index } = this.state;

    return (
      //TODO carousel items should be defined in an array
      <Container>
        <Carousel
          activeIndex={index}
          onSelect={this.handleSelect}
          style={{
            width: "500px",
            height: "350px",
            margin: "auto",
            color: "red"
          }}
        >
          {ImgList.map(function(Img, index) {
            return (
              <Carousel.Item key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "20px",
                    height: "350px"
                  }}
                >
                  <ImgMediaCard></ImgMediaCard>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    );
  }
}

export default HorizontalSliderContainer;
