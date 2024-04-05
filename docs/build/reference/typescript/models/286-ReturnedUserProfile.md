
# ReturnedUserProfile

This is a modle strictly for the purpose that when calling \'/user\' and other user related endpoints the UserProfile could potentially be null, so we needed a model to do that.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**user** | [**UserProfile**](UserProfile) |  | [optional] [default to undefined]

## Example

```typescript
import { ReturnedUserProfile } from '';

// TODO: Update the object below with actual values
const example: ReturnedUserProfile = {
    "schema": null, // 
    "user": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReturnedUserProfile;
console.log(exampleParsed);
```




