const NodeCache = require("node-cache");
const { createLogItem } = require("../utils/createLog");
//Internal cache to be used only for testing. Database solution to be implimented
let myCache;

const intializeCache = () => {
  try {
    myCache = new NodeCache();
    createLogItem("success", "SCC001");
  } catch {
    createLogItem("error", "ERR003");
  }
};

const setItemInCache = (key, obj) => {
  try {
    myCache.set(key, obj, 10000);
    createLogItem("success", "SCC002");
  } catch {
    createLogItem("error", "ERR004");
  }
};

const listAllKeys = () => {
  const list = myCache.keys();
  return list;
};

const timesClientHasDonated = (customerId) => {
  const listArray = listAllKeys();
  let newArray = [];
  let count;
  if (listArray) {
    listArray.forEach((item) => {
      const newString = item.substring(0, item.indexOf("-"));
      if (newString == customerId) {
        newArray.push(item);
      }
    });
    count = newArray.length;
  }
  return count;
};

module.exports = {
  intializeCache,
  setItemInCache,
  listAllKeys,
  timesClientHasDonated,
};
