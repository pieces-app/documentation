
# OSDeviceInformationReturnable Model

This is the returnable model for the /os/device/information.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**dependencies** | [**OSDeviceDependenciesInformation**](OSDeviceDependenciesInformation)
**name** | **string**
**version** | **string**
**hardware** | [**OSDeviceHardwareInformation**](OSDeviceHardwareInformation)

## Example Model

```typescript
import { OSDeviceInformationReturnable } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: OSDeviceInformationReturnable = {
    "schema": null,
    "dependencies": null,
    "name": null,
    "version": null,
    "hardware": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OSDeviceInformationReturnable
console.log(exampleParsed)
```


