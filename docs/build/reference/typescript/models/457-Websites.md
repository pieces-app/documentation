
# Websites Model

This is a specific model for related websites to an asset.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;Website&gt;**](Website)
**indices** | **\{ [key: string]: number; \}**
**score** | [**Score**](Score)

## Example Model

```typescript
import { Websites } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Websites = {
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
const exampleParsed = JSON.parse(exampleJSON) as Websites
console.log(exampleParsed)
```


