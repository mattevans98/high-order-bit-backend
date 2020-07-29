import * as express from 'express';
import { MongoClient } from 'mongodb';
import 'dotenv/config';

const uri = `mongodb+srv://mattevans98:${process.env.MONGO_PASSWORD}@hob-data.netjl.mongodb.net/kreia-db?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
	const collection = client.db('kreia-db').collection('kreia-quotes');

	client.close();
});

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('App running!'));

app.listen(port, () => console.log(`App running at http://localhost:${port}`));
