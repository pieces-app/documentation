
# SaveSuggestion Model

This is the SaveSuggestion. Mainly creating an additional model here because I imagine that we will want to add some additional data to this in the future (potentially with more numerical data that is emitted from the ML Models)  **Note: suggested is required here because we will want to say if we reccomend to take this action of save or not.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**suggested** | **boolean**

## Example Model

```typescript
import { SaveSuggestion } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SaveSuggestion = {
    "schema": null,
    "suggested": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SaveSuggestion
console.log(exampleParsed)
```


