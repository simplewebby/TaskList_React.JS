import React from 'react';


const Tasks = ({tasks, deleteTask}) => {
    const taskList = tasks.length ?(
        tasks.map(task =>{
            return(
                <div className="collection-item" key={task.id} >
                    <span onClick={()=>{deleteTask(task.id)}}>{task.content} </span>
                </div>
            )
        })
    ) : (
        <p className="centered">You have no tasks at this time!!!</p>
    )
    

    return (
      <div className="tasks collection">
        {taskList}
      </div>
    );
  }


export default Tasks;