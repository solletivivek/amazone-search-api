const express = require('express');
const request = require('request-promise');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const apiKey = '2c9b9d5304f0e97477158939e4f6fa90';
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.get('/', (req, res) => {
    res.send('this is a web scraper amazon api designed by vivek');
});

// GET Product Details
app.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;
    try {
        const html = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);
        const result = JSON.parse(html);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result, null, 2)); // 2 spaces for indentation
    } catch (error) {
        res.status(500).json({ error });
    }
});

// GET Product review
app.get('/products/:productId/reviews', async (req, res) => {
    const { productId } = req.params;
    try {
        const html = await request(`${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`);
        const result = JSON.parse(html);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result, null, 2)); // 2 spaces for indentation
    } catch (error) {
        res.status(500).json({ error });
    }
});

// GET Product offers
app.get('/products/:productId/offers', async (req, res) => {
    const { productId } = req.params;
    try {
        const html = await request(`${baseUrl}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
        const result = JSON.parse(html);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result, null, 2)); // 2 spaces for indentation
    } catch (error) {
        res.status(500).json({ error });
    }
});

// GET search results
app.get('/search/:searchQuery', async (req, res) => {
    const { searchQuery } = req.params;
    try {
        const html = await request(`${baseUrl}&url=https://www.amazon.com/s?k=${searchQuery}`);
        const result = JSON.parse(html);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result, null, 2)); // 2 spaces for indentation
    } catch (error) {
        res.status(500).json({ error });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
