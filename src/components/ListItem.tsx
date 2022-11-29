import React from "react";

interface Props {
    name: string
}

const ListItem = ({name}:Props) => {

    return (
        <div className="todo-single">{name}</div>
    )
}

export default ListItem