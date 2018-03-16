import React, { Component } from 'react';
import InputForm from "../container/Input_form";
import {Route} from "react-router-dom";
import ReservationDetails from "../container/reservation_details";

export default class App extends Component {
  render() {
    return (
      <div>
          <Route exact path="/" component={InputForm}/>
          <Route path="/list" component={ReservationDetails}/>
      </div>
    );
  }
}
