const express = require('express');
var cors = require('cors');
const app = express();
const port = 4000;

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send({
      'text': 'hello world!!'
    })
  }
);

app.listen(port, () => console.log(`App listening on port ${port}!`));