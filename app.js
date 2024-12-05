import express from 'express';
const app = express();
const port = 3000; // Default to 3000

  

const server = app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    try {
      res.send('Hello World');
    } catch (err) {
      console.error("Error handling request:", err);
      res.status(500).send('Something went wrong');
    }
  });

// Export the server for tests
export { server, app };
