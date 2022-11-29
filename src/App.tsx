import React from 'react'
import { Todo } from './model'
import axios from 'axios'
import ListItem from './components/ListItem'

// React Function Component type
const App:React.FC = () => {
    
    // now, lets create a separate state that holds an array of Todos that we created in model.ts
    const [list, setList] = React.useState([])
    const [newItem, setNew] = React.useState("")

    // so, even for basic functions that take an event, we need to give it a type. Look this up later
    const handleAdd = (event: React.SyntheticEvent) => {
        event.preventDefault()
    }
    
    async function getItems() {
        const {data} = await axios.get('https://vqmpkc8zn0.execute-api.us-east-1.amazonaws.com/dev/list')
        setList(data.items.Items)
    }

    React.useEffect(()=>{
        getItems()
    },[])

    async function addItem() {
        let newIDnumber = Math.floor(Math.random()*100000)
        let IDstring = newIDnumber.toString()
        await axios.post('https://vqmpkc8zn0.execute-api.us-east-1.amazonaws.com/dev/list', {
            ID: IDstring,
            Name: newItem
        })
        const {data} = await axios.get('https://vqmpkc8zn0.execute-api.us-east-1.amazonaws.com/dev/list')
        setList(data.items.Items)
        setNew('')
    }
 
    return (
        <>
        <h1 id="title">Simple List</h1>
        <div className="input">
            <input onChange={(event)=>setNew(event.target.value)} value={newItem}></input><button onClick={addItem}>Add new Item</button>
        </div>
        <div id="todo-holder">
            {list?.map((element)=> 
                <ListItem getItems={getItems} key={element.ID} itemID={element.ID} name={element.Name}/>
            )}
        </div>
        </>
    )
}

export default App