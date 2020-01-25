import React, { useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { connect } from "react-redux";
import { getColours } from "../redux/actions/actionCreators";

const BubblePage = ({ getColours, colours, match, history }) => {
  useEffect(() => {
    getColours();
  }, [getColours]);

  useEffect(() => {
    console.log("MEEEEE", colours);
  }, [colours]);

  console.log("HELLO", colours);

  return (
    <>
      <ColorList match={match} history={history} />
      <Bubbles colors={colours} />
    </>
  );
};

const mapStateToProps = state => ({
  colours: state.data
});

const mapDispatchToProps = dispatch => ({
  getColours: () => dispatch(getColours())
});

export default connect(mapStateToProps, mapDispatchToProps)(BubblePage);
