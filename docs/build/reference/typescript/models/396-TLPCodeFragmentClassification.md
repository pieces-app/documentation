
# TLPCodeFragmentClassification

Model for ML big query classification.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**asset** | **string**
**model** | **string**
**created** | **string**
**classification** | **string**
**probability** | **number**
**context** | **string**
**distribution** | **string**
**metadata** | [**TLPCodeFragmentClassificationMetadata**](TLPCodeFragmentClassificationMetadata)
**user** | **string**
**latency** | **number**
**system** | [**SystemExecutionInformation**](SystemExecutionInformation)

## Example

```typescript
import { TLPCodeFragmentClassification } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TLPCodeFragmentClassification = {
    "schema": null,
    "asset": null,
    "model": null,
    "created": null,
    "classification": null,
    "probability": null,
    "context": null,
    "distribution": null,
    "metadata": null,
    "user": null,
    "latency": null,
    "system": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeFragmentClassification
console.log(exampleParsed)
```


