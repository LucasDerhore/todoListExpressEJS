const express = require('express');
const app = express();
const port = 3000;

const tasks = [
  {
    title: 'Learn to code',
    done: false,
  },
  {
    title: 'Test',
    done: true,
  }
];

console.log(tasks);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('todoList');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});