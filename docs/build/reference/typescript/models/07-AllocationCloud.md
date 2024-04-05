
# AllocationCloud

update && version: will be present only if your cloud was successfully spun up && running.  updated: is the last time this was updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** | This is a uuid that represents this cloud.(this is the same as the userid) | [default to undefined]
**user** | **string** | this is your useruuid. | [default to undefined]
**urls** | [**AllocationCloudUrls**](AllocationCloudUrls) |  | [default to undefined]
**status** | [**AllocationCloudStatus**](AllocationCloudStatus) |  | [default to undefined]
**project** | **string** | This is the project that this is attached to. | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**version** | **string** | this is the current version of the server. | [optional] [default to undefined]
**region** | **string** | this is the region where the project is defined. | [optional] [default to undefined]

## Example

```typescript
import { AllocationCloud } from '';

// TODO: Update the object below with actual values
const example: AllocationCloud = {
    "schema": null, // 
    "id": null, // This is a uuid that represents this cloud.(this is the same as the userid)
    "user": null, // this is your useruuid.
    "urls": null, // 
    "status": null, // 
    "project": null, // This is the project that this is attached to.
    "updated": null, // 
    "version": null, // this is the current version of the server.
    "region": null, // this is the region where the project is defined.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AllocationCloud;
console.log(exampleParsed);
```




