
# Auth0UserAllocationMetadata

This is specifically for our allocation server metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project** | **string** |  | [default to undefined]
**region** | **string** |  | [default to undefined]

## Example

```typescript
import { Auth0UserAllocationMetadata } from '';

// TODO: Update the object below with actual values
const example: Auth0UserAllocationMetadata = {
    "project": null, // 
    "region": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Auth0UserAllocationMetadata;
console.log(exampleParsed);
```




