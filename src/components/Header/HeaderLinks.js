import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List>
      <ListItem className={classes.listItem}>
        <AnchorLink href="#About" style={{ all: "unset" }}>
          <Button
            color="transparent"
            borderColor="red"
            target="_blank"
            className={classes.navLink}
            style={{ outline: "none" }}
          >
            About
          </Button>
        </AnchorLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <AnchorLink href="#Gallery" style={{ all: "unset" }}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
            style={{ outline: "none" }}
          >
            Gallery
          </Button>
        </AnchorLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <AnchorLink href="#Interests" style={{ all: "unset" }}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
            style={{ outline: "none" }}
          >
            Interests
          </Button>
        </AnchorLink>
      </ListItem>
    </List>
  );
}
