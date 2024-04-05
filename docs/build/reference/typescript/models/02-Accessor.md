
# Accessor

This is used to determine who has accessed a share. and how many times.  The user here is the user that accessed this Piece.(optional) if undefined then this user was not logged in yet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**os** | **string** | this is an os id. | [default to undefined]
**share** | **string** |  | [default to undefined]
**count** | **number** | how many times this user accessed this piece. | [default to undefined]
**user** | [**FlattenedUserProfile**](FlattenedUserProfile) |  | [optional] [default to undefined]

## Example

```typescript
import { Accessor } from '';

// TODO: Update the object below with actual values
const example: Accessor = {
    "schema": null, // 
    "id": null, // 
    "os": null, // this is an os id.
    "share": null, // 
    "count": null, // how many times this user accessed this piece.
    "user": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Accessor;
console.log(exampleParsed);
```




