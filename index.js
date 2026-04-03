import express from 'express';
import path from 'path';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'));
});

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });