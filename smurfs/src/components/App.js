import React from "react";

import AddNewSmurf from "../components/AddNewSmurf"
import SmurfList from "../components/SmurfList"

import "./App.css";


const App = (props) => {

  return (
    <div className="App">
    <AddNewSmurf  />
    <SmurfList />

    </div>
  )
}


export default App;
