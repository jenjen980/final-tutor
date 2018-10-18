import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let main = this.state.startDate
    console.log(main.format('L'));
  }


  render() {
    return (
      <div className = "container">
        {/* <h3>React Datepicker Example</h3> */}
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            {/* <label>Select Date: </label> */}
            <DatePicker
              selected={ this.state.startDate }
              onSelect={this.handleSelect}
              onChange={ this.handleChange }
              name="startDate"
              dateFormat="MM/DD/YYYY"
              showTimeSelect
            //   excludeTimes={[moment().hours(17).minutes(0), moment().hours(18).minutes(30), moment().hours(19).minutes(30), moment().hours(17).minutes(30)]}
            
            //this min and max time can be used for 30 min blocks for the tutors availability
            minTime={moment().hours(17).minutes(0)}
            maxTime={moment().hours(20).minutes(30)}  
            dateFormat="LLL"
            />

          </div>
          <div className="form-group">
            <button className="btn btn-success">Add Date</button>
          </div>
        </form>
      </div>
    );
  }
}



export default Calendar;
