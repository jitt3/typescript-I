//create the following object
const anotherReadonlyObj = {
  aeroMexico: 'AM',
  lufthansa: 'LH',
  delta: 'DL',
  airFrance: 'AF',
} as const

//create a type that represents the values of the object as a union,
//excluding the 'aeroMexico' value
