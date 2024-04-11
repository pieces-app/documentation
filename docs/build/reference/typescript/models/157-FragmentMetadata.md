
# FragmentMetadata Model

This is a model for metadata of a file!

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**ext** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum)

## Example Model

```typescript
import { FragmentMetadata } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FragmentMetadata = {
    "schema": null,
    "ext": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FragmentMetadata
console.log(exampleParsed)
```


