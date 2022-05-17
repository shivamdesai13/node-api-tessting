const baseUrl = "http://localhost:8000/students";
const AXIOS = require("axios");
const CHANCE = require("chance");
let chance = new CHANCE();

const payload = {
  name: "reena",
  email: "reema@111.com",
  phone: chance.phone({ formatted: false }),
  address: "indore",
};

describe("to get user", () => {
  test(" getting user successful", async () => {
    const result = await AXIOS.get(baseUrl, payload);
    expect(result.status).toEqual(200);

    const result2 = await AXIOS.delete(
      `http://localhost:8000/students/${result.data[0]._id}`
    );
    expect(result2.status).toEqual(200);
    expect(result2.data.id).toEqual(result.data[0]._id);
    expect(typeof result2.data.id).toBe("string");
    expect(typeof result2.data.message).toBe("string");
    expect(result2.data.message).toContain("account");
  });
});
