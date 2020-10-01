import React from "react";
import "./SideDrawer.css";
import {NavLink} from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import {logout} from "../../firebase";

const sideDrawer = (props) => {};

const mapStateToProps = (state) => {
  return {
    loggedIn:state.loggedIn,
    userInfo:state.userInfo
  };
};


export default connect(mapStateToProps)(sideDrawer);

