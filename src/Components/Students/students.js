import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import StudentCard from "../StudentCard";
import Calendar from "../Calendar/App";



class Students extends Component {


//can put states etc here for component

  render() {
    return (
      <div>
        <p>
         This needs to allow a sudent to pick a tutor according to instrument. 
        </p>
        <StudentCard>
            {/* <Calendar /> */}
        </ StudentCard>
        <Calendar />
        <StudentCard />
        <StudentCard />
      </div>
    );
  }
}

export default Students;