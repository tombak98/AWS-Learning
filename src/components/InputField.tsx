import React from "react";
import axios from 'axios'
import {Todo} from '../model'

interface Props{
    // we need to add this here too, since its passed as a prop
    handleAdd: (event:React.SyntheticEvent) => void;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

// so here, we see that we set the type of that object that is input into as a Props interface
// you can ALSO do. InputField:React.FC<Props> = ({todo, setTodo})
const InputField = ({handleAdd, setTodos}:Props) => {

    const [todo, setTodo] = React.useState<string>("")

    const handleChange = (event:any) => {
        event.preventDefault()
        setTodo(event.target.value)
    }

    const handleSubmit = async (event:any) => {
        event.preventDefault()
        await axios.post('/api/todo/add', {
            name: todo,
            isDone: false
        })
        const {data} = await axios.get('api/todo/all')
        setTodos(data)
        setTodo('')
    }

    return (
        <>
        <div>
            <input className="input" value={todo} onChange={handleChange}></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </>
    )
}

export default InputField