import status from '../app';

test('healthy', () => {
  const char = {
    name: 'Маг',
    health: 85,
  };

  expect(status(char)).toBe('healthy');
});

test('wounded', () => {
  const char = {
    name: 'Маг',
    health: 45,
  };

  expect(status(char)).toBe('wounded');
});

test('critical', () => {
  const char = {
    name: 'Маг',
    health: 10,
  };

  expect(status(char)).toBe('critical');
});
