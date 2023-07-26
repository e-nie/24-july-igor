import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type filterType = 'all' | 'active' | 'completed'

function App() {


    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 3, title: "Redux", isDone: false}
    ])

    const removeTask = (taskId: number) => {
        setTasks(tasks.filter(el => el.id !== taskId))
    }

    //filteredTasks ===filterKey



    // const [filteredTasks, setFilteredTasks] = useState<filterType>('all')
    // const tasksFilter = (filterKey: filterType) => {
    //     setFilteredTasks(filterKey)
    // }
    //
    // let durchschlag = tasks
    // if (filteredTasks === 'active') {
    //     durchschlag = tasks.filter(el => !el.isDone)
    // }
    // if (filteredTasks === 'completed') {
    //     durchschlag = tasks.filter(el => el.isDone)
    // }




    return (
        <div className = "App">
            <Todolist title = "What to learn"
                      tasks = {tasks}
                      removeTask = {removeTask}

            />

        </div>
    );
}

export default App;
