type musicGen =
  | {genre: 'rock'; band: '4 members'}
  | {genre: 'jazz'; instrument: string}
  | {genre: 'metal'; subgenre: string}
  | {genre: 'indie'; band: '4 members'}

type NonBandGenre = Exclude<musicGen, {band: '4 members'}>
