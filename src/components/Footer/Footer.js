import React from "react";
import PropTypes from "prop-types";

import Button from "../CustomButtons/Button.js";
import { List, ListItem } from "@material-ui/core";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);
const LinksDict = {
  "mailto:danielle.mott123@gmail.com": "fa fa-envelope",
  "https://github.com/daniellemott": "fab fa-github",
  "https://www.facebook.com/danielleelizabethm": "fab fa-facebook"
};

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <List className={classes.list}>
          {Object.keys(LinksDict).map((Link, index) => (
            <ListItem className={classes.inlineBlock} key={index}>
              <Button justIcon link className={classes.margin5} href={Link}>
                <i className={LinksDict[Link]} />
              </Button>
            </ListItem>
          ))}
        </List>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
