/**
 * Test suite for EvoGit Web App
 *
 * This file contains unit tests for the main App function.
 * Run tests with: npm test
 */

const App = require('./app.js');

describe('App', () => {
  test('should be a function', () => {
    expect(typeof App).toBe('function');
  });

  test('should return a greeting message', () => {
    const result = App();
    expect(result).toBe('Hello');
  });

  test('should return a string', () => {
    const result = App();
    expect(typeof result).toBe('string');
  });

  test('should not return null or undefined', () => {
    const result = App();
    expect(result).not.toBeNull();
    expect(result).not.toBeUndefined();
  });

  test('should have consistent return value', () => {
    const firstCall = App();
    const secondCall = App();
    expect(firstCall).toEqual(secondCall);
  });
});
