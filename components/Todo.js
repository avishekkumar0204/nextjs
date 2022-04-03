import React from 'react'

export default function Todo(props) {
    return (
        <div className=' text-center py-2' key={props.todo["id"]}>{props.todo["title"]}</div>
    )
}
