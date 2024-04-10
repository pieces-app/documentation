
# Anchors Model

This is the plural of Anchor.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;Anchor&gt;**](Anchor)
**indices** | **\{ [key: string]: number; \}**
**score** | [**Score**](Score)

## Example Model

```typescript
import { Anchors } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Anchors = {
    "schema": null,
    "iterable": null,
    "indices": null,
    "score": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Anchors
console.log(exampleParsed)
```


