
# Users

A base class for a collection of users and some additional meta properties.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;UserProfile&gt;**](UserProfile)

## Example

```typescript
import { Users } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: Users = {
    "schema": null,
    "iterable": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Users;
console.log(exampleParsed);
```


