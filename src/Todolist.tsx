import React from "react";
import {FilterValuesType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (value: FilterValuesType) => void
}

export function Todolist(props: PropsType) {


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            <button onClick={() => {
                                props.removeTask(task.id)
                            }}>x
                            </button>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => {
                    props.changeFilter('all')
                }}>all</button>
                <button onClick={() => {
                    props.changeFilter('active')
                }}>active</button>
                <button onClick={() => {
                    props.changeFilter('completed')
                }}>completed</button>
            </div>
        </div>
    )
}

