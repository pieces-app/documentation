
# SeededSensitive

This is the seededSensitive, this does not have an id yet as we will add it on the server side.  can optionally pass in our mechanism here, as the default will be manual unless specified.  TODO consider updating these asset,format to referenced Models

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**asset** | **string** |  | [default to undefined]
**text** | **string** | this is the string representative of the sensative piece of data. | [default to undefined]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] [default to undefined]
**category** | [**SensitiveCategoryEnum**](SensitiveCategoryEnum) |  | [default to undefined]
**severity** | [**SensitiveSeverityEnum**](SensitiveSeverityEnum) |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**metadata** | [**SensitiveMetadata**](SensitiveMetadata) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededSensitive } from '';

// TODO: Update the object below with actual values
const example: SeededSensitive = {
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
const exampleParsed = JSON.parse(exampleJSON) as SeededSensitive;
console.log(exampleParsed);
```




