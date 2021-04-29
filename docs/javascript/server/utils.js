
const response404 = () => {
  return {
    header: {},
    body: '',
    code: 404,
  }
}
const sleep = (time) => {
  return new Promise(resolve => { setTimeout(resolve, time) });
}


const utils = {
  '404': response404,
  sleep
};
module.exports = utils;