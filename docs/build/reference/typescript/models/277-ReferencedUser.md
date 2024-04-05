
# ReferencedUser

A object to reference a user\'s ID and optionally a FlattenedUserProfile Instance 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**reference** | [**FlattenedUserProfile**](FlattenedUserProfile) |  | [optional] [default to undefined]

## Example

```typescript
import { ReferencedUser } from '';

// TODO: Update the object below with actual values
const example: ReferencedUser = {
    "schema": null, // 
    "id": 497f6eca-6276-4993-bfeb-53cbbbba6f08, // 
    "reference": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedUser;
console.log(exampleParsed);
```




