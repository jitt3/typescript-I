type musicG =
  | {genre: 'rock'; band: '4 members'}
  | {genre: 'jazz'; instrument: string}
  | {genre: 'metal'; subgenre: string}
  | {genre: 'indie'; band: '4 members'}

type Genres = musicG['genre']
