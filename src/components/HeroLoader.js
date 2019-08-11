import React from "react";
import Loader from "./loader.gif";
import { connect } from "react-redux";

function HeroLoader({ isLoading }) {
  if (isLoading) {
    return (
      <div className="loader">
        <img src={Loader} alt="loader" />
      </div>
    );
  } else {
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(HeroLoader);
