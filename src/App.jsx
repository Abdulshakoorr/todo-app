import { addDoc, collection, doc, onSnapshot, query, updateDoc,deleteDoc } from 'firebase/firestore';
import React,{useState,useEffect} from 'react'
import { AiOutlinePlus } from "react-icons/ai";import List from './components/List';
import { db } from './firbaseConfig';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

// create todo in firebase database
const createTodo = async (e) =>{
  e.preventDefault(e);
  if(input === ""){
    return toast("please enter a todo before")
  } else{
    
  await addDoc(collection(db, "todos"),{
    text:input,
    completed: false
  })
  toast("you have successfully added a todo")
  }

setInput('')
}


// read todo in firebase database
useEffect(()=>{
const q = query(collection(db, 'todos'));
const unSubscribe = onSnapshot(q, (querySnapshot)=> {
  let todosArr = [];
  querySnapshot.forEach((doc) =>{
    todosArr.push({...doc.data(), id: doc.id})
  });
  setTodos(todosArr);
});
return ()=> unSubscribe()
},[])


// update todo in firebase database
// delete todo in firebase database
const deleteTodo = async (id) =>{
await deleteDoc(doc(db, 'todos',id));
toast("you have successfully deleted a todo")
}
// delete todo in firebase database
const toggleComplete = async(todo) =>{
  await updateDoc(doc(db,'todos', todo.id),{
    completed:!todo.completed
  })
}


  return (
    <div className='bg-gradient-to-t from-indigo-800 to-blue-900  h-[100vh] px-8  text-slate-100 sm:px-36 py-8 sm:py-20'>
      <main className="main bg-gray-900 h-auto rounded-md shadow-xl p-4 flex items-center justify-center flex-col space-x-6 space-y-6">
        <h1 className='text-xl font-bold text-center'>Add Todo</h1>
        <form className='flex space-x-2' onSubmit={createTodo}>
          <input type="text" name="" id="" placeholder='Add your planes' className='px-4 p-2 border-none md:w-64 focus:outline-none text-gray-900 rounded'
          value={input} onChange={(e)=>{setInput(e.target.value)}}
          />
          <button className='p-3 bg-green-400 rounded '><AiOutlinePlus size={24}/></button>
        </form>
        <ul>
          {
            todos?.map((item,index)=>{
              return <List key={index} todo={item} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
            })
          }
        </ul>
        {
          todos.length < 1 ? null :<p >You have {todos.length} todos</p>
        }
        
      </main>
      <ToastContainer />
    </div>
  )
}

export default App
