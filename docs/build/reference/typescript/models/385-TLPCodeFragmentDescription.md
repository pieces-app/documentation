
# TLPCodeFragmentDescription

Model for ML big query Code Description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | This is the stringified json of a TLPDescription object | [optional] [default to undefined]
**asset** | **string** | This is the asset id. | [default to undefined]
**created** | **string** | timestamp of creation | [default to undefined]
**model** | **string** | this is the model version | [default to undefined]
**latency** | **number** | the time it takes to run this model. | [optional] [default to undefined]
**user** | **string** | the uuid of the user the description was created for. | [default to undefined]
**context** | **string** | the application this description was created from. | [optional] [default to undefined]
**os** | **string** | This is the UUID of the OS that this context is currently connected to. | [optional] [default to undefined]

## Example

```typescript
import { TLPCodeFragmentDescription } from '';

// TODO: Update the object below with actual values
const example: TLPCodeFragmentDescription = {
    "description": null, // This is the stringified json of a TLPDescription object
    "asset": null, // This is the asset id.
    "created": null, // timestamp of creation
    "model": null, // this is the model version
    "latency": null, // the time it takes to run this model.
    "user": null, // the uuid of the user the description was created for.
    "context": null, // the application this description was created from.
    "os": null, // This is the UUID of the OS that this context is currently connected to.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeFragmentDescription;
console.log(exampleParsed);
```




