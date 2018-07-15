const helpFromNpm = require('express');
const helpFromNpm2 = require('hbs');

let app = helpFromNpm();

app.use(helpFromNpm.static(__dirname + '/public'));

app.get('/page1', (req, res) => {
    res.send('<h1> Sending homepage from server to browser directly </h1>');
});

//using HBS
app.set('view engine', 'helpFromNpm2');
app.get('/titleHBS', (req, res) => {
    res.render('title.hbs', {
        authorName: 'Alex Smirnov',
        currentDate: new Date(),

    });
});

app.listen(3000, () => {
    console.log('The server is running at localhost:3000/titlePage.html');
    console.log('List of pages available: titlePage.html, page1, titleHBS');
});