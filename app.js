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

app.get('/task/:id/done', (req, res) => {
  tasks[req.params.id].done = true;
  res.redirect('/');
});

app.get('/task/:id/delete', (req, res) => {
  tasks.splice(req.params.id, 1);
  res.redirect('/');
});

app.get('/', (req, res) => {
  res.render('todoList', { tasks });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});