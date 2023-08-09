type templateLiteralUnion = `${'hello' | 'world'}${'world' | 'hello'}`

type obj = Record<templateLiteralUnion, string>
