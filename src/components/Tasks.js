import Task from "./Task";
const Tasks = ({tasks, onToggle,onDelete}) => {
  
  
    return (

  <>
    {tasks.map((tasks)=>(<Task onDelete={onDelete} onToggle={onToggle} key={tasks.id} task= {tasks} />))}
  </>);
};

export default Tasks;
