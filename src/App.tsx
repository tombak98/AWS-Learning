import React from 'react'
import InputField from './components/InputField'
import TestComponent from './components/TestComponent'
import TodoList from './components/TodoList'
import { Todo } from './model'

// React Function Component type
const App:React.FC = () => {
    
    // now, lets create a separate state that holds an array of Todos that we created in model.ts
    const [todos, setTodos] = React.useState<Todo[]>([])

    // so, even for basic functions that take an event, we need to give it a type. Look this up later
    const handleAdd = (event: React.SyntheticEvent) => {
        event.preventDefault()
    }
 
    return (
        <>
        <h1 id="title">Todo List</h1>
        {/* When we give something attributes or props, we need to make sure in the component itself that it is defined */}
        <InputField handleAdd={handleAdd} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
        </>
    )
}

export default App