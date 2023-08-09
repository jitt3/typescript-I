const airlinesA = {
  aeroMexico: 'AM',
  lufthansa: 'LH',
  delta: 'DL',
  airFrance: 'AF',
} as const

type airlinesTypeA = typeof airlinesA
type allAirlinesA = airlinesTypeA[keyof airlinesTypeA]

//Bonus extracting a union from array values ???
