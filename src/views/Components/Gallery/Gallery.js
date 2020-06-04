import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Cacti from "assets/img/GalleryImg/Cacti.jpg";
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
import Hink_House from "assets/img/GalleryImg/Hink_House.jpg";

import classNames from "classnames";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

import "./styled.css";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);

export default function Gallery() {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={3}>
        <div className="hvrbox">
          <img
            alt="Sunset"
            src={Sunset}
            className={(navImageClasses, "hvrbox-layer_bottom")}
          />

          <div className="hvrbox-layer_top">
            <p className={(classes.description, "hvrbox-text")}>Golden hour</p>
          </div>
        </div>
        <div className="hvrbox">
          <img
            alt="Cacti"
            src={Cacti}
            className={(navImageClasses, "hvrbox-layer_bottom")}
          />
          <div className="hvrbox-layer_top">
            <p className={(classes.description, "hvrbox-text")}>
              Cacti in San Francisco
            </p>
          </div>
        </div>
        <div className="hvrbox">
          <img
            alt="Mountains and hat"
            src={Mountains_Hat}
            className={(navImageClasses, "hvrbox-layer_bottom")}
          />
          <div className="hvrbox-layer_top">
            <p className={(classes.description, "hvrbox-text")}>
              Backcountry skiing in the North Cascades mountains
            </p>
          </div>
        </div>
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
        <div className="hvrbox">
          <img
            alt="Mountains"
            src={Mountains}
            className={(navImageClasses, "hvrbox-layer_bottom")}
          />

          <div className="hvrbox-layer_top">
            <p className={(classes.description, "hvrbox-text")}>
              Fall hike in the North Cascades mountains
            </p>
          </div>
        </div>
        <div className="hvrbox">
          <img
            alt="Hummus"
            src={Hummus}
            className={(navImageClasses, "hvrbox-layer_bottom")}
          />

          <div className="hvrbox-layer_top">
            <p className={(classes.description, "hvrbox-text")}>
              Hummus in Porto
            </p>
          </div>
        </div>
        <div className="hvrbox">
          <img
            alt="XCSkiing"
            src={XCSkiing}
            className={(navImageClasses, "hvrbox-layer_bottom")}
          />

          <div className="hvrbox-layer_top">
            <p className={(classes.description, "hvrbox-text")}>
              Nordic skiing in eastern WA
            </p>
          </div>
        </div>
        <div className="hvrbox">
          <img
            alt="Jumping horse"
            src={Jump}
            className={(navImageClasses, "hvrbox-layer_bottom")}
          />
          <div className="hvrbox-layer_top">
            <p className={(classes.description, "hvrbox-text")}>
              Wuhoo!
            </p>
          </div>
        </div>
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
        <div className="hvrbox">
          <img
            alt="Portugal"
            src={Portugal}
            className={(navImageClasses, "hvrbox-layer_bottom")}
          />

          <div className="hvrbox-layer_top">
            <p className={(classes.description, "hvrbox-text")}>
              Exploring Porto, Portugal
            </p>
          </div>
        </div>
        <div className="hvrbox">
          <img
            alt="Skiing"
            src={Hink_House}
            className={(navImageClasses, "hvrbox-layer_bottom")}
          />

          <div className="hvrbox-layer_top">
            <p className={(classes.description, "hvrbox-text")}>
              Skiing down Hink House
            </p>
          </div>
        </div>
        <div className="hvrbox">
          <img
            alt="Dog"
            src={Nellie}
            className={(navImageClasses, "hvrbox-layer_bottom")}
          />
          <div className="hvrbox-layer_top">
            <p className={(classes.description, "hvrbox-text")}>
              My dog Nellie :) 
            </p>
          </div>
        </div>
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
        <div className="hvrbox">
          <img
            alt="Skiing"
            src={Skiing}
            className={(navImageClasses, "hvrbox-layer_bottom")}
          />

          <div className="hvrbox-layer_top">
            <p className={(classes.description, "hvrbox-text")}>
              More backcountry skiing in the North Cascades mountains!!
            </p>
          </div>
        </div>
        <div className="hvrbox">
          <img
            alt="Waterfall"
            src={Waterfall}
            className={(navImageClasses, "hvrbox-layer_bottom")}
          />
          <div className="hvrbox-layer_top">
            <p className={(classes.description, "hvrbox-text")}>
              Secluded waterfall in eastern WA
            </p>
          </div>
        </div>
        <div className="hvrbox">
          <img
            alt="Sushi"
            src={Sushi}
            className={(navImageClasses, "hvrbox-layer_bottom")}
          />
          <div className="hvrbox-layer_top">
            <p className={(classes.description, "hvrbox-text")}>
              4€ sushi in Portugal
            </p>
          </div>
        </div>
      </GridItem>
    </GridContainer>
  );
}
