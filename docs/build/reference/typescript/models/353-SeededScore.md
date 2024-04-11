
# SeededScore Model

This is the low level seeded score and will let us know what exactly we want to increment on our material.  Note: ONLY include one of these, as we will only increment one of the following.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**reuse** | **boolean**
**update** | **boolean**
**reference** | **boolean**
**priority** | **boolean**

## Example Model

```typescript
import { SeededScore } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededScore = {
    "schema": null,
    "reuse": null,
    "update": null,
    "reference": null,
    "priority": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededScore
console.log(exampleParsed)
```


