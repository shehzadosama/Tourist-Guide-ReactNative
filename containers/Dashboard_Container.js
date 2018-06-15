import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Body, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';
import DatePicker from 'react-native-datepicker';
import Dashboard_Component from '../components/Dashboard_Component';
import SignOutMiddleware from '../store/middlewares/SignOutMiddleware';
import CurrentLocationMiddleware from '../store/middlewares/CurrentLocationMiddleware';
import UpdateLocationMiddleware from '../store/middlewares/UpdateLocationMiddleware';
function mapStateToProps(state) {
    // console.log(state.CurrentLoc.currentLoc);
    return {
     loc:  state.CurrentLoc.currentLoc
      
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signOutUser: function () {

            return dispatch(SignOutMiddleware.signOut());
        },
        getCurrentLocation: function () {

            return dispatch(CurrentLocationMiddleware.currentLoc());
        },
        updateLoc: function (location) {
            
                        return dispatch(UpdateLocationMiddleware.currentLoc(location));
                    },

    };
}


class Dashboard_Container extends Component {
    getCurrentLocation() {
        this.props.getCurrentLocation();
    }
    signOut() {
        this.props.signOutUser();
    }
    updateLoc(location) {
        this.props.updateLoc(location);
    }
    render() {
        return <Dashboard_Component loc={this.props.loc} updateLoc={this.props.updateLoc.bind(this)} signOut={this.signOut.bind(this)} getCurrentLocation={this.getCurrentLocation.bind(this)} />
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard_Container);


