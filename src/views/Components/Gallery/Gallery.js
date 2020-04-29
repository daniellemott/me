import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import studio1 from "assets/img/ProfilePage/Gnus.JPG";
import studio2 from "assets/img/ProfilePage/Mountains.jpg";
import studio3 from "assets/img/ProfilePage/Skiing.JPG";
import studio4 from "assets/img/ProfilePage/XCSkiing.jpg";
import studio5 from "assets/img/ProfilePage/Sunset.jpg";
import studio6 from "assets/img/ProfilePage/Nellie.jpg";
import studio7 from "assets/img/ProfilePage/waterfall.jpg";
import studio8 from "assets/img/ProfilePage/portugal.jpg";
import studio9 from "assets/img/ProfilePage/hummus.JPG";
import studio10 from "assets/img/ProfilePage/sushi.jpg";
import studio11 from "assets/img/ProfilePage/mountains_hat.jpg";
import studio12 from "assets/img/ProfilePage/jump.jpg";
import studio13 from "assets/img/ProfilePage/kenya.jpg";

import classNames from "classnames";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);

export default function Gallery(props) {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={3}>
        <img alt="..." src={studio5} className={navImageClasses} />
        <img alt="..." src={studio1} className={navImageClasses} />
        <img alt="..." src={studio11} className={navImageClasses} />
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
        <img alt="..." src={studio2} className={navImageClasses} />
        <img alt="..." src={studio9} className={navImageClasses} />
        <img alt="..." src={studio4} className={navImageClasses} />
        <img alt="..." src={studio12} className={navImageClasses} />
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
        <img alt="..." src={studio8} className={navImageClasses} />
        <img alt="..." src={studio13} className={navImageClasses} />
        <img alt="..." src={studio6} className={navImageClasses} />
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
        <img alt="..." src={studio3} className={navImageClasses} />
        <img alt="..." src={studio7} className={navImageClasses} />
        <img alt="..." src={studio10} className={navImageClasses} />
      </GridItem>
    </GridContainer>
  );
}
