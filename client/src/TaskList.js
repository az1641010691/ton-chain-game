// TaskList Component with Improved Styles
import React, { useEffect, useState } from 'react';
import './TaskList.css'; // 导入任务列表样式

function TaskList() {
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

  return (
    <div className="task-list-container">
      <h2>可用任务</h2>
      <div className="task-cards">
        {tasks.map(task => (
          <div key={task.id} className="task-card">
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p>奖励: {task.reward} GToken</p>
            <button className="accept-task-button" onClick={() => alert(`接受任务: ${task.name}`)}>接受任务</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;