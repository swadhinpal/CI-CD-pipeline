import express from 'express';  // ES module import syntax
const app = express();
const port = process.env.PORT || 3000;

console.log('Initializing server...');

app.get('/', (req, res) => {
    console.log('Received GET request at /');
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});

export default app;  // Use default export for the app
