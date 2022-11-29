import React from 'react'
import { Todo } from './model'
import axios from 'axios'

// React Function Component type
const App:React.FC = () => {
    
    // now, lets create a separate state that holds an array of Todos that we created in model.ts
    const [todos, setTodos] = React.useState<Todo[]>([])

    // so, even for basic functions that take an event, we need to give it a type. Look this up later
    const handleAdd = (event: React.SyntheticEvent) => {
        event.preventDefault()
    }

    // var callAPI = (firstName:string,lastName:string)=>{
    //     // instantiate a headers object
    //     var myHeaders = new Headers();
    //     // add content type header to object
    //     myHeaders.append("Content-Type", "application/json");
    //     // using built in JSON utility package turn object to string and store in a variable
    //     var raw = JSON.stringify({"firstName":firstName,"lastName":lastName});
    //     // create a JSON object with parameters for API call and store in a variable
    //     var requestOptions = {
    //         method: 'POST',
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: 'follow'
    //     };
    //     // make API call with parameters and use promises to get response
    //     fetch("https://8wojfslaqe.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
    //     .then(response => response.text())
    //     .then(result => alert(JSON.parse(result).message))
    //     .catch(error => console.log('error', error));
    // }

    async function testLambda(firstName:string, lastName:string) {
        const {data} = await axios.post('https://8wojfslaqe.execute-api.us-east-1.amazonaws.com/dev', {
            firstName: firstName,
            lastName: lastName
        })
        console.log(data)
    }
 
    return (
        <>
        <h1 id="title">Todo List</h1>
        <button onClick={()=>testLambda('Thomas', 'Bak')}>Try Me</button>
        </>
    )
}

export default App