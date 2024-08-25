import React, { useState, useEffect } from 'react';

function MyForm() {
  const [levels, setLevels] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [type, setType] = useState('');
  const [relation, setRelation] = useState('');

  // 예시 JSON 데이터
  const levelData = [
    { id: 1, name: 'Level 1' },
    { id: 2, name: 'Level 2' },
    { id: 3, name: 'Level 3' },
    // 더 많은 레벨을 추가할 수 있습니다.
  ];

  useEffect(() => {
    // 실제로는 이 부분에서 서버로부터 데이터를 받아올 수 있습니다.
    setLevels(levelData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('선택된 레벨:', selectedLevel);
    console.log('종류:', type);
    console.log('연관:', relation);
    // 여기에 서버로 데이터를 보내는 로직을 추가할 수 있습니다.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>레벨</label>
        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option value="">선택하세요</option>
          {levels.map((level) => (
            <option key={level.id} value={level.name}>
              {level.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>종류</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="종류를 입력하세요"
        />
      </div>
      <div>
        <label>연관</label>
        <input
          type="text"
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
          placeholder="연관된 항목을 입력하세요"
        />
      </div>
      <button type="submit">제출</button>
    </form>
  );
}

export default MyForm;
