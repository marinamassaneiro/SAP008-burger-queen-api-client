import { createUser } from './contexts/api';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('createUser', () => {
  it("create a new user", async () => {
    const objeto = {
      createdAt: "2022-11-21T23:54:12.223Z",
      email: 'dodo@dodo.com',
      id: 1,
      name: 'dodo',
      restaurant: 'Burguer Queen',
      role: 'atendente',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhYWFhQGFhYWEuY29tIiwiaWQiOjcsImlhdCI6MTY2OTA3NDg1MiwiZXhwIjoxNzAwNjMyNDUyfQ',
      updatedAt: "2022-11-21T23:54:12.223Z",
    };
    jest.spyOn(window, 'fetch').mockResolvedValueOnce(objeto);
    const create = await createUser('dodo', 'dodo@dodo.com', '123456', 'atendente');
  
    expect(create).toEqual(objeto);
  })
});