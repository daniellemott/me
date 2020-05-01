import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";

import { QuoteWrapper, Quoted } from "./styled"

const useStyles = makeStyles(styles);

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
        <QuoteWrapper className={classes.title}>
          The roots of all goodness lie in the soil of appreciation for goodness. 
          <div>Dalai Lama</div>
      </QuoteWrapper>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
