const middlewares = require("../../src/middleware/donationFunctions");
const cacheFunctions = require("../../src/cache/nodeCache");
const { createLogItem } = require("../../src/utils/createLog");

jest.mock("../../src/utils/createLog");

describe("Donation Functions", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("Should call the correct middlewares when the POST method is called", async () => {
   
  });
});
