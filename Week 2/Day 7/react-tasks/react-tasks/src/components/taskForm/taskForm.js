import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { Task } from '../../models/task/task'

export default function TaskForm(props) {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [priority,setPriority] = useState("")

    useEffect(() => {
        if(props.taskToEdit) {
            setName(props.taskToEdit.name)
            setDescription(props.taskToEdit.description)
            setDate(props.taskToEdit.date)
            setPriority(props.taskToEdit.priority)
        }
    }, [props.taskToEdit])

    function onTaskFormSubmit(e) {
        e.preventDefault()

        if(!isValid()) {
            alert("Please fill in all values")
            return
        }

        let task = new Task(name, description, date, priority)
        props.onTaskCreated(task)
        setName("")
        setDescription("")
        setDate("")
        setPriority("")
    }

    function isValid() {
        console.log(priority)
        return name !== "" && description !== "" && date !== "" && priority !== ""
    }


    return (
        <div className='border rounded container'>
            <form className='m-3' onSubmit={onTaskFormSubmit}>
                <div className='form-group'>
                    <label for="name" className="control-label">TASK NAME</label>
                    <input value={name} type='text' id="name" className='form-control' onChange={((e) => setName(e.target.value))}></input>
                </div>
                <div className='form-group'>
                    <label for="description" className="control-label">TASK DESCRIPTION</label>
                    <textarea value={description} id="description" className='form-control' onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className='form-group'>
                    <label for="date" className="control-label">COMPLETE BY</label>
                    <input value={date} type='date' className='form-control' id="date" onChange={(e) => setDate(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label for="priority" className="control-label">PRIORITY</label>
                    <select id="priority" value={priority} className='form-control' onChange={(e) => setPriority(e.target.value)}>
                        <option value="">--Select--</option>
                        <option value="urgent">Urgent</option>
                        <option value="important">Important</option>
                        <option value="unimportant">Unimportant</option>
                    </select>
                </div>
                <button type='submit' className=' mt-2 btn btn-outline-primary btn-lg w-100'>Add Task</button>
            </form>
        </div>
    )
}
