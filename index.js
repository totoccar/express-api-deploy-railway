const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
    res.json({ message: "pong" });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
