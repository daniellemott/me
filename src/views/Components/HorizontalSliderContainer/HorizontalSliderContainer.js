import React, { Component } from "react";

// eslint-disable-next-line no-unused-vars
import { ReactBootstrapStyle, Carousel } from "react-bootstrap";
import { Container, CarouselWrapper, CarouselItemWrapper } from "./styled";
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
        <CarouselWrapper
          activeIndex={index}
          onSelect={this.handleSelect}
        >
          {ImgList.map(function(Img, index) {
            return (
              <Carousel.Item key={index}>
                <CarouselItemWrapper>
                  <ImgMediaCard></ImgMediaCard>
                  </CarouselItemWrapper>
              </Carousel.Item>
            );
          })}
        </CarouselWrapper>
      </Container>
    );
  }
}

export default HorizontalSliderContainer;
