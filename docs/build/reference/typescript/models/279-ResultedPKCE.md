
# ResultedPKCE

A Model To Represent the Code Returned from a PKCE Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**code** | **string** | The PKCE Code to be used to access a Token. | [default to undefined]
**state** | **string** | Likely the state that will be returned which should match the requested state as well as the nonce | [default to undefined]

## Example

```typescript
import { ResultedPKCE } from '';

// TODO: Update the object below with actual values
const example: ResultedPKCE = {
    "schema": null, // 
    "code": null, // The PKCE Code to be used to access a Token.
    "state": null, // Likely the state that will be returned which should match the requested state as well as the nonce
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResultedPKCE;
console.log(exampleParsed);
```




