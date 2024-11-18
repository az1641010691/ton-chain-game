import React, { useEffect, useState } from 'react';
import './Shop.css'; // 导入商店的样式文件

function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      // 模拟商店数据
      const itemData = [
        { id: 1, name: '火焰剑', price: 500, description: '增加攻击力的神奇火焰剑', imageUrl: 'https://example.com/fire_sword.png' },
        { id: 2, name: '龙鳞甲', price: 800, description: '极高防御的龙鳞铠甲', imageUrl: 'https://example.com/dragon_armor.png' },
        { id: 3, name: '恢复药水', price: 100, description: '恢复50点生命值', imageUrl: 'https://example.com/health_potion.png' }
      ];
      setItems(itemData);
    };
    fetchItems();
  }, []);

  return (
    <div className="shop-container">
      <h2>商店</h2>
      <div className="shop-items">
        {items.map(item => (
          <div key={item.id} className="shop-item-card">
            <img src={item.imageUrl} alt={item.name} className="item-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>价格: {item.price} GToken</p>
            <button className="buy-button" onClick={() => alert(`购买了: ${item.name}`)}>购买</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;