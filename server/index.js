const express = require('express');
const app = express();
const port = 3000;

let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

let books = [
  {
    title: 'Lord of the Rings',
    date: yesterday.toISOString(),
  },
  {
    title: 'Dune',
    date: yesterday.toISOString(),
  },
  {
    title: 'Name of the Wind',
    date: yesterday.toISOString(),
  },
];

app.use(express.json());

app.get('/book', (req, res) => {
  res.send(books);
});

app.post('/book', (req, res) => {
  const {title} = req.body;

  books.push({
    title,
    date: new Date().toISOString(),
  });

  res.send(books);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
