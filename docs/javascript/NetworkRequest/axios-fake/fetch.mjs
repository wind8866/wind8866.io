const fetchRequest = async (options) => {
  console.log(options);
  const res = await fetch(options.url);
  return new Promise((resolve, reject) => {
    resolve(res);
  })
}
export default fetchRequest;