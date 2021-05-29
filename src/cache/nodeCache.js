const NodeCache = require("node-cache");
//Internal cache to be used only for testing. Database solution to be implimented
let myCache;

const intializeCache = () => {
  myCache = new NodeCache();

  console.log("cache initialised");
};

const setItemInCache = (key, obj) => {
  myCache.set(key, obj, 10000);
};

const listAllKeys = () => {
  const list = myCache.keys();
  return list;
};

const timesClientHasDonated = (customerId) => {
  const listArray = listAllKeys();;
  let newArray= []
  let count;
  if (listArray) {
      listArray.forEach(item => {
        if(item.includes(customerId)){
            newArray.push(item)
        }
      })
    count = newArray.length;
  }
  return count;
};

module.exports = { intializeCache, setItemInCache, timesClientHasDonated };
