import React, { useState } from react

const AddTask = ({onSave}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')

return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input
            type= "text"
            placeholder="add task"
            value={text}
            onChange= {(e) => setText(e.target.value)}
            />
        </div>
        <div className="form-conrtrol">
            <label>Day & Time</label>
            <input
            type = "text"
            placeholder="add day and time"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
        </div>
        <input
        type="submit"
        className="btn btn-block"
        value="Save Task"
        />
    </form>
)


}

export default AddTask

// const AddTask = ({onSave}) => {
//     const [text, setText] = useState('');
//     const [day, setDay] = useState('');
//     return (
//         <form className="add-form" onSubmit={onSubmit}>
//             <div className="form-control">
//                 <label>Task</label>
//                 <input type="text" placeholder="add task" value={text} onChange={(e) => setText(e.target.value)} />
//             </div>
//             <div className="form-control">
//                 <label>Day & Time</label>
//                 <input type="text" placeholder="add day & time" value={day} onChange{(e) => setDay(e.target.value)} />
//             </div>
//             <input type="submit" className="btn btn-block" value="Save Task" />
//         </form>
//       )
//   }
  