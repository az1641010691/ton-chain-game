import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskList from './TaskList'; // 导入任务列表组件
import CharacterInfo from './CharacterInfo'; // 导入角色信息组件
import Shop from './Shop'; // 导入商店组件
import './App.css'; // 导入样式文件

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 style={{ fontSize: '2rem', color: '#333' }}>TON Chain Game</h1>
          {/* 导航栏 */}
          <nav style={{ marginBottom: '20px' }}>
            <Link to="/" style={{ margin: '0 10px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>首页</Link> |
            <Link to="/tasks" style={{ margin: '0 10px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>任务列表</Link> |
            <Link to="/character" style={{ margin: '0 10px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>角色信息</Link> |
            <Link to="/shop" style={{ margin: '0 10px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>商店</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={
              <div>
                <h2 style={{ fontSize: '1.5rem', color: '#444' }}>欢迎来到 TON Chain Game!</h2>
                <button onClick={() => {
                  const tonkeeperAuthUrl = 'https://tonkeeper.com/transfer/authorize?text=Connect%20to%20TON%20Chain%20Game';
                  window.open(tonkeeperAuthUrl, '_blank');
                }}
                style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                  Connect TON Keeper Wallet
                </button>
              </div>
            } />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/character" element={<CharacterInfo />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;