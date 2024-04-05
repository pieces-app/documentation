
# Users

A base class for a collection of users and some additional meta properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**iterable** | [**Array&lt;UserProfile&gt;**](UserProfile) |  | [optional] [default to undefined]

## Example

```typescript
import { Users } from '';

// TODO: Update the object below with actual values
const example: Users = {
    "schema": null, // 
    "iterable": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Users;
console.log(exampleParsed);
```




