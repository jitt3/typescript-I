const contact = {
  name: 'John',
  phone: '123-456-7890',
  email: 'john@gmail.com',
  age: 30,
  address: {
    street: ['123 St'],
  },
}
type contactType = typeof contact
type name = contactType['name']
type street = contactType['address']['street']
