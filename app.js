import express from 'express';
const app = express();
const port = process.env.PORT || 3000; // Default to 3000

app.get('/', (req, res) => {
    res.send('Hello World');
});

const server = app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});

// Export the server for tests
export { server, app };
