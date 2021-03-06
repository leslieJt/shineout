export default options => (value, formdata, callback) => {
  const { message } = options
  if (value === undefined || value === null || value.length === 0) {
    callback(new Error(message))
  } else {
    callback(true)
  }
}
