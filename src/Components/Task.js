import React from "react";
import Checkbox from "./Checkbox"; 
import EditButton from "./EditButton";
import "./Task.css"


function Task(props) {

    return(
        <div className="task">
            <div className="taskButtons">
                <div>
                <Checkbox />
                </div>
                <div>
                <EditButton />
                </div>
            </div>
            
            <div className="taskText">
                <h2>{props.taskName}</h2>
                <h4>{props.taskDescription}</h4>
            </div>
        </div>
    );
}

export default Task