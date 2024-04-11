
# ReferencedAnchor Model

This is the referenced version of a Anchor, main used for the uuid.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**reference** | [**FlattenedAnchor**](FlattenedAnchor)

## Example Model

```typescript
import { ReferencedAnchor } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ReferencedAnchor = {
    "schema": null,
    "id": null,
    "reference": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedAnchor
console.log(exampleParsed)
```


