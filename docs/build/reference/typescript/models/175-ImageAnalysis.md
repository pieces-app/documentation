
# ImageAnalysis

This is a model that represents all the information collected during the processing of an image.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**analysis** | **string**
**ocr** | [**OCRAnalysis**](OCRAnalysis)

## Example

```typescript
import { ImageAnalysis } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ImageAnalysis = {
    "schema": null,
    "id": null,
    "analysis": null,
    "ocr": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ImageAnalysis
console.log(exampleParsed)
```


