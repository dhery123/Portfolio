require('dotenv').config();
const app = require('./server');

app.listen(app.get('port'), () => {
  console.log('Sever on port 3000', app.get('port'));
})

