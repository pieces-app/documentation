
# TrackedUserProfile

A user that will be passed along with each analytics event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** | The ID of the user that you are tracking. | [default to undefined]
**username** | **string** | This is a username that is attempted to be assigned but is \&quot;Anonymous User\&quot; by default | [default to 'unknown']
**email** | **string** | The user\&#39;s email if we have it. | [optional] [default to undefined]
**granularity** | **string** | At what level is this user being tracked. | [default to GranularityEnum_Anonymous]

## Example

```typescript
import { TrackedUserProfile } from '';

// TODO: Update the object below with actual values
const example: TrackedUserProfile = {
    "schema": null, // 
    "id": null, // The ID of the user that you are tracking.
    "username": null, // This is a username that is attempted to be assigned but is \&quot;Anonymous User\&quot; by default
    "email": null, // The user\&#39;s email if we have it.
    "granularity": null, // At what level is this user being tracked.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedUserProfile;
console.log(exampleParsed);
```




