
# SeededModel

This is Precursor to a Model.  bytes: here is the size of the model in a file local on your computer. ram: is the amount of ram usage when the model is loaded into memory.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**version** | **string** | this is a version of the model. | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**name** | **string** | This is an Optional Name of the Model. | [default to undefined]
**description** | **string** | An Optional Description of the model itself. | [optional] [default to undefined]
**cloud** | **boolean** | This will inform the user if this was a model that is hosted in the cloud | [default to undefined]
**type** | [**ModelTypeEnum**](ModelTypeEnum) |  | [default to undefined]
**usage** | [**ModelUsageEnum**](ModelUsageEnum) |  | [default to undefined]
**bytes** | [**ByteDescriptor**](ByteDescriptor) |  | [optional] [default to undefined]
**ram** | [**ByteDescriptor**](ByteDescriptor) |  | [optional] [default to undefined]
**quantization** | **string** | quantization is a string like: q8f16_0,  q4f16_1, etc... | [optional] [default to undefined]
**foundation** | [**ModelFoundationEnum**](ModelFoundationEnum) |  | [optional] [default to undefined]
**downloaded** | **boolean** | This is an optional bool to let us know if this model has been downloaded locally. | [optional] [default to undefined]
**unique** | **string** | This is the unique model name used to load the model. | [optional] [default to undefined]
**parameters** | **number** | This is the number of parameters in terms of billions. | [optional] [default to undefined]
**provider** | [**ExternalMLProviderEnum**](ExternalMLProviderEnum) |  | [optional] [default to undefined]
**cpu** | **boolean** | This is an optional bool that is optimized for CPU usage. | [optional] [default to undefined]
**maxTokens** | [**ModelMaxTokens**](ModelMaxTokens) |  | [optional] [default to undefined]
**custom** | **boolean** | This is reserved to custommly registed models. | [optional] [default to undefined]

## Example

```typescript
import { SeededModel } from '';

// TODO: Update the object below with actual values
const example: SeededModel = {
    "schema": null, // 
    "version": null, // this is a version of the model.
    "created": null, // 
    "name": null, // This is an Optional Name of the Model.
    "description": null, // An Optional Description of the model itself.
    "cloud": null, // This will inform the user if this was a model that is hosted in the cloud
    "type": null, // 
    "usage": null, // 
    "bytes": null, // 
    "ram": null, // 
    "quantization": null, // quantization is a string like: q8f16_0,  q4f16_1, etc...
    "foundation": null, // 
    "downloaded": null, // This is an optional bool to let us know if this model has been downloaded locally.
    "unique": null, // This is the unique model name used to load the model.
    "parameters": null, // This is the number of parameters in terms of billions.
    "provider": null, // 
    "cpu": null, // This is an optional bool that is optimized for CPU usage.
    "maxTokens": null, // 
    "custom": null, // This is reserved to custommly registed models.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededModel;
console.log(exampleParsed);
```




