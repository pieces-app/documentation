
# Sensitive

This is a fully referenced representation of a sensitive pieces of data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**asset** | [**FlattenedAsset**](FlattenedAsset) |  | [default to undefined]
**text** | **string** |  | [default to undefined]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [default to undefined]
**category** | [**SensitiveCategoryEnum**](SensitiveCategoryEnum) |  | [default to undefined]
**severity** | [**SensitiveSeverityEnum**](SensitiveSeverityEnum) |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**metadata** | [**SensitiveMetadata**](SensitiveMetadata) |  | [optional] [default to undefined]
**interactions** | **number** | This is an optional value that will keep track of the number of times this has been interacted with. | [optional] [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]

## Example

```typescript
import { Sensitive } from '';

// TODO: Update the object below with actual values
const example: Sensitive = {
    "schema": null, // 
    "id": null, // 
    "created": null, // 
    "updated": null, // 
    "deleted": null, // 
    "asset": null, // 
    "text": null, // 
    "mechanism": null, // 
    "category": null, // 
    "severity": null, // 
    "name": null, // 
    "description": null, // 
    "metadata": null, // 
    "interactions": null, // This is an optional value that will keep track of the number of times this has been interacted with.
    "score": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Sensitive;
console.log(exampleParsed);
```




