import styled from "styled-components";
import { Carousel } from "react-bootstrap";


export const Container = styled.div`
  padding-bottom: 30px;
`;

export const CarouselWrapper = styled(Carousel)`
  width: 500px;
  height: 350px;
  margin: auto;
  color: red;
  @media (max-width: 500px) {
    width: 290px;
    height: 200px;
  }
`;

export const CarouselItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  height: 350px;
  @media (max-width: 500px) {
    width: 290px;
    height: 200px;
  }
`;
