import React from "react";
import axios from 'axios'

interface Props {
    name: string,
    itemID: string,
    getItems: any
}

const ListItem = ({name, itemID, getItems}:Props) => {

    async function deleteHandle() {
        await axios.delete('https://vqmpkc8zn0.execute-api.us-east-1.amazonaws.com/dev/list', {
            data : {
                ID: itemID
            }
        })
        await getItems()
    }

    return (
        <div className="todo-single">
            {name}
            <button onClick={deleteHandle}>Delete Me</button>
        </div>
    )
}

export default ListItem