import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Gnus from "assets/img/GalleryImg/Gnus.jpg";
import Mountains from "assets/img/GalleryImg/Mountains.jpg";
import Skiing from "assets/img/GalleryImg/Skiing.jpg";
import XCSkiing from "assets/img/GalleryImg/XCSkiing.jpg";
import Sunset from "assets/img/GalleryImg/Sunset.jpg";
import Nellie from "assets/img/GalleryImg/Nellie.jpg";
import Waterfall from "assets/img/GalleryImg/Waterfall.jpg";
import Portugal from "assets/img/GalleryImg/Portugal.jpg";
import Hummus from "assets/img/GalleryImg/Hummus.jpg";
import Sushi from "assets/img/GalleryImg/Sushi.jpg";
import Mountains_Hat from "assets/img/GalleryImg/Mountains_Hat.jpg";
import Jump from "assets/img/GalleryImg/Jump.jpg";
import Kenya from "assets/img/GalleryImg/Kenya.jpg";

import classNames from "classnames";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);

export default function Gallery() {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={3}>
        <img alt="..." src={Sunset} className={navImageClasses} />
        <img alt="..." src={Gnus} className={navImageClasses} />
        <img alt="..." src={Mountains_Hat} className={navImageClasses} />
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
        <img alt="..." src={Mountains} className={navImageClasses} />
        <img alt="..." src={Hummus} className={navImageClasses} />
        <img alt="..." src={XCSkiing} className={navImageClasses} />
        <img alt="..." src={Jump} className={navImageClasses} />
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
        <img alt="..." src={Portugal} className={navImageClasses} />
        <img alt="..." src={Kenya} className={navImageClasses} />
        <img alt="..." src={Nellie} className={navImageClasses} />
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
        <img alt="..." src={Skiing} className={navImageClasses} />
        <img alt="..." src={Waterfall} className={navImageClasses} />
        <img alt="..." src={Sushi} className={navImageClasses} />
      </GridItem>
    </GridContainer>
  );
}
