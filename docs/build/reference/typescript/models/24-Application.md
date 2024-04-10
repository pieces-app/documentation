
# Application Model

A Model to describe what application a format/analytics event originated.  mechanism: This will let us know where this came from. ie.only 2 enums are used here or else throw and error. default mechanism here is MANUAL- meaning that this came from our user Connecting an application. INTERNAL - means that this came from a shareable link

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**name** | [**ApplicationNameEnum**](ApplicationNameEnum)
**version** | **string**
**platform** | [**PlatformEnum**](PlatformEnum)
**onboarded** | **boolean**
**privacy** | [**PrivacyEnum**](PrivacyEnum)
**capabilities** | [**CapabilitiesEnum**](CapabilitiesEnum)
**mechanism** | [**MechanismEnum**](MechanismEnum)
**automaticUnload** | **boolean**

## Example Model

```typescript
import { Application } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Application = {
    "schema": null,
    "id": null,
    "name": null,
    "version": null,
    "platform": null,
    "onboarded": null,
    "privacy": null,
    "capabilities": null,
    "mechanism": null,
    "automaticUnload": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Application
console.log(exampleParsed)
```


