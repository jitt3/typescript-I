const myAwesome = () => {
  return {
    name: 'John',
    age: 30,
    email: 'asdasd@gmail.com,',
  }
}

type myFunctionType = typeof myAwesome
type MyFunctionReturnType = ReturnType<myFunctionType>
