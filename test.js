import app from './app.js';  // Use import since you're using ES modules
import request from 'supertest';  // Assuming you're using supertest for HTTP requests
import assert from 'assert';  // To assert equality
import http from 'http';

let server;

before((done) => {
  // Dynamically assign a free port
  server = http.createServer(app);
  
  server.listen(0, () => {  // '0' lets the OS pick an available port
    const address = server.address();
    console.log(`Server running on port ${address.port}`);
    done();
  });
});

after(() => {
  // Close the server after tests complete
  server.close();
});

describe('GET /', () => {
  it('should return Hello World', async () => {
    const response = await request(server).get('/');
    console.log(response.text);  // Optional, to view the response in the console
    assert.strictEqual(response.text, 'Hello World');
  });
});
