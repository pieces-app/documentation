
# Assets

A base class for a collection of assets and some additional meta properties. Fully Populated with Formats internally (not just uuid\'s).

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;Asset&gt;**](Asset)
**indices** | **\{ [key: string]: number; \}**
**score** | [**Score**](Score)

## Example

```typescript
import { Assets } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Assets = {
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
const exampleParsed = JSON.parse(exampleJSON) as Assets
console.log(exampleParsed)
```


