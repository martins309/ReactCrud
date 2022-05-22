import React, { useState } from 'react'
import Swal from 'sweetalert2'


const AddTask = ({onSave}) => {
const [text,setText] = useState('')
const [day, setDay] = useState('')

const onSubmit = (e) => {
    e.preventDefault()
    if(!day && !text) {
        Swal.fire ({
            icon: "error",
            title: 'oops',
            text: "Fill in your task and date"
        })
    } else if(!day && text) {
        Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: "fill in your date"
        })
    }else if(day && !text) {
        Swal.fire({
            icon: 'error',
            title: "Oops",
            text: 'Please enter a task'
        })
    }else {
        onSave({ text, day })
    }
    setText('')
    setDay('')
}





return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input 
            type='text' 
            placeholder='please enter a task' 
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
        </div>
        <div>
            <lable>Day and TIme</lable>
            <input
            tyoe='text'
            placeholder='enter day and time'
            value={day}
            onChange={(e) => setDay(e.target.value)}
            />
        </div>
        <input type="submit" className='btn btn-block' value="Save Task"/>
    </form>
)
}






export default AddTask












  