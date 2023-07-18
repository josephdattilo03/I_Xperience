import React from "react";
import "./taskTable.css"

export default function TaskTable(props) {
    return <div className="container mt-5">
        {
            props.tasks.map((task) => {
                let color = ""
                if (task.priority === "unimportant") {
                    color = "bg-primary"
                } else if (task.priority === "important") {
                    color = "bg-warning"
                } else {
                    color = "bg-danger"
                }
                color = color + " text-center priority mx-auto"
                return <div className="card px-3 py-1 m-1 task">
                        <h2 className="text-center my-2">{task.name}</h2>
                        <button className={color}></button>
                        <p className="text-center mt-2">{task.description}</p> 
                        <h4 className="text-center bg-dark text-light rounded py-1">Complete by: {task.date}</h4>
                        <button className="btn btn-danger" onClick={() =>props.onDeleteTask(task)}>Delete</button>
                        <button className="btn btn-warning mt-2 mb-4" onClick={() => props.onTaskEdit(task)}>Edit</button>
                    </div>
            })
        }
    </div>;
}
