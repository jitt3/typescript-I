type GlobalStore<TData, TError = undefined> = {
  data: TData
  error: TError
}

type GlobalLayout = GlobalStore<{mediaCalls: boolean}, Error>
