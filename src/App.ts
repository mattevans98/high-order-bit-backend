import * as express from 'express';

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('App running!'));

app.listen(port, () => console.log(`App running at http://localhost:${port}`));
