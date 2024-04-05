
# FlattenedUserProfile

This is a FlattenedUserProfile that includes information that is not sensative in relation to a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** | this is the uuid that identifies a user. | [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**username** | **string** |  | [optional] [default to undefined]
**picture** | **string** |  | [optional] [default to undefined]
**vanityname** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { FlattenedUserProfile } from '';

// TODO: Update the object below with actual values
const example: FlattenedUserProfile = {
    "schema": null, // 
    "id": null, // this is the uuid that identifies a user.
    "email": null, // 
    "name": null, // 
    "username": null, // 
    "picture": null, // 
    "vanityname": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedUserProfile;
console.log(exampleParsed);
```




