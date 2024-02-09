import uuid from "react-uuid";

export const getUniqueID = () => {
  let id = uuid();

  return id;
};

import moment from "moment/moment";

export const getCurrentTimeStamp = (timeFormat) => {
  return moment().format(timeFormat);
};
