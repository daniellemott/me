import React, { Component } from "react";

// eslint-disable-next-line no-unused-vars
import { ReactBootstrapStyle, Carousel } from "react-bootstrap";
import { Container, CarouselWrapper, CarouselItemWrapper } from "./styled";
import MusicImg from "assets/img/GalleryImg/Music.jpg";
import BookImg from "assets/img/GalleryImg/Books.jpg";
import MeditationImg from "assets/img/GalleryImg/Meditation.jpg";

import ImgMediaCard from "../Card/Card.js";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./arrows.css";

let Music = {
  title: 'My favourite songs of summer 2020',
  image: MusicImg,
}

let Books = {
  title: 'My favourite books of summer 2020',
  image: BookImg,
}

let Meditation = {
  title: 'I completed my first mindfulness meditation course!',
  image: MeditationImg,
}

const ImgList = [Books, Meditation, Music];

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
          {ImgList.map(function(ImageObj, index) {
            return (
              <Carousel.Item key={index}>
                <CarouselItemWrapper>
                  <ImgMediaCard imageObj={ImageObj}></ImgMediaCard>
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
