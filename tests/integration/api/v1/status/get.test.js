test ('GET to /status should return status 200', async () => {
  const res = await fetch('http://localhost:3000/api/v1/status');
  const data = await res.json();
  expect(data).toEqual({ status: 'ok', dbStatus: 'ok' });
});