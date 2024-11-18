import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskList from './TaskList'; // 导入任务列表组件
import CharacterInfo from './CharacterInfo'; // 导入角色信息组件
import Shop from './Shop'; // 导入商店组件

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>TON Chain Game</h1>
          {/* 导航栏 */}
          <nav>
            <Link to="/">首页</Link> | <Link to="/tasks">任务列表</Link> | <Link to="/character">角色信息</Link> | <Link to="/shop">商店</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={
              <div>
                <h2>欢迎来到 TON Chain Game!</h2>
                <button onClick={() => {
                  const tonkeeperAuthUrl = 'https://tonkeeper.com/transfer/authorize?text=Connect%20to%20TON%20Chain%20Game';
                  window.open(tonkeeperAuthUrl, '_blank');
                }}>Connect TON Keeper Wallet</button>
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
