const airlines = {
  aeroMexico: 'AM',
  lufthansa: 'LH',
  delta: 'DL',
  airFrance: 'AF',
  anotherAirline: {
    name: 'asd',
  },
} as const

type airlinesT = typeof airlines
type aeroType = airlinesT['airFrance']
