const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());


// In-memory storage
let posts = [
    {
        username: 'admin',
        title: 'USA VS Iran',
        content: 'On 28 February 2026, the United States and Israel launched a war with surprise airstrikes on sites and cities across Iran, killing Supreme Leader Ali Khamenei and several other Iranian officials. Iran responded with missile and drone strikes against Israel, US bases, and US-allied countries in the Middle East.'
    },
    {
        username: 'reporter',
        title: 'PETROL PRICES',
        content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.'
    },
<<<<<<< HEAD
=======
     {
        username: 'deliotte',
        title: 'drive for 2026',
        content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.'
    }
>>>>>>> fb7bd1a5870f7070b757a35fb9d13c3b0bf25746
];

// Home - show all posts
app.get('/', (req, res) => {
    res.render('index', { posts });
});

// Show add form
app.get('/add', (req, res) => {
    res.render('add');
});

// Add post
app.post('/add', (req, res) => {
    const { username, title, content } = req.body;
    posts.push({ username, title, content });
    res.redirect('/');
});

// Show edit form
app.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    res.render('edit', { post: posts[id], id });
});

// Update post
app.post('/edit/:id', (req, res) => {
    const id = req.params.id;
    posts[id] = req.body;
    res.redirect('/');
});

// Delete post
app.post('/delete/:id', (req, res) => {
    const id = req.params.id;
    posts.splice(id, 1);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
