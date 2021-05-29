const { errorsTemplates } = require("../constants/errorConstants");
const createError = require("http-errors");

const createLogItem = (type, internalHandlingCode) => {
  if (type === "error") {
    const error = errorsTemplates.find(
      (item) => item.internalCode == internalHandlingCode
    );
    if (error) {
      createError(error.code, err);
    }
  }
};
