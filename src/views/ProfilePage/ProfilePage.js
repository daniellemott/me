import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HorizontalSliderContainer from "views/Components/HorizontalSliderContainer";
import Gallery from "views/Components/Gallery";
import Button from "components/CustomButtons/Button.js";

// import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/danielle.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { EndP, InterestConainer, AboutWrapper } from "./styled";

const useStyles = makeStyles(styles);
const LinksDict = {
  "mailto:danielle.mott123@gmail.com": "fa fa-envelope",
  "https://github.com/daniellemott": "fab fa-github",
  "https://www.facebook.com/danielleelizabethm": "fab fa-facebook"
};

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <section id="About">
        {/* Thanks to Michael Benz (@michaelbenz) for the photo*/}
        <Parallax small filter image={require("assets/img/forest.jpg")} />
      </section>
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
                    <h3 className={classes.title}>Danielle Mott</h3>
                    <h6>HUMAN | SOFTWARE ENGINEER</h6>
                    {Object.keys(LinksDict).map((Link, index) => (
                      <Button
                        justIcon
                        link
                        className={classes.margin5}
                        href={Link}
                        key={index}
                      >
                        <i className={LinksDict[Link]} />
                      </Button>
                    ))}
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <EndP>
                Hi, I'm Danielle! I study computer science and math at Queen's
                University. When I'm not on my laptop, I can be found exploring the North
                Cascades mountains, cooking tasty vegetarian meals, and jamming out to music.
              </EndP>
            </div>
            <section id="Gallery">
              <h3
                className={classes.title}
                style={{ display: "block", fontSize: "1rem", margin: "0" }}
              >
                My Adventures
              </h3>
              <Gallery></Gallery>
            </section>
            <section id="Interests">
              <InterestConainer>
                <div className={classes.description}>
                  <AboutWrapper>
                    <h3
                      className={classes.title}
                      style={{
                        display: "block",
                        fontSize: "1rem",
                        margin: "0"
                      }}
                    >
                      What I'm up to
                    </h3>
                    <p>
                      I just returned to Canada for my final year of university. I am taking Operating Systems, Algorithms,
                      System Level Programming, and Fundamentals of Software Development this semester. I am also excited to be starting my third
                      year as a member Queen's Women in Computing!
                    </p>
                    This summer I worked remotely as a software engineering intern on an AI team from my hometown in
                    Washington. Working remotely during the pandemic challenged me to improve my self-care habits. I started
                    consistently meditating, <i>actually</i> taking breaks, and limiting my screen time. Outside of work, I 
                    did some late season backcountry skiing and plenty of trail running!
                  </AboutWrapper>
                </div>
                <HorizontalSliderContainer></HorizontalSliderContainer>
              </InterestConainer>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
