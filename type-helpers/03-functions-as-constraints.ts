type ParametersAndReturnType<T extends (...args: any) => any> = {
  params: Parameters<T>
  returnType: ReturnType<T>
}

type fnOne = ParametersAndReturnType<(a: string, b: number) => boolean>
type fnTwo = ParametersAndReturnType<(a: () => void) => () => void>
type fnThree = ParametersAndReturnType<
  (options: {url: string; headers: unknown}) => Promise<unknown>
>
