
# ReferencedRange Model

This is a minimal version of a Range, with mainly an Id.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**reference** | [**FlattenedRange**](FlattenedRange)

## Example Model

```typescript
import { ReferencedRange } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ReferencedRange = {
    "schema": null,
    "id": null,
    "reference": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedRange
console.log(exampleParsed)
```


