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

    {
        username: 'ai_expert',
        title: 'Agentic AI Explained',
        content: 'Agentic AI (or Agent-based AI) is a type of artificial intelligence that can act independently, make decisions, and complete tasks on its own—instead of just responding to user prompts.'
    }
];

// Home - show all posts
app.get('/', (req, res) => {
    res.render('index', { posts });
});

app.get("/profile", (req, res) => {
    const user = {
        name: "Varun",
        bio: "MERN Stack Developer",
        avatar: "/images/default-avatar.png",
        location: "Bangalore, India",
        website: "https://example.com",
        websiteText: "example.com",
        longBio: "I build user-first web applications using the MERN stack, with a strong focus on responsive UI, clean code, and fast performance.",
        stats: {
            posts: posts.length,
            followers: 1860,
            following: 245
        }
    };

    res.render("profile", { user });
});

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
