type musicGenres =
  | {genre: 'rock'; band: string}
  | {genre: 'jazz'; instrument: string}
  | {genre: 'metal'; subgenre: string}

const myMusicGenre = (music: musicGenres) => {
  if (music.genre === 'rock' || music.genre === 'metal') {
  }
}
