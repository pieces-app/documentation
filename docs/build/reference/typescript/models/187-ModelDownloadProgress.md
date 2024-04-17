
# ModelDownloadProgress

This is the model that is sent over our ws for streaming the progress of a model that is being downloaded.  can eventually add a number that display the percent downloaded an so on.(this is called percent 0-100)

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**status** | [**ModelDownloadProgressStatusEnum**](ModelDownloadProgressStatusEnum)
**percentage** | **number**

## Example

```typescript
import { ModelDownloadProgress } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ModelDownloadProgress = {
    "schema": null,
    "status": null,
    "percentage": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelDownloadProgress
console.log(exampleParsed)
```


