const express = require('express');
const morgan = require('morgan');

//express app
const app = express();

//reqister view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// middleware and static files

app.use(express.static('public'));

app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem Ipsum Dolor Sit Amet Consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem Ipsum Dolor Sit Amet Consectetur'},
        {title: 'How to defeat Bowser', snippet: 'Lorem Ipsum Dolor Sit Amet Consectetur'},
    ];

    //res.send('<p>home page</p>');
    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {

    //res.send('<p>about page</p>');
    res.render('about', {title: 'About'});
});

/* //redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
}); */

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new blog'});
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});