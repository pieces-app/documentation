
# OSDeviceDependenciesInformation

This will lets us know about specific dependencies that we are looking for on the device that are needed for specific tasks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**vulkan** | **boolean** | This will let us know if vulkan is present &#x3D; true or not there &#x3D;&#x3D;false | [default to undefined]

## Example

```typescript
import { OSDeviceDependenciesInformation } from '';

// TODO: Update the object below with actual values
const example: OSDeviceDependenciesInformation = {
    "schema": null, // 
    "vulkan": null, // This will let us know if vulkan is present &#x3D; true or not there &#x3D;&#x3D;false
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OSDeviceDependenciesInformation;
console.log(exampleParsed);
```




