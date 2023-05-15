const { log } = require('console');
const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog')

//express app
const app = express();

//connect to db
const dbURI = 'mongodb+srv://kaleb:kaleb89442632@cluster0.luteflz.mongodb.net/node?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((res)=>{})
.catch((err)=>{console.log(err);})

//register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000)

//add blog
app.get('/add-blog', (req, res)=>{
    const blog = new Blog({
        title: 'New Blog 2',
        snippet: 'About this blog',
        body: 'more about this blog'
    });

    blog.save()
        .then((result) => {res.send(result)})
        .catch((err) => {console.log(err)})
})

//get all blogs
app.get('/all-blog', (req, res) => {
    Blog.find().sort({createdAt: -1}).exec()
    .then((result) => {res.send(result)})
    .catch((err) => {console.log(err)})
})

//get single blog
app.get('/single-blog', (req, res) => {
    Blog.findById('6461e68724813941f53eadf3')
    .then((result) => {res.send(result)})
    .catch((err) => {console.log(err)})
})



app.get('/', (req, res) => {
    Blog.find()
    .then((result) =>{
        res.render('index', {title: 'Home Page', blogs: result});
    })
    .catch((err) => {console.log(err)})
    // res.sendFile('./views/index.html', {root: __dirname});
    // res.send('<p>Home Page</p>')
    // res.render('index', {title: 'Home Page', blogs: blogs});
})
app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', {root: __dirname});
    // res.send('<p>About Page</p>')
    res.render('about', {title: 'About Page'});
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create Blog'})
})

//404
app.use((req, res)=>{
    res.status(404).render('404', {title: '404'});
    // res.sendFile('./views/404.html', {root: __dirname});
})
