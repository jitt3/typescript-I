const getContacts = () => {
  return Promise.resolve([{name: 'John', email: 'john@gmail.com', age: 30}])
}

type getContactTypeFn = typeof getContacts

type getContactsReturnRawType = ReturnType<getContactTypeFn>

type getContactReturnType = getContactsReturnRawType
