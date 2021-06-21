import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const ToDoListLine = (props) => {
  

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div>
      <div>
        
      <FormControlLabel
        control={
          <Checkbox
          onClick={() => {props.ChangeCheckBox() }}
          checked={props.data.ischecked}
          />
        }
        label={props.data.task + " " + props.data.date.toLocaleDateString("en-US", options)}
        />
        </div>

    </div>
  );
};

export default ToDoListLine;
