const musicGenres = {
  rock: {id: 1, bands: ['Led Zeppelin', 'Queen', 'Pink Floyd']},
  metal: {id: 2, bands: ['Metallica', 'Iron Maiden', 'Judas Priest']},
  indie: {id: 3, bands: ['The Smiths', 'Arctic Monkeys', 'The Strokes']},
  jazz: {id: 4, bands: ['Miles Davis', 'John Coltrane', 'Bill Evans']},
  jazz1: {id: 4, bands: ['Miles Davis', 'John Coltrane', 'Bill Evans']},
}

type MusicGenres = typeof musicGenres
//keyof https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types
type musicGenresKeys = keyof MusicGenres
