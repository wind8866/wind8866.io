
const response404 = () => {
  return {
    header: {},
    body: '',
    code: 404,
  }
}


const utils = {
  '404': response404
};
module.exports = utils;