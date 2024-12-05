import app from './app.js'; // Use import since you're using ES modules
import request from 'supertest'; // Assuming you're using supertest for HTTP requests
import assert from 'assert'; // To assert equality

describe('GET /', () => {
    it('should return Hello World', async () => {
        const response = await request(app).get('/');
        console.log(response.text);  // Optional, to view the response in the console
        assert.strictEqual(response.text, 'Hello World');
    });
});
