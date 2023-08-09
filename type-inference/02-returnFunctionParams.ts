const myAwesomeFunction = (
  firstParam: boolean,
  options: {
    url: string
    headers: string[]
  },
) => {
  return {firstParam, options}
}

type MyFunctionType = typeof myAwesomeFunction

type MyFunctionParams = Parameters<MyFunctionType>
//Parameters https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype

type firstParamType = MyFunctionParams[0]
type secondParamType = MyFunctionParams[1]
