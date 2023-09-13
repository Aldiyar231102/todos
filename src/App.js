import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';

export default function App() {
    const [tasks, setTasks] = useState();
    setTasks('');

    return (
        <div className="App">
            <h2>Get things done!</h2>
            <AddTask />
            <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
    );
}