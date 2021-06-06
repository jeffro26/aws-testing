const middlewares = require("../../src/middleware/donationFunctions");
const cacheFunctions = require("../../src/cache/nodeCache");
const { mockCacheData } = require("../mockData");
const { createLogItem } = require("../../src/utils/createLog");

jest.mock("../../src/utils/createLog");
jest.mock("../../src/cache/nodeCache");

describe("Donation Functions", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  let req;
  let res;
  const next = jest.fn();
  it("Should call cache when supplied with all needed parameters", async () => {
    Date.now = jest.fn(() => 1487076708000);
    const { original, key, valObject } = mockCacheData[0];
    req = {
      body: original,
    };

    await middlewares.makeDonation(req, res, next);
    expect(cacheFunctions.setItemInCache).toHaveBeenCalledWith(key, valObject);
    expect(next).toHaveBeenCalled();
  });
  it("Should call createlog with error code when not supplied with data object", async () => {
    req = {
      body: {},
    };

    await middlewares.makeDonation(req, res, next);
    expect(createLogItem).toHaveBeenCalledWith("error", "ERR001");
  });
  it("Should return message when timeClientHasDonated function returns 2", async () => {
    cacheFunctions.timesClientHasDonated.mockReturnValue(2);
    const { original } = mockCacheData[0];

    req = {
      body: original,
    };

    await middlewares.makeResponse(req, res, next);
    expect(cacheFunctions.timesClientHasDonated).toHaveBeenCalled();
    expect(cacheFunctions.timesClientHasDonated).toHaveBeenCalledWith(
      850689877
    );
    expect(req.result).toEqual({ message: "Thank you for giving" });
    expect(next).toHaveBeenCalled();
  });
  it("Should return message when timeClientHasDonated function returns 1", async () => {
    cacheFunctions.timesClientHasDonated.mockReturnValue(1);
    const { original } = mockCacheData[0];

    req = {
      body: original,
    };

    await middlewares.makeResponse(req, res, next);
    expect(cacheFunctions.timesClientHasDonated).toHaveBeenCalled();
    expect(cacheFunctions.timesClientHasDonated).toHaveBeenCalledWith(
      850689877
    );
    expect(req.result).toEqual(undefined);
    expect(next).toHaveBeenCalled();
  });
});
