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
                    <h6>SOFTWARE ENGINEER</h6>
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
                Hi, I'm Danielle! I'm a software engineer on a core networking team at Microsoft.
                I studied computer science and math at Queen's University in Kingston, Ontario. 
                When I'm not on my laptop, I can be found exploring the North Cascades mountains, 
                cooking tasty vegetarian meals, and jamming out to country music.
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
                      I just celebrated my two year anniversary in Seattle! How time flies! It’s great to be back on the West (best) Coast.
                      I spent the first year in Washington catching up on all the sleep I did not get in university. Now that I’m properly 
                      rested, I’ve been exploring everything Washington has to offer and contemplating what I want from adult life. 
                    </p>
                    <p>
                      Recently I launched myself into as many sports as possible. I’m an avid soccer player, trail runner, gym rat, hiker, 
                      backcountry skier, and yogi. To exercise my mind, I completed an 8 week meditation course this winter, courtesy of 
                      the Seattle Mindfulness Center. Additionally, I read the books “Breaking the Habit of Being Yourself” and 
                      “The Surrender Project”. Both were incredible resources to me. I’ve since implemented a consistent daily meditation 
                      practice. The stress reduction and mental clarity I gained from my daily practice has truly changed my life. 
                    </p>
                    <p>
                      Stay tuned for further updates! I’m always on the hunt for the next adventure. 
                    </p>
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
