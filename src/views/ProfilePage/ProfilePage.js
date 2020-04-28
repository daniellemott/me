import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HorizontalSliderContainer from "views/Components/HorizontalSliderContainer";

// import Button from "components/CustomButtons/Button.js";
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
import studio7 from "assets/img/ProfilePage/waterfall.jpg";
import studio8 from "assets/img/ProfilePage/portugal.jpg";
import studio9 from "assets/img/ProfilePage/hummus.JPG";
import studio10 from "assets/img/ProfilePage/sushi.jpg";
import studio11 from "assets/img/ProfilePage/mountains_hat.jpg";
import studio12 from "assets/img/ProfilePage/jump.jpg";
import studio13 from "assets/img/ProfilePage/kenya.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { EndP, InterestConainer, AboutWrapper } from "./styled";

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
                    {/* TODO: Add link to GitHub, link to FaceBook, link to email */}
                    {/* <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button> */}
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <EndP>
                B.C. born, WA local. Mountain enthusiast, animal lover, coffee
                addict.
              </EndP>
            </div>
            <h5>Image Gallery</h5>
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
            <h5>What I like</h5>
            <InterestConainer>
              <AboutWrapper>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse quis euismod orci. Morbi sed elementum purus, et
                convallis tortor. Nunc dapibus arcu vitae sagittis pulvinar.
                Integer tincidunt ligula ut ultrices rhoncus. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Mauris placerat condimentum arcu, sed
                consectetur urna commodo vulputate. Morbi ac luctus odio. Etiam
                blandit diam fermentum est gravida posuere hendrerit non lorem.
              </AboutWrapper>
              <HorizontalSliderContainer></HorizontalSliderContainer>
            </InterestConainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
