const helpFromNpm = require('express');
const helpFromNpm2 = require('hbs');
const helpFromCore = require('fs');

const herokuPort = process.env.PORT || 3000;                        //making dynamic port for heroku

let app = helpFromNpm();

app.use((req, res, next) => {                                       //making operations with express requests
    let showDate = new Date().toString();
    let log = `${showDate}: ${req.method} ${req.url} `;
    console.log(log);
    helpFromCore.appendFileSync('logsOfTheServer.log', log + '\n');
    next();
});


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


app.listen(herokuPort, () => {
    console.log(`The server is running at localhost:${herokuPort}/titleHBS`);
    console.log('List of pages available: staticTitlePage.html, directServerPage, titleHBS');
});