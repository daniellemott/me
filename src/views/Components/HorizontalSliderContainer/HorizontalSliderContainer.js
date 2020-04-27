import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import { Carousel, ReactBootstrapStyle } from "react-bootstrap";
import { Container } from "./styled";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";

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
      <Container>
        <Carousel activeIndex={index} onSelect={this.handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/400?text=Second slide&bg=282c34"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default HorizontalSliderContainer;
