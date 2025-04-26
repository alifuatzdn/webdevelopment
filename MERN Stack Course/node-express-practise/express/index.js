const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('HOME PAGE');
});

app.get('/r/:subpage/:id', (req, res) => {
  const { subpage, id } = req.params;
  res.send(`<h1>You are in the ${subpage} subpage. id: ${id}</h1>`);
});

app.get('/deneme', (req, res) => {
  const { q } = req.query;
  res.send(`<h1>You are looking for me and ${q}</h1>`);
});

app.get('*', (req, res) => {
  res.send("<h1>I don't know this page</h1>");
});

app.listen(3000, () => {
  console.log('LISTINING ON PORT 3000');
})