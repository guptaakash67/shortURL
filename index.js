// const express = require("express");
// const { connectToMongoDB } = require("./connect");
// const urlRoute = require('./routes/url');
// const URL = require('./models/url');


// const app = express(); // Initialize the Express app
// const PORT = 8001; // Use uppercase consistently for PORT

// connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
//     .then(() => console.log('MongoDB is connected'))
//     .catch(err => console.error('Failed to connect to MongoDB:', err));

// // Middleware
// app.use(express.json()); // Parse JSON bodies
// app.use("/url", urlRoute);

// app.get('/:shortId', async (req, res) => {
//     const shortID = req.params.shortId;
//     const entry = await URL.findOneAndUpdate(
//         {
//             shortID,
//         },
//         {
//             $push: {
//                 visitHistory: {
//                     timestamp: Date.now(),
//                 },
//             },
//         })
//     res.redirect(entry.redirectURL);
// })

// // Start the server
// app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));


const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require('./routes/url');
const URL = require('./models/url');

const app = express();
const PORT = 8001;

// Database connection
connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());
app.use("/url", urlRoute);

// Redirect route with proper error handling
app.get('/:shortId', async (req, res) => {
    try {
        const shortId = req.params.shortId;
        
        // Validate short ID format
        if (!shortId || typeof shortId !== 'string') {
            return res.status(400).json({ error: 'Invalid short URL' });
        }

        const entry = await URL.findOneAndUpdate(
            { shortId },
            { $push: { visitHistory: { timestamp: Date.now() } } },
            { new: true }
        );

        // Check if entry exists
        if (!entry || !entry.redirectURL) {
            return res.status(404).send(`
                <h1>URL Not Found</h1>
                <p>The requested short URL does not exist</p>
            `);
        }

        res.redirect(entry.redirectURL);
    } catch (error) {
        console.error('Redirect error:', error);
        res.status(500).send(`
            <h1>Server Error</h1>
            <p>Something went wrong. Please try again later.</p>
        `);
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));