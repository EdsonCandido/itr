const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1', routes);

app.listen(PORT, () => console.log(`server on in http://localhost:${PORT}`));
