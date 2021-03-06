const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // const nikki = { name: 'Nikki', age: 25, cool: true };
  // res.send('Hey! It works!');
  // res.json(nikki);
  // res.json(req.query);
  res.render('hello', {
    name: 'nikki',
    dog: req.query.dog,
    title: 'I love food'
  });
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
})

module.exports = router;
