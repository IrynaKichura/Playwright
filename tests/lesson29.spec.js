import test, { expect } from '@playwright/test';

test.describe('Garage Page', () => {
  let token;
  test.beforeEach(async ({ request, browser }) => {
    const response = await request.post('api/auth/signin', {
      data: {
        email: 'Lesson21_user1@gmail.com',
        password: 'Password12345',
        remember: false,
      },
    });
    token = response.headers()['set-cookie'].split(';')[0];
    //console.log('Auth Token:', token);
  });
  test('Create, update, delete car', async ({ page, request }) => {
    // Try to create car - missing fields
    let postResponse = await request.post('api/cars', {
      headers: {
        Cookie: token,
      },
      data: {
        mileage: 777,
      },
    });
    let responseBody = await postResponse.json();
    expect(responseBody.status).toBe('error');
    expect(responseBody.message).toBe('Car brand id is required');

    // Create car - all fields present
    postResponse = await request.post('api/cars', {
      headers: {
        Cookie: token,
      },
      data: {
        carBrandId: 1,
        carModelId: 1,
        mileage: 777,
      },
    });

    responseBody = await postResponse.json();
    expect(responseBody.status).toBe('ok');

    const carId = responseBody.data.id;

    // Update car
    let putResponse = await request.put(`api/cars/${carId}`, {
      headers: {
        Cookie: token,
      },
      data: {
        carBrandId: 1,
        carModelId: 2,
        mileage: 3333,
      },
    });
    expect((await putResponse.json()).status).toBe('ok');

    // Delete car
    let deleteResponse = await request.delete(`api/cars/${carId}`, {
      headers: {
        Cookie: token,
      },
    });
    expect((await deleteResponse.json()).status).toBe('ok');

    // Try to delete non-existing car
    deleteResponse = await request.delete(`api/cars/${carId}`, {
      headers: {
        Cookie: token,
      },
    });
    expect((await deleteResponse.json()).status).toBe('error');
    expect((await deleteResponse.json()).message).toBe('Car not found');
  });
});
