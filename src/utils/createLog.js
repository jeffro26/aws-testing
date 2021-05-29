const { errorsTemplates } = require("../constants/errorConstants");
const { successTemplates } = require("../constants/successConstants");
const createError = require("http-errors");

const createLogItem = (type, internalHandlingCode) => {
  if (type === "error") {
    const error = errorsTemplates.find(
      (item) => item.internalCode == internalHandlingCode
    );
    if (error) {
      throw createError(error.code, error.message);
    }
  }
  if (type === "success") {
    const success = successTemplates.find(
      (item) => item.internalCode == internalHandlingCode
    );
    if (success) {
      console.log({ success });
    }
  } else {
    throw createError(500, "Unknown Error");
  }
};

module.exports = { createLogItem };
