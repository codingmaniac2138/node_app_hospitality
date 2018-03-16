import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createReservation } from "../actions";
import { Link } from "react-router-dom";

class InputForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            hotelName: '',
            arrivalDate: '',
            departureDate: ''
        };
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.createReservation(this.state);

        //clearing state to refresh form
        let blankState = {};
        Object.keys(this.state).forEach(key => blankState[key] = '');
        this.setState(blankState)
    }
  
    render() {
        return (
            <div>

                {/* {alert("kkkkkkkkkkkkkkkkkkkkk")} */}
                <div className="thorMarkdown"><style type="text/css"></style>
                    <div className="thorMarkdown__content middle">
                        <div id="markdown-61ca57f0-469d-11e7-af02-69e470af7417">
                            <div>
                                <p><strong> Power Supply Count</strong></p>
                                <p>52 Total  / 52  OK</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="thorMarkdown"><style type="text/css"></style>
                    <div className="thorMarkdown__content middle">
                        <div id="markdown-61ca57f0-469d-11e7-af02-69e470af7417">
                            <div><p><strong>Power Supply Count</strong></p><p>52 Total  / 52  OK</p></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m12">
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="card grey lighten-3">
                            <div className="card-content black-text">
                                <h5 id ="kd">Enter Details</h5>
                                <form onSubmit={this.onFormSubmit} className="input-group">

                                    <div classname="form-group ">
                                        <input
                                            value={this.state.name}
                                            onChange={event => this.setState({ name: event.target.value })}
                                            placeholder="Enter Name"
                                            className="form-control"
                                            type="text"
                                        />
                                    </div>
                                    <div classname="form-group">

                                        <input
                                            value={this.state.hotelName}
                                            onChange={event => this.setState({ hotelName: event.target.value })}
                                            placeholder="Enter Hotel Name"
                                            className="form-control"
                                            type="text"
                                        />
                                    </div>
                                    <div classname="form-group">

                                        <input
                                            value={this.state.arrivalDate}
                                            onChange={event => this.setState({ arrivalDate: event.target.value })}
                                            placeholder="Enter Arrival Date"
                                            className="form-control"
                                            type="date"
                                        />
                                    </div>
                                    <div classname="form-group">

                                        <input
                                            value={this.state.departureDate}
                                            onChange={event => this.setState({ departureDate: event.target.value })}
                                            placeholder="Enter Departure Date"
                                            className="form-control"
                                            type="date"
                                        />
                                    </div>
                                    <span className="input-group-button">
                                        <button type="submit" className="btn btn-secondary">SUBMIT</button>
                                    </span>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>


                {/* {passInput()} */}

            </div>
        )
    }
}
// render(

//     {
//         return(
//             <div>
//             {passInput()}
//         </div>
//         )
//     }
// );
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createReservation: createReservation }, dispatch)
}

// $(document)function passInput() {
    // alert("kkkkkkkkkkkkkkkkkkkkk");
    $(document).ready(function(){


    console.log("ooooooo");
    // var x = document.getElementsByTagName("div");
    // console.log(x)
    // x.style.backgroundColor="red";
    var x = document.querySelectorAll("div.thorMarkdown > div > div > div> p");
    // var x = document.querySelector("div.thorMarkdown");
    // var x = document.getElementsByClassName("thorMarkdown");
    var i;
    console.log(x);
    for (i = 0; i < x.length; i++) {
        var split_text = x[i].innerHTML;
        // var split_text = x[i].innerHTML.split(" ")[1].split("<!")[0];
        console.log(x[i].getElementsByTagName("p"));
        if (split_text.includes("Total")) {
            // console.log(split_text);
            var values = split_text.split(" ");
            if (values[0] != values[4]) {
                console.log(values[0]);
                console.log(values[4]);
                x[i].style.backgroundColor = "red";
            }
            else {
                x[i].style.backgroundColor = "green";
            }
        }
    }
});

// };
export default connect(null, mapDispatchToProps)(InputForm);