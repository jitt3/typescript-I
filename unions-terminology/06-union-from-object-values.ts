const airlinesC = {
  aeroMexico: 'AM',
  lufthansa: 'LH',
  delta: 'DL',
  airFrance: 'AF',
} as const

type airlinesType = typeof airlinesC

type excluded = Exclude<keyof airlinesType, 'aeroMexico'>

type airlinesTypeValues = (typeof airlinesC)[keyof typeof airlinesC]
