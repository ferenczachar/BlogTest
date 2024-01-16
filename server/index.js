const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/api/page1', (req, res) => {
    res.json({ content: 'This is Page 1' });
  });
  
  app.get('/api/page2', (req, res) => {
    res.json({ content: 'This is Page 2' });
  });

app.listen('5000', () => {
    console.log('Server is listening on port 5000');
})