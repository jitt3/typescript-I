type ReturnWhatIsPassed<HOLA> = HOLA

type myString = ReturnWhatIsPassed<string>

type Contact = {
  name: string
  email: string
}
type myObj = ReturnWhatIsPassed<Contact>

type Optional<T> = T | undefined | null

type OptionalType = Optional<boolean>

type GlobalStoreDataAndError<TData, TError> = {
  data: TData
  error: TError
}

type presenceData = GlobalStoreDataAndError<
  {
    presence: 'online' | 'offline'
  },
  boolean
>
type currentUser = GlobalStoreDataAndError<{name: string}, string>
