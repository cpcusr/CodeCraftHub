// Example test setup, can be expanded with actual tests
const request = require('supertest');
const app = require('../src/app');

describe('User Service', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({ username: 'testuser', password: 'password' });
    expect(res.statusCode).toEqual(201);
  });

  it('should login a user', async () => {
    const res = await request(app)
      .post('/api/users/login')
      .send({ username: 'testuser', password: 'password' });
    expect(res.statusCode).toEqual(200);
  });
});