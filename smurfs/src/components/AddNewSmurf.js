import React, {useState} from "react";
import { connect } from "react-redux";
import { addNewSmurf } from "../actions"

const AddNewSmurf = (props) => {

    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: "",
    })

  const handleChanges = (e) => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        })
      };
    
  const handleNewSmurf = (e) => {
        e.preventDefault();
        props.addNewSmurf(smurf);
        setSmurf({
          name: "",
          age: "",
          height: "",
        })
      };
    
        return (
          <div className="addSmurf-container">
              <form onSubmit={handleNewSmurf}>
            <label htmlFor="name">
              Name: 
            <input
              type="text"
              name="name"
              value={smurf.name}
              onChange={handleChanges}
              placeholder="Add new smurf"
            />
            </label>
            <label htmlFor="age">
              Age: 
            <input
              type="text"
              name="age"
              value={smurf.age}
              onChange={handleChanges}
              placeholder="Smurf's age"
            />
            </label>
            <label htmlFor="height">
              Height: 
            <input
              type="text"
              name="height"
              value={smurf.height}
              onChange={handleChanges}
              placeholder="Smurf's height"
            />
            </label>
            <button>Add Smurf</button>
            </form>
          </div>
        );
      }

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(mapStateToProps, {addNewSmurf})(AddNewSmurf);

