import React, { useEffect, useState } from 'react';
import './App.css';

function TaskList() {
  // 任务列表和任务状态
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const taskData = [
        { id: 1, name: '任务 1', description: '收集10个魔法石', reward: 100, status: '未接受' },
        { id: 2, name: '任务 2', description: '击败守护怪物', reward: 200, status: '未接受' },
        { id: 3, name: '任务 3', description: '探索迷雾森林', reward: 150, status: '未接受' }
      ];
      setTasks(taskData);
    };
    fetchTasks();
  }, []);

  const acceptTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: '进行中' } : task
      )
    );
    alert(`接受任务: ${taskId}`);
  };

  return (
    <div className="task-container">
      <h2>可用任务</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p>奖励: {task.reward} GToken</p>
            <p>状态: {task.status}</p>
            {task.status === '未接受' && (
              <button onClick={() => acceptTask(task.id)} className="task-button">
                接受任务
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
