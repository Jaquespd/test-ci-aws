export const general = (res, status, json) => {
  res.status(status);
  res.json(json);
  res.end();
};
export const success = (res, json) => general(res, 200, json);
export const failure = (res, json) => general(res, 500, json);
export const unauthorized = (res, json) => general(res, 401, json);
