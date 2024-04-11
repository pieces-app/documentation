
# TextLocation Model

This is a generic model that is used for text location.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**text** | **string**
**start** | **number**
**end** | **number**

## Example Model

```typescript
import { TextLocation } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TextLocation = {
    "schema": null,
    "text": null,
    "start": null,
    "end": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TextLocation
console.log(exampleParsed)
```


