
// import React, { useState } from 'react';
// import './TodoList.css';

// function TodoList() {
//   const [task, setTask] = useState('');
//   const [todos, setTodos] = useState([]);

//   const handleInputChange = (event) => {
//     setTask(event.target.value);
//   }

//   const handleAddTodo = () => {
//     if (task.trim() !== '') {
//       if(!task.includes(...todos)){
//       setTodos([task,...todos]);
//     } else {
//       alert("Task already exists!!");
//     }
//     setTask('');
//     }
//   };
//   const handleEditTodo = (index) => {
//     const editedTask = prompt('Edit the task:',todos[index]);
//     if (editedTask !== null) {
//       const updatedTodos = [...todos];
//       updatedTodos[index] = editedTask;
//       setTodos(updatedTodos);
//     }
//   };
//   const handleDeleteTodo = (index) => {
//     const updatedTodos = todos.filter((_,i) => i !== index);
//     setTodos(updatedTodos);
//   };
//   return (
//     <div className="container">
//       <div className='box'>
//       <h1>Todo List</h1>
//       <input type="text" value={task} onChange={handleInputChange} id='input'/>
//       <button onClick={handleAddTodo} className='addbtn'>Add</button>
//       </div>
//       <br></br>
//       <div className='box1'>
//       {todos.map((todo, index) => (
//         <div key={index} className="todo-item">
//             <input value={todo} className='input1'></input>
//             <button className='btn1' onClick={() => handleEditTodo(index)}>Edit</button>
//             <button className='btn2' onClick={() => handleDeleteTodo(index)}>Delete</button>
//          </div>
//       ))}
//       </div>
//     </div>
//   );
// }
// export default TodoList;
import React, { useState } from 'react';
import './TodoList.css'

const TodoList = () => {
  const [tasks, setTasks] = useState(["C","C++","Java","Python"]);
  const [newTask, setNewTask] = useState('');
  const [editTaskIndex, setEditTaskIndex] = useState(null);
  const [errorMessage,setErrorMessage]=useState('');
  // const [successMessage,setSuccessMessage]=useState('');

  const addTask = () => {
    if (newTask.trim() === '') {
      setErrorMessage("This field cannot be empty!!");
      return;
    }
    setErrorMessage('');
          
    if (editTaskIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editTaskIndex] = newTask;
      setTasks(updatedTasks);
      setNewTask('');
      setEditTaskIndex(null);
     } else {
      setTasks([newTask,...tasks]);
      setNewTask('');
    }
  };

  const editTask = (index) => {
    setNewTask(tasks[index]);
    setEditTaskIndex(index);
  };

  const deleteTask = (index) => {
    alert("Are you sure want to delete?");
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  setTimeout(()=>{
    setErrorMessage();
  },5000)
  return (
    <div className='container'>
      <div className='box'>
      <h1>Todo List</h1>
      <input
        className='input'
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask} className='addbtn'>
        {editTaskIndex !== null ? 'Update' : 'Add'}
      </button>
       <h5 className='error'>{errorMessage}</h5>
       {/* <h5 className='success'>{successMessage}</h5> */}

      </div>
      <br></br>
      <div className='box1'>
      <h1>Programming Languages</h1>
        {tasks.map((task, index) => (
          <li key={index}>
           <input value={task} className='input1'></input>
            <button onClick={() => editTask(index)} className='btn1'>Edit</button>
            <button onClick={() => deleteTask(index)} className='btn2'>Delete</button>
          </li>
        ))}
      </div>
    </div>
  );
};
export default TodoList;
