import React, { useState, useEffect } from 'react';

function Shop() {
  // 物品列表的状态
  const [items, setItems] = useState([
    { id: 1, name: '铁剑', description: '基础的武器，增加攻击力', price: 100 },
    { id: 2, name: '防护盾', description: '可以提高防御力', price: 150 },
    { id: 3, name: '魔法披风', description: '增加魔法防御', price: 200 }
  ]);

  // 角色信息的状态
  const [character, setCharacter] = useState(() => {
    const savedCharacter = JSON.parse(localStorage.getItem('character'));
    return savedCharacter || { name: '勇者', level: 1, gToken: 500, equipment: ['木剑'] };
  });

  // 购买物品的函数
  const buyItem = (itemId) => {
    const item = items.find(i => i.id === itemId);
    if (item && character.gToken >= item.price) {
      setCharacter(prevCharacter => ({
        ...prevCharacter,
        gToken: prevCharacter.gToken - item.price,
        equipment: [...prevCharacter.equipment, item.name]
      }));
    } else {
      alert('代币不足，无法购买该物品！');
    }
  };

  // 每次角色信息更新后将其存储到 localStorage 中
  useEffect(() => {
    localStorage.setItem('character', JSON.stringify(character));
  }, [character]);

  return (
    <div>
      <h2>商店</h2>
      <p>当前代币: {character.gToken}</p>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>价格: {item.price} GToken</p>
            <button onClick={() => buyItem(item.id)}>购买</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;
