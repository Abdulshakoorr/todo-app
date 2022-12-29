import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

const List = ({todo,toggleComplete,deleteTodo}) => {
    const {text,completed,id} = todo
  return (
    <li className='shadow-lg mt-6 bg-slate-400 p-2 px-4 text-black font-medium '>
        <div className="todo-data flex space-x-12 items-center justify-between text-md ">
            <input onChange={() => {toggleComplete(todo)}} type="checkbox" checked={completed?"checked":""}/>
            <p onClick={()=>{toggleComplete(todo)}}>{text}</p>
            <button onClick={() =>{deleteTodo(id)}} className='hover:text-red-700 hover:scale-x-105'>< AiFillDelete/></button>
        </div>
    </li>
  )
}

export default List