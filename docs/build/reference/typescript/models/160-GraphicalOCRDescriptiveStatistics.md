
# GraphicalOCRDescriptiveStatistics Model

Model for monitoring and evaluating the OCR feature

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**asset** | **string**
**user** | **string**
**model** | **string**
**created** | **string**
**os** | **string**
**confidence** | [**GraphicalOCRDescriptiveStatisticsConfidence**](GraphicalOCRDescriptiveStatisticsConfidence)
**duration** | **string**

## Example Model

```typescript
import { GraphicalOCRDescriptiveStatistics } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: GraphicalOCRDescriptiveStatistics = {
    "schema": null,
    "asset": null,
    "user": null,
    "model": null,
    "created": null,
    "os": null,
    "confidence": null,
    "duration": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GraphicalOCRDescriptiveStatistics
console.log(exampleParsed)
```


