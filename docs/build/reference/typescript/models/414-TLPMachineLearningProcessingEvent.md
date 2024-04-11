
# TLPMachineLearningProcessingEvent Model


## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**code** | [**TLPCodeProcessing**](TLPCodeProcessing)

## Example Model

```typescript
import { TLPMachineLearningProcessingEvent } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TLPMachineLearningProcessingEvent = {
    "schema": null,
    "code": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPMachineLearningProcessingEvent
console.log(exampleParsed)
```


