import React from "react";

import AddNewSmurf from "../components/AddNewSmurf"
import SmurfList from "../components/SmurfList"

import "./App.css";


const App = (props) => {

  return (
    <div className="App">
      <h1>Smurf Database</h1>
      <h2>Contribute, or dont... doesnt matter.</h2>
    <AddNewSmurf  />
    <SmurfList />

    </div>
  )
}


export default App;
