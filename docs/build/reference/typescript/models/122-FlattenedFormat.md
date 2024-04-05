
# FlattenedFormat

A representation of Data for a particular Form Factor of an Asset.[DAG Compatible - Directed Acyclic Graph Data Structure]  FlattenedFormats prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.  i.e. FlattenedFormat.asset is Type String  fragment or file will always be defined. Even thought they are both optional.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**creator** | **string** |  | [default to undefined]
**classification** | [**Classification**](Classification) |  | [default to undefined]
**icon** | **string** |  | [optional] [default to undefined]
**role** | [**Role**](Role) |  | [default to undefined]
**application** | [**Application**](Application) |  | [default to undefined]
**asset** | **string** | A uuid model. 36 Characters (4 Dashes, 32 Numbers/Letters)  | [default to undefined]
**bytes** | [**ByteDescriptor**](ByteDescriptor) |  | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**synced** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**cloud** | **string** | This is a path used to determine what path this format lives at within the cloud. | [optional] [default to undefined]
**fragment** | [**FragmentFormat**](FragmentFormat) |  | [optional] [default to undefined]
**file** | [**FileFormat**](FileFormat) |  | [optional] [default to undefined]
**analysis** | [**FlattenedAnalysis**](FlattenedAnalysis) |  | [optional] [default to undefined]
**relationship** | [**Relationship**](Relationship) |  | [optional] [default to undefined]
**activities** | [**FlattenedActivities**](FlattenedActivities) |  | [optional] [default to undefined]

## Example

```typescript
import { FlattenedFormat } from '';

// TODO: Update the object below with actual values
const example: FlattenedFormat = {
    "schema": null, // 
    "id": 102ff265-fdfb-4142-8d94-4932d400199c, // 
    "creator": 497f6eca-6276-4993-bfeb-53cbbbba6f08, // 
    "classification": null, // 
    "icon": null, // 
    "role": null, // 
    "application": null, // 
    "asset": 6a2f41a3-c54c-fce8-32d2-0324e1c32e22, // A uuid model. 36 Characters (4 Dashes, 32 Numbers/Letters) 
    "bytes": null, // 
    "created": null, // 
    "updated": null, // 
    "deleted": null, // 
    "synced": null, // 
    "cloud": null, // This is a path used to determine what path this format lives at within the cloud.
    "fragment": null, // 
    "file": null, // 
    "analysis": null, // 
    "relationship": null, // 
    "activities": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedFormat;
console.log(exampleParsed);
```




