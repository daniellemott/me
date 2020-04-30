import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
const HeaderTitles = {
  "Who I Am": "#About",
  "My Adventures": "#Gallery",
  "What I Enjoy": "#Interests"
};

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List>
      {Object.keys(HeaderTitles).map((HeaderTitle, index) => (
        <ListItem className={classes.listItem} key={index}>
          <AnchorLink href={HeaderTitles[HeaderTitle]} style={{ all: "unset" }}>
            <Button
              color="transparent"
              borderColor="red"
              target="_blank"
              className={classes.navLink}
              style={{ outline: "none" }}
            >
              {HeaderTitle}
            </Button>
          </AnchorLink>
        </ListItem>
      ))}
    </List>
  );
}
