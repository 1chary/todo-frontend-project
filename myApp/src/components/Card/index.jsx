import React from 'react'
import "./index.css"

const Card = (props) => {
    const { details } = props
    const {toDoId,description,status} = details; 

    return (
        <li className='individual-style'>
            <p>{toDoId}</p>
            <p>{description}</p>
            <p>{status}</p>
        </li>
    )
}

export default Card