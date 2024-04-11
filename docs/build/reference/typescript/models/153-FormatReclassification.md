
# FormatReclassification Model

This is a model that will represent the miminum properties required to update the classification of this format.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**ext** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum)
**format** | [**Format**](Format)

## Example Model

```typescript
import { FormatReclassification } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FormatReclassification = {
    "schema": null,
    "ext": null,
    "format": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FormatReclassification
console.log(exampleParsed)
```


