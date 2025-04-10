import { test, expect } from '@playwright/test';

test('API Test: Fetch and validate deck of cards', async ({ request }) => {
  // Make a GET request to shuffle a new deck of cards
  const response = await request.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  
  // Assert that the response status is 200
  expect(response.status()).toBe(200);

  // Parse the JSON response
  const responseBody = await response.json();
  console.log('Response Body:', responseBody);

  // Validate the response structure and data
  expect(responseBody).toHaveProperty('success', true);
  expect(responseBody).toHaveProperty('deck_id');
  expect(responseBody).toHaveProperty('remaining', 52);
  expect(responseBody).toHaveProperty('shuffled', true);

  console.log('Deck ID:', responseBody.deck_id);
});