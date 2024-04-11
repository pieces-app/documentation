
# SeededTrackedApplication

A Model to describe what application a format/analytics event originated - Specifically NOT requiring an ID

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**name** | [**ApplicationNameEnum**](ApplicationNameEnum)
**version** | **string**
**platform** | [**PlatformEnum**](PlatformEnum)
**capabilities** | [**CapabilitiesEnum**](CapabilitiesEnum)
**privacy** | [**PrivacyEnum**](PrivacyEnum)
**automaticUnload** | **boolean**

## Example

```typescript
import { SeededTrackedApplication } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededTrackedApplication = {
    "schema": null,
    "name": null,
    "version": null,
    "platform": null,
    "capabilities": null,
    "privacy": null,
    "automaticUnload": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTrackedApplication
console.log(exampleParsed)
```


