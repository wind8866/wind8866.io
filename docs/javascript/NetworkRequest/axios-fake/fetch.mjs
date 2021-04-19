
const fetch = (options) => {
  console.log()
}
const fetchRequest = (options) => {
  console.log(options);
  const res = await fetch()
  return new Promise((resolve, reject) {
    resolve('resolve')
  })
}
export default fetchRequest;