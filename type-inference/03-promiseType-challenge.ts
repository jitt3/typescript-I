// write a function that returns a promise
// using typescript's utility types
// return the function's return value
const getContact = () => {
  return Promise.resolve({name: 'John', email: 'john@gmail.com'})
}
type asdas = typeof getContact
type asdasdasdas = ReturnType<asdas>
//the above should return the following type:
//{name: string, email: string}
