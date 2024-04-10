
# Formats Model

A base class for a collection of formats and some additional meta properties.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;Format&gt;**](Format)

## Example Model

```typescript
import { Formats } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Formats = {
    "schema": null,
    "iterable": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Formats
console.log(exampleParsed)
```


