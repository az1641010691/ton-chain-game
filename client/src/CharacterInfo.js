import React, { useState, useEffect } from 'react';

function CharacterInfo() {
  // 角色状态
  const [character, setCharacter] = useState({
    name: '勇者',
    level: 1,
    gToken: 500,
    equipment: ['木剑']
  });

  // 升级角色函数
  const levelUp = () => {
    setCharacter(prevCharacter => ({
      ...prevCharacter,
      level: prevCharacter.level + 1,
      gToken: prevCharacter.gToken - 100 // 升级需要花费代币
    }));
  };

  // 本地存储角色数据
  useEffect(() => {
    const savedCharacter = JSON.parse(localStorage.getItem('character'));
    if (savedCharacter) {
      setCharacter(savedCharacter);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('character', JSON.stringify(character));
  }, [character]);

  return (
    <div>
      <h2>角色信息</h2>
      <p>名称: {character.name}</p>
      <p>等级: {character.level}</p>
      <p>代币数量: {character.gToken}</p>
      <p>装备: {character.equipment.join(', ')}</p>
      {/* 角色升级按钮 */}
      {character.gToken >= 100 ? (
        <button onClick={levelUp}>升级角色 (100 GToken)</button>
      ) : (
        <p>升级需要更多的 GToken!</p>
      )}
    </div>
  );
}

export default CharacterInfo;
