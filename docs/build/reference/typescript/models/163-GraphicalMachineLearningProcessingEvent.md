
# GraphicalMachineLearningProcessingEvent Model


## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**ocr** | [**GraphicalOCRProcessing**](GraphicalOCRProcessing)
**image** | [**GraphicalImageProcessing**](GraphicalImageProcessing)
**svg** | [**GraphicalSVGStatistics**](GraphicalSVGStatistics)

## Example Model

```typescript
import { GraphicalMachineLearningProcessingEvent } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: GraphicalMachineLearningProcessingEvent = {
    "schema": null,
    "ocr": null,
    "image": null,
    "svg": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GraphicalMachineLearningProcessingEvent
console.log(exampleParsed)
```


