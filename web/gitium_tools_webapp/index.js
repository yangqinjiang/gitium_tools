const createSeed = require('gitium.seed.js');
const express = require('express')
const app = express()
//静态目录
app.use('/html', express.static('html'))
app.get('/', (req, res) => res.send('This is gitium tools! <a href="/html/index.html">点击这里打开</a>'));
//生成 gitium_seed
app.post('/api/create_seed', function (req, res) {
  var seed = createSeed.createSeed(req.query.name, req.query.pass);
  res.send(seed);
})
app.listen(3000, () => console.log('app listening on port 3000!'))