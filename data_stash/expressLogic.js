const helpFromNpm = require('express');

let app = helpFromNpm();

app.use(helpFromNpm.static(__dirname + '/public')); //open root to all html pages in '/public'

app.get('/page1', (req, res) => {
    res.send('<h1> Sending homepage from server to browser </h1>');

});

app.get('/page2', (req, res) =>{
    res.send({
        name: 'Al2',
        doing: 'code',
        likes: [
            'Chinchillas',
            'RobotChicken',
            'Gattaka'
        ]
    });
});

app.get('/error', (req, res) => {
   res.send({
       errorMessage: 'Something went wrong \'404\''
   })
});

app.listen(3000, () => {
    console.log('The server is running at localhost:3000/title.html');
    console.log('Other pages available: page1, page2, error');
});   // bind app to port