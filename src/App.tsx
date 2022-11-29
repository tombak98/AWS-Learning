import React from 'react'
import { Todo } from './model'
import axios from 'axios'
import ListItem from './components/ListItem'

// React Function Component type
const App:React.FC = () => {
    
    // now, lets create a separate state that holds an array of Todos that we created in model.ts
    const [todos, setTodos] = React.useState<Todo[]>([])

    // so, even for basic functions that take an event, we need to give it a type. Look this up later
    const handleAdd = (event: React.SyntheticEvent) => {
        event.preventDefault()
    }

    React.useEffect(()=>{
        async function getItems() {
            const {data} = await axios.get('https://vqmpkc8zn0.execute-api.us-east-1.amazonaws.com/dev/list')
            console.log(data)
        }
        getItems()
    },[])
 
    return (
        <>
        <h1 id="title">Simple List</h1>
        <div id="todo-holder">
            <ListItem name="Testing This out"/>
            <ListItem name="Testing This out2"/>
        </div>
        </>
    )
}

export default App