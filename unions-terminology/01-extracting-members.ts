type musicGenre =
  | {genre: 'rock'; band: '4'}
  | {genre: 'jazz'; instrument: string}
  | {genre: 'metal'; subgenre: string}
  | {genre: 'indie'; band: number}

type RockGenre = Extract<musicGenre, {band: '4'}>
