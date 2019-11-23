
const express = require('express');

const app = express();

const mustacheExpress = require('mustache-express');

const port = process.env.PORT || 8000;



app.engine('html', mustacheExpress());

app.set('view engine', 'html');

app.set('jokers', __dirname + '/jokers');

app.use(express.static(__dirname + '/public'));



const jokerdata = ('./data')



app.get('/', (req, res) => {

    res.send('index',jokerdata);

  });



app.listen(port, () => {

  console.log(`Server started on ${port}`)

});