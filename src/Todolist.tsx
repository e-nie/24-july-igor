import React, {useState} from 'react';
import {filterType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void

}

export function Todolist(props: PropsType) {

    const [filteredTasks, setFilteredTasks] = useState<filterType>('all')

    const tasksFilter = (filterKey: filterType) => {
        setFilteredTasks(filterKey)
    }

    const filterFoo = () => {
        switch (filteredTasks) {
            case 'active':
                return props.tasks.filter(el => !el.isDone)
            case 'completed':
                return props.tasks.filter(el => el.isDone)
            default:
                return props.tasks
        }
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input />
            <button>+</button>
        </div>
        <ul>
            {filterFoo().map(el => {
                return (
                    <li>
                        <button onClick = {() => props.removeTask(el.id)}>X</button>
                        <input type = "checkbox" checked = {el.isDone} />
                        <span>{el.title}</span></li>
                )
            })}

        </ul>
        <div>
            <button onClick = {() => tasksFilter('all')}>All</button>
            <button onClick = {() => tasksFilter('active')}>Active</button>
            <button onClick = {() => tasksFilter('completed')}>Completed</button>
        </div>
    </div>
}
