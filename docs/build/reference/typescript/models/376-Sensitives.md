
# Sensitives

This is a model that represents many individual sensitive pieces of data.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;Sensitive&gt;**](Sensitive)
**score** | [**Score**](Score)

## Example

```typescript
import { Sensitives } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Sensitives = {
    "schema": null,
    "iterable": null,
    "score": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Sensitives
console.log(exampleParsed)
```


