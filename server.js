const helpFromNpm = require('express');
const helpFromNpm2 = require('hbs');

let app = helpFromNpm();


//using HBS
app.set('view engine', 'helpFromNpm2');
helpFromNpm2.registerPartials(__dirname + '/views/partials');        //setting partials dir

helpFromNpm2.registerHelper('getCurrentDate', () => {               //injecting function in hbs
    return new Date()
});

helpFromNpm2.registerHelper('screamFunc', (text) => {
   return text.toUpperCase();
});

app.get('/titleHBS', (req, res) => {
    res.render('title.hbs', {
        authorName: 'Alex Smirnov',
        currentDate: new Date(),
        //partial injection
        headerText: 'site',

    });
});

app.use(helpFromNpm.static(__dirname + '/public'));

app.get('/directServerPage', (req, res) => {
    res.send('<h1> Sending homepage from server to browser directly </h1>');
});


app.listen(3000, () => {
    console.log('The server is running at localhost:3000/staticTitlePage.html');
    console.log('List of pages available: staticTitlePage.html, directServerPage, titleHBS');
});