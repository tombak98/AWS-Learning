import React from "react";
import axios from "axios";
import { Todo } from "../model";
import TodoItem from './TodoItem'

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>> 
}

const TodoList = ({todos, setTodos}:Props) => {

    React.useEffect(()=>{
        const getStuff = async() => {
            const {data} = await axios.get('/api/todo/all')
            setTodos(data)
        }
        getStuff()
    },[])

    const checkOff = async(event:any) => {
        event.preventDefault()
        const {data} = await axios.put(`api/todo/checkoff/${event.target.value}`)
        setTodos(data)
    }

    const deleteTodo = async(event:any) => {
        event.preventDefault()
        const {data} = await axios.delete(`api/todo/delete/${event.target.value}`)
        setTodos(data)
    }

    const editTodo = async(event:any, newName:string) => {
        event.preventDefault()
        const {data} = await axios.put(`/api/todo/update/${event.target.value}`, {
            name: newName
        })
        setTodos(data)
    }

    return (
        <>
            <div id="todo-holder">
                {todos?.map((todo)=>
                    <TodoItem deleteTodo={deleteTodo} checkOff={checkOff} editTodo={editTodo}
                    name={todo.name} id={todo.id} isDone={todo.isDone}/>
                )}
            </div>
        </>
    )
}

export default TodoList