const express = require('express');
const path = require('path');
const app = express();

// 정적 파일 서빙
app.use(express.static(path.join(__dirname, 'public')));

// 노드 관리용 API (필요에 따라 구현 가능)
app.use(express.json());
app.post('/add-node', (req, res) => {
    const { id, x, y } = req.body;
    // 여기에 노드를 추가하는 로직 구현
    res.send('Node added successfully!');
});

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
