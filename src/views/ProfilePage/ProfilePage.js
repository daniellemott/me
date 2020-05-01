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
                Hi, I'm Danielle! I study computer science and math at Queen's
                University. I never thought I'd be interested in computer
                science. When I imagined a coder, I pictured the stereotypical
                geeky kid fiddling with a motherboard in a dreary basement.
                Luckily, my friend in my first year math class encouraged me to
                try coding and I've been hooked since then. When I decide it's
                time to turn off my laptop, I can be found exploring the North
                Cascades mountains or enjoying a glass of <s>red wine</s> water.
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
                      What I Enjoy
                    </h3>
                    <p style={{ fontStyle: "italic" }}>
                      This section is coming soon.
                    </p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse quis euismod orci. Morbi sed elementum purus, et
                    convallis tortor. Nunc dapibus arcu vitae sagittis pulvinar.
                    Integer tincidunt ligula ut ultrices rhoncus. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Mauris placerat condimentum arcu, sed
                    consectetur urna commodo vulputate. Morbi ac luctus odio.
                    Etiam blandit diam fermentum est gravida posuere hendrerit
                    non lorem.
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
