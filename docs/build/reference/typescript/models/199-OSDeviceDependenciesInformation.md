
# OSDeviceDependenciesInformation

This will lets us know about specific dependencies that we are looking for on the device that are needed for specific tasks.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**vulkan** | **boolean**

## Example

```typescript
import { OSDeviceDependenciesInformation } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: OSDeviceDependenciesInformation = {
    "schema": null,
    "vulkan": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OSDeviceDependenciesInformation
console.log(exampleParsed)
```


