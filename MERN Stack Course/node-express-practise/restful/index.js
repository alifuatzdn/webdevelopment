const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override')
uuid();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
  {
    id: uuid(),
    username: 'Ali',
    comment: 'asdasdasdasdasdasdasdasd'
  },
  {
    id: uuid(),
    username: 'Irmak',
    comment: 'bsdasdasdaskajfhjsadj'
  },
  {
    id: uuid(),
    username: 'Ahmet',
    comment: 'chhducehukdfsnkdlcsae'
  },
  {
    id: uuid(),
    username: 'Ayşe',
    comment: 'dejjaisnksnvafaeisfjlas'
  }
];

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments })
});

app.get('/comments/new', (req, res) => {
  res.render('comments/new');
})

app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/show', { comment })
})

app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  const newComment = req.body.comment
  const foundComment = comments.find(c => c.id === id);
  foundComment.comment = newComment;
  res.redirect('/comments');
})

app.get('/comments/:id/edit', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/edit', { comment });
})

app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments = comments.filter(c => c.id !== id);
  res.redirect('/comments');
})

app.get('/tacos', (req, res) => {
  res.send('GET /tacos response');
});

app.post('/tacos', (req, res) => {
  const { name, age } = req.body;
  res.send(`Your name is ${name} and your age is ${age}.`);
});

app.listen(3000, () => {
  console.log('SERVER IS LISTENING ON PORT 3000');
});