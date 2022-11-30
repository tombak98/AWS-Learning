import React from "react";
import axios from 'axios'

interface Props {
    name: string,
    itemID: string,
    getItems: any
}

const ListItem = ({name, itemID, getItems}:Props) => {

    const [newName, setNew] = React.useState('')
    const [edit, setEdit] = React.useState(false)

    async function deleteHandle() {
        await axios.delete('https://vqmpkc8zn0.execute-api.us-east-1.amazonaws.com/dev/list', {
            data : {
                ID: itemID
            }
        })
        await getItems()
    }

    async function updateHandler() {
        await axios.put('https://vqmpkc8zn0.execute-api.us-east-1.amazonaws.com/dev/list', {
            ID: itemID,
            updateKey: "Name",
            updateValue: newName
        })
        setNew('')
        setEdit(false)
        getItems()
    }

    async function updateHandler2() {
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        var raw = JSON.stringify({
            "ID":itemID,
            "updateKey":"Name",
            "updateValue":"newName"
        })
        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw
        }
        fetch('https://vqmpkc8zn0.execute-api.us-east-1.amazonaws.com/dev/list', requestOptions).then()
    }

    return (
        <div className="todo-single">
            {name}
            {edit ? <><input onChange={(event)=>setNew(event.target.value)} value={newName}></input><button onClick={updateHandler}>Submit</button></> : <></>}
            <button onClick={()=>setEdit(!edit)}>Edit Me</button>
            <button onClick={deleteHandle}>Delete Me</button>
        </div>
    )
}

export default ListItem