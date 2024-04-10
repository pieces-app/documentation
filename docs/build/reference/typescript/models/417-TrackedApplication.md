
# TrackedApplication Model

A Model to describe what application a format/analytics event originated.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**name** | [**ApplicationNameEnum**](ApplicationNameEnum)
**version** | **string**
**platform** | [**PlatformEnum**](PlatformEnum)
**automaticUnload** | **boolean**

## Example Model

```typescript
import { TrackedApplication } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TrackedApplication = {
    "schema": null,
    "id": null,
    "name": null,
    "version": null,
    "platform": null,
    "automaticUnload": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedApplication
console.log(exampleParsed)
```


