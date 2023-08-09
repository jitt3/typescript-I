// create a discriminated union and convert the discriminator into a union type
type AnotherDiscriminator =
  | {genre: 'rock'; band: '4 members'}
  | {genre: 'jazz'; instrument: string}
  | {genre: 'metal'; subgenre: string}
  | {genre: 'indie'; band: '4 members'}
