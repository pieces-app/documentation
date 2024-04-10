
# Analyses Model


## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;Analysis&gt;**](Analysis)

## Example Model

```typescript
import { Analyses } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Analyses = {
    "schema": null,
    "iterable": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Analyses
console.log(exampleParsed)
```


