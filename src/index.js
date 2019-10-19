const app = require('./server');

// app.get('/', (req, res) => {
//     res.send('Welcome JS Community');
// })

// const cnn = require('./database');

// cnn();

app.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'));
});