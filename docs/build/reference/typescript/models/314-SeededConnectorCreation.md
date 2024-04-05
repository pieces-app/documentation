
# SeededConnectorCreation

A encompasing creation object that can be utilized to create either an asset or a format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**asset** | [**SeededConnectorAsset**](SeededConnectorAsset) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededConnectorCreation } from '';

// TODO: Update the object below with actual values
const example: SeededConnectorCreation = {
    "schema": null, // 
    "asset": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededConnectorCreation;
console.log(exampleParsed);
```




