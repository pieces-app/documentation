
# TLPCodeFragmentReclassification Model

Model for ML big query Reclassification.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**asset** | **string**
**model** | **string**
**created** | **string**
**updates** | [**TLPCodeFragmentReclassificationUpdates**](TLPCodeFragmentReclassificationUpdates)
**user** | **string**
**context** | **string**

## Example Model

```typescript
import { TLPCodeFragmentReclassification } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TLPCodeFragmentReclassification = {
    "schema": null,
    "asset": null,
    "model": null,
    "created": null,
    "updates": null,
    "user": null,
    "context": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeFragmentReclassification
console.log(exampleParsed)
```


