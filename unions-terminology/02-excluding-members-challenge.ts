//create a type that excludes the band
// property from the discriminated union
type myDiscriminator =
  | {genre: 'rock'; band: '4 members'}
  | {genre: 'jazz'; instrument: string}
  | {genre: 'metal'; subgenre: string}
  | {genre: 'indie'; band: '4 members'}
