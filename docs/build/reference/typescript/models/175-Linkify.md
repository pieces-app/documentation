
# Linkify

This is the incoming linkify model.  if access is PRIVATE then please provide and array of users to enable the link for. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**seed** | [**Seed**](Seed) |  | [optional] [default to undefined]
**asset** | [**Asset**](Asset) |  | [optional] [default to undefined]
**users** | [**Array&lt;SeededUser&gt;**](SeededUser) | this is an array of users. | [optional] [default to undefined]
**access** | [**AccessEnum**](AccessEnum) |  | [default to undefined]
**distributions** | [**SeededDistributions**](SeededDistributions) |  | [optional] [default to undefined]

## Example

```typescript
import { Linkify } from '';

// TODO: Update the object below with actual values
const example: Linkify = {
    "schema": null, // 
    "seed": null, // 
    "asset": null, // 
    "users": null, // this is an array of users.
    "access": null, // 
    "distributions": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Linkify;
console.log(exampleParsed);
```




