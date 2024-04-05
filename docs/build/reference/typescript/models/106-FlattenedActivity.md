
# FlattenedActivity

Note: - if mechanism == internal we will not display to the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**event** | [**SeededConnectorTracking**](SeededConnectorTracking) |  | [default to undefined]
**application** | [**Application**](Application) |  | [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | [optional] [default to undefined]
**format** | [**ReferencedFormat**](ReferencedFormat) |  | [optional] [default to undefined]
**user** | [**FlattenedUserProfile**](FlattenedUserProfile) |  | [optional] [default to undefined]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [default to undefined]
**rank** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { FlattenedActivity } from '';

// TODO: Update the object below with actual values
const example: FlattenedActivity = {
    "schema": null, // 
    "id": null, // 
    "created": null, // 
    "updated": null, // 
    "event": null, // 
    "application": null, // 
    "deleted": null, // 
    "asset": null, // 
    "format": null, // 
    "user": null, // 
    "mechanism": null, // 
    "rank": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedActivity;
console.log(exampleParsed);
```




