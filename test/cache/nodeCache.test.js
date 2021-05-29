const NodeCache = require("node-cache");
jest.mock("node-cache", () =>
  jest.fn(() => {
    return {
      set: jest.fn(),
      keys: jest.fn().mockImplementation(() => {
        return ["112-496", "112-8395", "112-3956", "11245-395863"];
      }),
    };
  })
);

const { createLogItem } = require("../../src/utils/createLog");

jest.mock("../../src/utils/createLog");
const {
  intializeCache,
  listAllKeys,
  setItemInCache,
  timesClientHasDonated,
} = require("../../src/cache/nodeCache");

describe("Node Cache", () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });
  it("Should call logger with success message when initialisation function is succesful", async () => {
    await intializeCache();
    expect(createLogItem).toHaveBeenCalledWith("success", "SCC001");
  });

  it("Should call logger with success message when cache set function is succesful", async () => {
    const key = 11234;
    const objectItem = { item: 234, value: 43 };
    await intializeCache();
    await setItemInCache(key, objectItem);
    expect(createLogItem).toHaveBeenCalledWith("success", "SCC002");
  });
  it("Should call logger with success message when cache keys function is succesfull", async () => {
    await intializeCache();
    const data = await listAllKeys();
    expect(NodeCache).toHaveBeenCalled();
    expect(data).toEqual(["112-496", "112-8395", "112-3956", "11245-395863"]);
  });
  it("Should return correct count of customer ID", async () => {
    await intializeCache();
    const data = await timesClientHasDonated(112);
    expect(NodeCache).toHaveBeenCalled();
    expect(data).toEqual(3);
  });
});

// describe("Node Cache Fails", () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//     jest.resetModules();
//   });
//   it("Should call logger with error message when initialisation function is fails", async () => {
//     jest.mock("node-cache", () => jest.fn());
//     const doSomething = jest.fn();
//     await intializeCache(5343434);
//     expect(createLogItem).toHaveBeenCalledWith("error", "ERR003");
//   });
//   it("Should call logger with error message when cache set function fails", async () => {
    // jest.mock("node-cache", () =>
    //   jest.fn(() => {
    //     return {
    //       keys: jest.fn().mockImplementation(() => {
    //         throw Error('item cannot be set')
    //       }),
    //     };
    //   })
    // );
    // await setItemInCache();
    // expect(createLogItem).toHaveBeenCalledWith("error", "ERR004");
//   });
// });
