test("GET to /status should return status 200", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  const data = await res.json();

  expect(res.status).toBe(200);
  expect(data).toHaveProperty("updated_at");
  expect(data.updated_at).toBeDefined();
  expect(data).toHaveProperty("version");
  expect(data.version).toBeDefined();
  expect(data.version).toEqual("15.18");
  expect(data).toHaveProperty("max_connections");
  expect(data.max_connections).toBeDefined();
  expect(data.open_connections).toBeDefined();
  expect(data.open_connections).toEqual(1);

  const parsedDate = new Date(data.updated_at);
  expect(parsedDate.toISOString()).toBe(data.updated_at);
});
