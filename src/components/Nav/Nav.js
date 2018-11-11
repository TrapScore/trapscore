import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import NavTop from "../NavTop/NavTop";
import NavSide from "../NavSide/NavSide";
import NavSideHeader from "../NavSideHeader/NavSideHeader";
import NavList from "../NavList/NavList";
import NavSideBottomActions from "../NavSideBottomActions/NavSideBottomActions";

class Nav extends Component {
  state = {
    sidenavOpen: false,
  };

  setDrawer = open => () => {
    console.log("setDrawer:", open);
    this.setState({
      sidenavOpen: open,
    });
  };

  navigateTo = destination => {
    // TODO: have Joe ask Luke why this doesn't work
    this.setDrawer(false);

    this.setState({
      sidenavOpen: false,
    });

    console.log("navigateTo");

    this.props.history.push(`${destination}`);

    // this.props.dispatch({
    //   type: "NAVIGATE_TO",
    //   payload: destination,
    // });
  };

  logout = () => {
    this.setDrawer(false);
    // TODO: have Joe ask Luke why this doesn't work

    this.setState({
      sidenavOpen: false,
    });
    this.props.dispatch({ type: "LOGOUT" });
  };

  render() {
    return (
      <>
        <NavTop openDrawer={this.setDrawer(true)} />
        <NavSide open={this.state.sidenavOpen} setDrawer={this.setDrawer}>
          <NavSideHeader user={this.props.user} />
          <NavList navigateTo={this.navigateTo} />
          <NavSideBottomActions
            logout={this.logout}
            navigateTo={this.navigateTo}
          />
        </NavSide>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(Nav));
