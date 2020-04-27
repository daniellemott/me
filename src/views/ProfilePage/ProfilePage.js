import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/danielle.jpg";

import studio1 from "assets/img/ProfilePage/Gnus.JPG";
import studio2 from "assets/img/ProfilePage/Mountains.jpg";
import studio3 from "assets/img/ProfilePage/Skiing.JPG";
import studio4 from "assets/img/ProfilePage/XCSkiing.jpg";
import studio5 from "assets/img/ProfilePage/Sunset.jpg";
import studio6 from "assets/img/ProfilePage/Nellie.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Danielle Elizabeth"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Danielle Elizabeth</h3>
                    <h6>SOFTWARE ENGINEER</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>B.C. born, WA local. {""}</p>
              <p>Mountain enthusiast, animal lover, coffee addict.{""}</p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <img alt="..." src={studio1} className={navImageClasses} />
                <img alt="..." src={studio5} className={navImageClasses} />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <img alt="..." src={studio2} className={navImageClasses} />
                <img alt="..." src={studio4} className={navImageClasses} />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <img alt="..." src={studio3} className={navImageClasses} />
                <img alt="..." src={studio6} className={navImageClasses} />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
