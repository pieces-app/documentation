
# Aesthetics Model

These are aesthetics properties that will ensure the darkmode + font size and other aesthetics properties persist:)

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**theme** | [**Theme**](Theme)
**font** | [**Font**](Font)

## Example Model

```typescript
import { Aesthetics } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Aesthetics = {
    "schema": null,
    "theme": null,
    "font": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Aesthetics
console.log(exampleParsed)
```


