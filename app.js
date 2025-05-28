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
    done: false,
  }
];

console.log(tasks);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.post('/task', (req, res) => {
  tasks.push({
    title: req.body.task,
    done: false,
  });

  res.redirect('/');
});

app.get('/', (req, res) => {
  res.render('todoList', { tasks });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});