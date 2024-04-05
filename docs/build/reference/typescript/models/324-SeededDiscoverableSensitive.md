
# SeededDiscoverableSensitive

This is the SeededDiscoverableSensitive, this has every property that the seededSensitive has except this one is all optionally passed in. and will override our classification if provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**asset** | **string** |  | [default to undefined]
**text** | **string** | this is the string representative of the sensative piece of data. | [default to undefined]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] [default to undefined]
**category** | [**SensitiveCategoryEnum**](SensitiveCategoryEnum) |  | [optional] [default to undefined]
**severity** | [**SensitiveSeverityEnum**](SensitiveSeverityEnum) |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**metadata** | [**SensitiveMetadata**](SensitiveMetadata) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededDiscoverableSensitive } from '';

// TODO: Update the object below with actual values
const example: SeededDiscoverableSensitive = {
    "schema": null, // 
    "asset": null, // 
    "text": null, // this is the string representative of the sensative piece of data.
    "mechanism": null, // 
    "category": null, // 
    "severity": null, // 
    "name": null, // 
    "description": null, // 
    "metadata": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededDiscoverableSensitive;
console.log(exampleParsed);
```




