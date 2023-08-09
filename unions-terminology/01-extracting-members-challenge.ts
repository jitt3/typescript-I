//create the following discriminated union
type discriminatedUnion =
  | {genre: 'rock'; band: string}
  | {genre: 'jazz'; instrument: string}
  | {genre: 'metal'; subgenre: string}
  | {genre: 'indie'; band: string}

//using a typescript utility EXTRACT the rock genre from the discriminated union
