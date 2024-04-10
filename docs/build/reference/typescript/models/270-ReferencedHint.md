
# ReferencedHint Model

This is the referenced version of a hint, main used for the uuid.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**reference** | [**FlattenedHint**](FlattenedHint)

## Example Model

```typescript
import { ReferencedHint } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ReferencedHint = {
    "schema": null,
    "id": null,
    "reference": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedHint
console.log(exampleParsed)
```


