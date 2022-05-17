const baseUrl = "http://localhost:8000/students";
const AXIOS = require("axios");
const CHANCE = require("chance");
let chance = new CHANCE();

const payload = {
  name: chance.name(),
  email: chance.email(),
  phone: chance.phone({ formatted: false }),
  address: chance.city(),
};

describe("Test For Register Confirmation", () => {
  test("registration successful", async () => {
    const result = await AXIOS.post(baseUrl, payload);
    expect(result.status).toEqual(201);
    expect(result.data).not.toBeNull();
    expect(result.data.name).toBe(payload.name);
  });
});
