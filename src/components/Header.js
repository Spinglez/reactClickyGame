import React from "react";

const Styles = {
  headerStyles: {
    position:'fixed',
    width: '100%',
    zIndex: '65',
    top: 0
  }
}

const Header = props => {
  return (
    <>
      <nav style={Styles.headerStyles} className="navbar navbar-default navbar-fixed-top navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Clicky Game!</span>
          <span>{props.message}</span>
          <span> Score: {props.score} | Highscore: {props.topScore} </span>
        </div>
      </nav>
    </>
  );
};

export default Header;
