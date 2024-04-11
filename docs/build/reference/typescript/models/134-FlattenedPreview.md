
# FlattenedPreview Model

These are the references of the formats **Only UUIDS**

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**base** | **string**
**overlay** | **string**

## Example Model

```typescript
import { FlattenedPreview } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedPreview = {
    "schema": null,
    "base": null,
    "overlay": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedPreview
console.log(exampleParsed)
```


