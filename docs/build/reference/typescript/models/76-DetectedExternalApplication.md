
# DetectedExternalApplication Model

This is a detected External Application that comes from our endpoint that will get a snapshot of the installed applications on your machine.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**name** | **string**
**version** | **string**

## Example Model

```typescript
import { DetectedExternalApplication } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: DetectedExternalApplication = {
    "schema": null,
    "name": null,
    "version": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DetectedExternalApplication
console.log(exampleParsed)
```


