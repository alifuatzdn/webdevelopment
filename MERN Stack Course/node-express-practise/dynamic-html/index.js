const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('home.ejs');
})

app.get('/cats', (req, res) => {
  const cats = ['pamuk', 'tekir', 'minnoş'];
  res.render('cats.ejs', { cats });
})

app.get('/random', (req, res) => {
  const num = Math.floor(Math.random() * 10)
  res.render('random.ejs', { num });
})

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render('subpage.ejs', { ...data });
  }
  else {
    res.render('notfound.ejs', { subreddit })
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

