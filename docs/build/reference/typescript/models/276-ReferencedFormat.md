
# ReferencedFormat Model

A reference to a format which at minimum must have the format\'s id. But in the case of a hydrated client API it may have a populated reference of type Format.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**reference** | [**FlattenedFormat**](FlattenedFormat)

## Example Model

```typescript
import { ReferencedFormat } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ReferencedFormat = {
    "schema": null,
    "id": 102ff265-fdfb-4142-8d94-4932d400199c,
    "reference": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedFormat
console.log(exampleParsed)
```


