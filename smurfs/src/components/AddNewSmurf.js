import React, {useState} from "react";
import { connect } from "react-redux";
import { addNewSmurf } from "../actions/action"

const AddNewSmurf = (props) => {
    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: "",
        id: 12345
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
      };
    
        return (
          <div className="newSmurf-container">
              <form onSubmit={handleNewSmurf}>
            <label htmlFor="name">
            <input
              type="text"
              name="name"
              value={smurf.name}
              onChange={handleChanges}
              placeholder="Add new member"
            />
            </label>
            <label htmlFor="age">
            <input
              type="text"
              name="age"
              value={smurf.age}
              onChange={handleChanges}
              placeholder="Smurf's age"
            />
            </label>
            <label htmlFor="height">
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

