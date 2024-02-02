import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useEffect, useContext } from 'react';
import TasksContext from './context/task';

function App() {

const { fecthTasks } = useContext(TasksContext)
useEffect(() => {
  fecthTasks();
}, [])


  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  );
}

export default App;
