
# SeededConnectorAsset

A generic model to use with the Connector API that requires little to no additional information about the current application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**metadata** | [**SeededAssetMetadata**](SeededAssetMetadata) |  | [optional] [default to undefined]
**format** | [**SeededFormat**](SeededFormat) |  | [default to undefined]

## Example

```typescript
import { SeededConnectorAsset } from '';

// TODO: Update the object below with actual values
const example: SeededConnectorAsset = {
    "schema": null, // 
    "metadata": null, // 
    "format": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededConnectorAsset;
console.log(exampleParsed);
```




