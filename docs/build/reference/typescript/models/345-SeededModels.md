
# SeededModels Model

This is a Model that will hold an iterable of SeededModels.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;SeededModel&gt;**](SeededModel)

## Example Model

```typescript
import { SeededModels } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededModels = {
    "schema": null,
    "iterable": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededModels
console.log(exampleParsed)
```


