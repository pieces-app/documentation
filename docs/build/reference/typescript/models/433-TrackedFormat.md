
# TrackedFormat

A minimal format to send to Mixpanel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** | The UUID of the format | [default to undefined]
**classification** | [**Classification**](Classification) |  | [default to undefined]
**role** | [**Role**](Role) |  | [default to undefined]
**asset** | **string** | The UUID of the asset associated | [default to undefined]
**fragment** | **boolean** |  | [default to undefined]
**file** | **boolean** |  | [default to undefined]

## Example

```typescript
import { TrackedFormat } from '';

// TODO: Update the object below with actual values
const example: TrackedFormat = {
    "schema": null, // 
    "id": null, // The UUID of the format
    "classification": null, // 
    "role": null, // 
    "asset": null, // The UUID of the asset associated
    "fragment": null, // 
    "file": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedFormat;
console.log(exampleParsed);
```




