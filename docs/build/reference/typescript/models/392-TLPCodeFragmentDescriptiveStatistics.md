
# TLPCodeFragmentDescriptiveStatistics Model

Model for ML big query Data collection.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**user** | **string**
**os** | **string**
**language** | **string**
**length** | **number**
**ast** | **string**
**timestamp** | **string**
**asset** | **string**
**context** | **string**
**snippet** | **string**

## Example Model

```typescript
import { TLPCodeFragmentDescriptiveStatistics } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TLPCodeFragmentDescriptiveStatistics = {
    "schema": null,
    "user": null,
    "os": null,
    "language": null,
    "length": null,
    "ast": null,
    "timestamp": null,
    "asset": null,
    "context": null,
    "snippet": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeFragmentDescriptiveStatistics
console.log(exampleParsed)
```


