import React from 'react';
import './CharacterInfo.css'; // 导入角色信息的样式文件

function CharacterInfo() {
  return (
    <div className="character-info-container">
      <h2>角色信息</h2>
      <div className="character-card">
        <h3>角色名称: 神秘战士</h3>
        <p>等级: 5</p>
        <p>生命值: 500 / 500</p>
        <p>攻击力: 70</p>
        <p>防御力: 50</p>
        <div className="character-equipment">
          <h4>当前装备:</h4>
          <p>武器: 火焰剑</p>
          <p>防具: 龙鳞甲</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterInfo;