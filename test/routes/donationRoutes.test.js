const httpMocks = require("node-mocks-http");
const router = require("../../src/routes/donationRoutes");
const middlewares = require("../../src/middleware/donationFunctions");
jest.mock("../../src/middleware/donationFunctions");

describe("Donation Routes", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("Should call the correct middlewares when the POST method is called", async () => {
    middlewares.makeDonation.mockImplementation((req, res, next) => {
      next();
    });

    middlewares.makeResponse.mockImplementation((req, res, next) => {
      req.result = "this is a test";
      next();
    });

    const request = httpMocks.createRequest({
      method: "POST",
      url: "/donate",
      body: {
        data: {
          customerId: 850689877,
          amount: 200.92,
          currency: "AMERICAN DOLLARS",
        },
      },
    });

    const response = httpMocks.createResponse();
    await router(request, response);
    const data = response._getJSONData();
    Object.keys(middlewares).forEach((middleware) => {
      expect(middlewares[middleware]).toHaveBeenCalled();
    });
    expect(data).toEqual("this is a test");
  });
});
