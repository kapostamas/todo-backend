const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs/promises');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/todo', async (req, res) => {
	const response = await fs.readFile('./data.json');
	res.json(JSON.parse(response));
});

app.post('/api/todo', async (req, res) => {
	await fs.writeFile('./data.json', JSON.stringify(req.body));
	res.sendStatus(204);
});

app.listen(3080);